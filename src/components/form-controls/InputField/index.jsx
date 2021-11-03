import React, { useEffect, useState } from 'react';
import './style.scss';
InputField.propTypes = {};

function InputField({ name, location, placeholder, locationsName }) {
	const [value, setValue] = useState('');
	const handleChange = (values) => {
		setValue(values.target.value);
		location && location(values.target.value);
	};

	useEffect(() => {
		locationsName && setValue(locationsName);
	}, [locationsName]);

	return (
		<>
			<input
				autoComplete='off'
				placeholder={placeholder}
				className='input-field'
				value={value}
				onChange={handleChange}
				type='text'
				name={name}
			/>
		</>
	);
}

export default InputField;
