import React, { useEffect, useState } from 'react';

FormSearchCompany.propTypes = {};

function FormSearchCompany({ name, company, placeholder, companyName }) {
	const [value, setValue] = useState('');
	const handleChange = (values) => {
		setValue(values.target.value);

		company && company(values.target.value);
	};

	useEffect(() => {
		companyName && setValue(companyName);
	}, [companyName]);
	return (
		<input
			autoComplete='off'
			placeholder={placeholder}
			className='input-field'
			value={value}
			onChange={handleChange}
			type='text'
			name={name}
		/>
	);
}

export default FormSearchCompany;
