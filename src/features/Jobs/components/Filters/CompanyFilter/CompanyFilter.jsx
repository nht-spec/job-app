import React, { useEffect, useState } from 'react';
import FormSearchCompany from './FormSearchCompany';
import './style.scss';
CompanyFilter.propTypes = {};

function CompanyFilter({ datas, handlechangecompany, issubmit }) {
	const [companyList, setCompanyList] = useState([]);
	const [companyListInput, setCompanyListInput] = useState([]);
	const [valueInput, setValueInput] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [isCompany, setIsCompany] = useState('');
	const [isSubmit, setIsSubmit] = useState(false);
	const [mode, setMode] = useState(false);
	const company = (value) => {
		setValueInput(value);
		setCompanyName(value);
		value && setMode(!mode);
		setIsSubmit(false);
	};

	useEffect(() => {
		issubmit && issubmit(isSubmit);
	}, [isSubmit, issubmit]);

	const handelSubmit = (evt) => {
		evt.preventDefault();
		handlechangecompany && handlechangecompany(companyName);
		setIsSubmit(true);
	};

	useEffect(() => {
		const company = [];
		companyList.forEach((value) => {
			const valueinputLow = valueInput.toLowerCase();
			const nameLow = value.trim().toLowerCase();

			if (valueInput !== '' && nameLow.indexOf(valueinputLow) > -1) {
				company.push(value);
			}
		});
		setCompanyListInput(company);
	}, [valueInput, companyList]);

	useEffect(() => {
		const updatedValue = {};
		datas.results &&
			datas.results.map((data) => {
				updatedValue[data.company.name]
					? (updatedValue[data.company.name] += 1)
					: (updatedValue[data.company.name] = 1);
			});
		setCompanyList(Object.keys(updatedValue));
	}, [datas]);

	useEffect(() => {
		!companyName && setMode(false);
	}, [companyName]);

	useEffect(() => {
		mode && companyName === isCompany && setMode(!mode);
	}, [mode, isCompany, companyName]);

	return (
		<div className='company-search-list-control'>
			<form onSubmit={handelSubmit} className='form-search-control'>
				<div className='form-search-company'>
					<span className='material-icons'>work_outline</span>
					<FormSearchCompany
						companyName={companyName}
						company={company}
						name='company'
						placeholder='Title, companies, expertise or benefits'
					/>
				</div>
				<button className='btn-search-company' type='submit'>
					Search
				</button>
			</form>

			{mode && (
				<div className='company-list-name'>
					{companyListInput.map((data, idx) => (
						<li
							key={idx}
							onClick={() => {
								setCompanyName(data);
								setIsCompany(data);
							}}
						>
							{data}
						</li>
					))}
				</div>
			)}
		</div>
	);
}

export default CompanyFilter;
