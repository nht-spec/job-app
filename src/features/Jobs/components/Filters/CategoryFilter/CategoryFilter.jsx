import React, { useEffect, useState } from 'react';
import './style.scss';
CategoryFilter.propTypes = {};

const categoryList = [
	{
		category: 'Accounting',
	},
	{
		category: 'Account Management/Customer Success',
	},
	{
		category: 'Corporate',
	},
	{
		category: 'Customer Service Career',
	},
	{
		category: 'Data Science',
	},
	{ category: 'Design' },
	{ category: 'Editor' },
	{ category: 'Education' },
	{ category: 'HR' },
	{ category: 'IT' },
	{ category: 'Law' },
	{ category: 'Marketing' },
	{ category: 'Mechanic' },
	{ category: 'Mental Health' },
	{ category: 'Nurses' },
	{ category: 'Office Administration' },
	{ category: 'Physical Assistant' },
	{ category: 'Product' },
	{ category: 'Project Management' },
	{ category: 'Public Relations' },
	{ category: 'Recruiting' },
	{ category: 'Retail' },
	{ category: 'Sales' },
	{ category: 'Software Engineer' },
	{ category: 'UX' },
	{ category: 'Videography' },
	{ category: 'Writer' },
];

function CategoryFilter({ handlechangecategory }) {
	const [categoryChoose, setCategoryChoose] = useState([]);
	const [mode, setMode] = useState(true);

	const handleChange = (evt) => {
		const checked = evt.target.checked;
		const values = evt.target.value;

		checked &&
			setCategoryChoose((preventDefault) => [
				...preventDefault,
				{ category: values },
			]);

		!checked &&
			setCategoryChoose(
				categoryChoose.filter((item) => item.category !== values)
			);
	};

	useEffect(() => {
		handlechangecategory && handlechangecategory(categoryChoose);
	}, [handlechangecategory, categoryChoose]);
	return (
		<div className='category-list-control'>
			<div onClick={() => setMode(!mode)}>
				{mode && (
					<div className='title-choose-category'>
						<p>The job category to get</p>
						<p className='text'>+ show</p>
					</div>
				)}
				{!mode && (
					<div className='title-choose-category'>
						<p>The job category to get</p>
						<p className='text'>- hide</p>
					</div>
				)}
			</div>

			<div
				className='category-list-layout'
				style={!mode ? {} : { display: 'none' }}
			>
				{categoryList.map((data, idx) => (
					<div
						className='item-category'
						style={!mode ? {} : { display: 'none' }}
						key={idx}
					>
						<input
							className='input-checkbox'
							id={idx}
							value={data.category}
							onChange={handleChange}
							type='checkbox'
						/>
						<p>{data.category}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default CategoryFilter;
