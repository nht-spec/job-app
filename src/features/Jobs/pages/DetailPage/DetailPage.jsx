import { LinearProgress } from '@mui/material';
import moment from 'moment';
import parse from 'html-react-parser';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useJobDetail from '../../hooks/useJobDetail';
import './style.scss';

function DetailPage() {
	const {
		params: { jobId },
	} = useRouteMatch();

	const { job, loading } = useJobDetail(jobId);
	const datas = job.data;
	let contents = '';
	if (datas) {
		contents = datas.contents;
	}

	if (loading) {
		return <LinearProgress color='success' />;
	}
	return (
		<div className='container-detail'>
			<div className='detail-page-title'>
				<p className='detail-name-one'>Github</p>
				<p className='detail-name-two'>Jobs</p>
			</div>
			<div className='container-item-list'>
				<div className='nav-bar-detail' item>
					<div className='link-back-search'>
						<span className='material-icons-round'>trending_flat</span>
						<Link className='btn-back' to='/search'>
							Back to search
						</Link>
					</div>
					<h2 className='text-title'>HOw to Apply</h2>
					<p className='desc-text'>
						Please email a copy of your resume and online portfolio to
					</p>
					<a className='link-job' href={datas && datas.refs?.landing_page}>
						{datas && datas.short_name}
					</a>
				</div>
				<div className='contents-detail' item>
					<div className='title-list-info'>
						<div className='job-name-time'>
							<p className='title-job-name'>{datas && datas.name}</p>
							<p className='layout-text'>Full time</p>
						</div>
						<div className='time-info-list'>
							<span className='material-icons-round'>schedule</span>
							<p className='time-text-info'>
								{moment(datas && datas.publication_date).fromNow()}
							</p>
						</div>
					</div>
					<div className='info-company'>
						<div className='logo-img'>
							<img
								style={{ width: '100%' }}
								src={`https://assets.themuse.com/uploaded/companies/${
									datas && datas.company.id
								}/small_logo.png?v=bbce2279b0aeb5bb2f65617f857913694c50c085e75413c8307c79b54bde2cb5`}
								alt=''
							/>
						</div>

						<div className='detail-company-list'>
							<h2 className='company-name'>{datas && datas.company.name}</h2>
							<div className='location-name-icons'>
								<span class='material-icons-round'>public</span>
								{datas &&
									datas.locations.map((data, idx) => (
										<>
											{idx === 0 && (
												<p key={idx} className='locations-name'>
													{data.name}
												</p>
											)}
										</>
									))}
							</div>
						</div>
					</div>

					<div className='detail-job-contents'>{parse(contents)}</div>
				</div>
			</div>
		</div>
	);
}

export default DetailPage;
