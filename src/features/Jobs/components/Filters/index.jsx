import React from 'react';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import LevelFilter from './LevelFilter/LevelFilter';
import LocationFilter from './LocationFilter/LocationFilter';
import './style.scss';
Filters.propTypes = {};

function Filters({ handlechangeFilters, data, issearch }) {
	const handlechangelevel = (value) => {
		value &&
			handlechangeFilters &&
			handlechangeFilters([{ levelFilter: value }]);
	};

	const handlechangecategory = (value) => {
		handlechangeFilters && handlechangeFilters([{ categoryFilter: value }]);
	};

	const handlechangelocation = (value) => {
		handlechangeFilters && handlechangeFilters([{ locationFilter: value }]);
	};

	return (
		<div>
			<div className='full-time-date'>
				<input className='check-box' defaultChecked={true} type='checkbox' />
				<p className='full-time-title'>Full time</p>
			</div>
			<div className='level-filter'>
				<h2 className='level-filter-title'>Location</h2>
				<LocationFilter
					issearch={issearch}
					data={data}
					handlechangelocation={handlechangelocation}
				/>
			</div>
			<div className='level-filter'>
				<h2 className='level-filter-title'>Level</h2>
				<LevelFilter handlechangelevel={handlechangelevel} />
			</div>
			<div className='level-filter'>
				<h2 className='level-filter-title'>Category</h2>
				<CategoryFilter handlechangecategory={handlechangecategory} />
			</div>
		</div>
	);
}

export default Filters;
