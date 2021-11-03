import React from 'react';
import Job from '../Job/Job';
import './style.scss';
JobList.propTypes = {};

function JobList({ data, isdetail, idJob }) {
	return (
		<div>
			{data.results &&
				data.results.map((job, idx) => (
					<div key={job.id}>
						{idx < 5 && (
							<div key={idx} className='job-list'>
								{<Job idJob={idJob} isdetail={isdetail} job={job} />}
							</div>
						)}
					</div>
				))}
		</div>
	);
}

export default JobList;
