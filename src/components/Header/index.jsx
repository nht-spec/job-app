import React from 'react';
import CompanyFilter from '../../features/Jobs/components/Filters/CompanyFilter/CompanyFilter';
import './style.scss';

function Header({ datas, handlechangecompany, issubmit }) {
	return (
		<div className='header-control'>
			<div className='header-title'>
				<p className='brand-name-one'>Github</p>
				<p className='brand-name-two'>Jobs</p>
			</div>
			<div className='header-backgroup-from-search'>
				<CompanyFilter
					issubmit={issubmit}
					handlechangecompany={handlechangecompany}
					datas={datas}
				/>
			</div>
		</div>
	);
}

export default Header;
