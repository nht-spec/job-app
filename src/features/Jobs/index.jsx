import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Header from '../../components/Header';
import DetailPage from './pages/DetailPage/DetailPage';
import ListPage from './pages/ListPage/ListPage';
import './style.scss';
JobFeature.propTypes = {};

function JobFeature() {
	const [handlechangefilters, setHandlechangefilters] = useState([]);
	const [datas, setDatas] = useState([]);
	const [isSubmit, setIsSubmit] = useState(false);
	const data = (value) => {
		setDatas(value);
	};

	const handlechangecompany = (value) => {
		setHandlechangefilters(value);
	};

	return (
		<>
			<div className='job-features'>
				<Header
					issubmit={setIsSubmit}
					handlechangecompany={handlechangecompany}
					datas={datas}
				/>
				<ListPage
					isSubmit={isSubmit}
					handlechangefilters={handlechangefilters}
					data={data}
				/>
			</div>
		</>
	);
}

export default JobFeature;
