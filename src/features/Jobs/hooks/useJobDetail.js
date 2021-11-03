import { useEffect, useState } from 'react';
import jobApi from '../../../api/jobApi';

export default function useJobDetail(jobId) {
	const [job, setJob] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		jobId &&
			(async () => {
				try {
					setLoading(true);
					const result = await jobApi.get(jobId);
					setJob(result);
				} catch (error) {
					throw error;
				}
				setLoading(false);
			})();
	}, [jobId]);
	return {
		job,
		loading,
	};
}
