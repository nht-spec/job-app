import React, { useEffect, useState } from 'react';
import InputField from '../../../../../components/form-controls/InputField';
import './style.scss';
LocationFilter.propTypes = {};

function LocationFilter({ data, handlechangelocation, issearch }) {
	const [locationsList, setLocationList] = useState([]);
	const [sortLocationsList, setSortLocationsList] = useState([]);
	const [valueInput, setValueInput] = useState('');
	const [locationsName, setLocationsName] = useState('');
	const [isLocation, setIsLocation] = useState('');
	const [isSearch, setIsSearch] = useState(false);
	const [mode, setMode] = useState(false);
	useEffect(() => {
		let updatedValue = {};
		data.results &&
			data.results.map((data) => {
				data.locations.map((data) => {
					updatedValue[data.name]
						? (updatedValue[data.name] += 1)
						: (updatedValue[data.name] = 1);
				});
			});
		setLocationList(Object.keys(updatedValue));
	}, [data]);

	useEffect(() => {
		const location = [];
		locationsList.forEach((value) => {
			const valueinputLow = valueInput.toLowerCase();
			const nameLow = value.trim().toLowerCase();

			if (valueInput !== '' && nameLow.indexOf(valueinputLow) > -1) {
				location.push(value);
			}
		});
		setSortLocationsList(location);
	}, [locationsList, valueInput]);

	useEffect(() => {
		!locationsName && setMode(false);
		handlechangelocation && handlechangelocation(isLocation);
	}, [locationsName, isLocation, handlechangelocation]);

	useEffect(() => {
		mode && locationsName === isLocation && setMode(!mode);
		locationsName === isLocation && setIsSearch(true);
		locationsName !== isLocation && setIsSearch(false);
		issearch && issearch(isSearch);
	}, [mode, isLocation, locationsName, isSearch, issearch]);

	const location = (value) => {
		setValueInput(value);
		setLocationsName(value);
		value && setMode(!mode);
	};

	return (
		<div className='location-sort'>
			<div className='input-field-location'>
				<span className='material-icons-outlined'>public</span>
				<InputField
					placeholder='City, state, zip code or country'
					name='location'
					location={location}
					locationsName={locationsName}
				/>
			</div>

			<div className='dropdown'>
				{mode && (
					<div className='dropdown-content'>
						{sortLocationsList.map((data, idx) => (
							<li
								onClick={() => {
									setLocationsName(data);
									setIsLocation(data);
								}}
								key={idx}
							>
								{data}
							</li>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default LocationFilter;
