import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router';
import './style.scss';

function Job({ job }) {
	const history = useHistory();
	const handleClick = () => {
		history.push(`/job/${job.id}`);
	};
	return (
		<div onClick={handleClick} className='job-control'>
			<div className='container-img'>
				<img
					src={`https://assets.themuse.com/uploaded/companies/${job.company.id}/small_logo.png?v=2feb5a651975ccd6da3a6140b648b843a5a17b3ceda5bf9892723157756383e4`}
					alt=''
				/>
			</div>

			<div className='company-info-control'>
				<p className='company-name'>{job.company.name}</p>
				<p className='job-name'>{job.name}</p>
				<p className='date-title'>Full time</p>
			</div>

			<div className='location-date-control'>
				<div className='location-icons'>
					<span className='material-icons'>public</span>
					<p className='locations-name'>{job.locations[0]?.name}</p>
				</div>

				<div className='date-icons'>
					<span className='material-icons'>schedule</span>
					<p className='date-public'>
						{moment(job.publication_date).fromNow()}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Job;
