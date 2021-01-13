import React, { useState } from 'react';
import './SetupInput.css';

const SetupInput = (props) => {
	const [breachCodesArr, setBreachCodesArr] = useState([
		'1C',
		'55',
		'BD',
		'E9',
		'F7',
	]);

	const renderBreachCodesArr = () => {
		return breachCodesArr.map((currentValue, ind, arr) => (
			<div>
				<button
					className='breach-codes-input-btn'
					onClick={() => {
						props.setFillCharacters(currentValue);
					}}
				>
					{currentValue}
				</button>
			</div>
		));
	};
	return (
		<div>
			<h2>Enter breach codes: </h2>
			<div className='breach-codes-input-container'>
				{renderBreachCodesArr()}
			</div>
		</div>
	);
};

export default SetupInput;
