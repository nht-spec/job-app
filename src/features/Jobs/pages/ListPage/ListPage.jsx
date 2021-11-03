import { Container, Grid, LinearProgress, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import jobApi from '../../../../api/jobApi';
import Filters from '../../components/Filters';
import JobList from '../../components/JobList/JobList';
import './style.scss';

function ListPage({ data, handlechangefilters, isSubmit, isdetail, idJob }) {
	const [jobList, setJobList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [levels, setLevels] = useState([]);
	const [categories, setCategories] = useState([]);
	const [locations, setLocations] = useState([]);
	const [company, setCompany] = useState([]);
	const [isSearchLocation, setIsSearchLocation] = useState();
	const [filters, setFilters] = useState({
		_page: 1,
	});

	const handleChange = (event, value) => {
		setPage(value);
		setFilters((prevFilters) => ({
			...prevFilters,
			_page: value,
		}));
	};
	const handlechangeFilters = (newSortValue) => {
		newSortValue.map((data) => {
			data.levelFilter && setLevels(data.levelFilter);
			data.categoryFilter && setCategories(data.categoryFilter);
			data.locationFilter && setLocations(data.locationFilter);
		});
	};

	useEffect(() => {
		handlechangefilters && setCompany(handlechangefilters);
	}, [handlechangefilters]);
	useEffect(() => {
		data && data(jobList);
	}, [jobList, data]);

	useEffect(() => {
		(async () => {
			const { data } = await jobApi.getAll(filters);
			data && setJobList(data.data);
			setLoading(false);
		})();
	}, [filters]);

	useEffect(() => {
		let sortLevel = [];
		levels && levels.map((data) => sortLevel.push(data.level));

		setFilters((prevFilters) => ({
			...prevFilters,
			level: [sortLevel],
		}));
	}, [levels]);

	useEffect(() => {
		let sortCategory = [];
		categories && categories.map((data) => sortCategory.push(data.category));

		setFilters((prevFilters) => ({
			...prevFilters,
			category: [sortCategory],
		}));
	}, [categories]);

	useEffect(() => {
		locations.length !== 0 &&
			isSearchLocation &&
			setFilters((prevFilters) => ({
				...prevFilters,
				location: locations,
			}));

		locations.length !== 0 &&
			!isSearchLocation &&
			setFilters(() => {
				const newFilter = { ...filters };
				delete newFilter.location;
				return newFilter;
			});
	}, [isSearchLocation, locations]);

	useEffect(() => {
		isSubmit &&
			setFilters((prevFilters) => ({
				...prevFilters,
				company: company,
			}));
		!isSubmit &&
			setFilters(() => {
				const newFilter = { ...filters };
				delete newFilter.company;
				return newFilter;
			});
	}, [company, isSubmit]);

	return (
		<Box>
			<Container className='container-body'>
				<Grid container direction='row' flexWrap='nowrap'>
					<Grid className='navbar-colum' item>
						<Filters
							issearch={setIsSearchLocation}
							data={jobList}
							handlechangeFilters={handlechangeFilters}
						/>
					</Grid>
					<Grid className='contens-colum' item>
						{loading && <LinearProgress className='progress' color='success' />}
						{<JobList idJob={idJob} isdetail={isdetail} data={jobList} />}
						<Pagination
							className='pagination-style'
							onChange={handleChange}
							count={jobList.page_count > 99 ? 99 : jobList.page_count}
							page={page}
							variant='outlined'
							shape='rounded'
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
export default ListPage;
