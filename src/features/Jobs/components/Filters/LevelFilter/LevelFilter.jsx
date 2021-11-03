import React, { useEffect, useState } from 'react';
import './style.scss';
LevelFilter.propTypes = {};

const levelList = [
	{ level: 'Entry Level' },
	{ level: 'Mid Level' },
	{ level: 'Senior Level' },
	{ level: 'management' },
	{ level: 'Internship' },
];

function LevelFilter({ handlechangelevel }) {
	const [levelChoose, setLevelChoose] = useState([]);
	const [mode, setMode] = useState(true);

	const handleChange = (evt) => {
		const checked = evt.target.checked;
		const values = evt.target.value;

		checked &&
			setLevelChoose((preventDefault) => [
				...preventDefault,
				{ level: values },
			]);

		!checked &&
			setLevelChoose(levelChoose.filter((item) => item.level !== values));
	};

	useEffect(() => {
		handlechangelevel && handlechangelevel(levelChoose);
	}, [handlechangelevel, levelChoose]);

	return (
		<div className='leve-list-control'>
			<div onClick={() => setMode(!mode)}>
				{mode && (
					<div className='title-choose-level'>
						<p>The experience level </p>
						<p className='text'>+ show</p>
					</div>
				)}
				{!mode && (
					<div className='title-choose-level'>
						<p>The experience level</p>
						<p className='text'>- hide</p>
					</div>
				)}
			</div>

			{levelList.map((data, idx) => (
				<div
					className='item-level'
					style={!mode ? {} : { display: 'none' }}
					key={idx}
				>
					<input
						className='input-checkbox'
						id={idx}
						value={data.level}
						onChange={handleChange}
						type='checkbox'
					/>
					<p>{data.level}</p>
				</div>
			))}
		</div>
	);
}

export default LevelFilter;
