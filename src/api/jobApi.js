import ApiKeys from '../constants/api-key';
import axiosApi from './axiosApi';

const jobApi = {
	async getAll(params) {
		const newParams = { ...params };
		newParams.page = !params._page || params._page < 1 ? 0 : params._page;
		newParams.category = params.category;
		newParams.level = params.level;
		newParams.company = params.company;
		newParams.location = params.location;
		newParams.api_key = ApiKeys.RATE;
		delete newParams._page;

		const jobList = await axiosApi.get('api/public/jobs', {
			params: newParams,
		});
		return {
			data: jobList,
			pagination: {
				page: params._page,
			},
		};
	},
	get(jobId) {
		const url = `api/public/jobs/${jobId}`;
		return axiosApi.get(url);
	},
};
export default jobApi;
