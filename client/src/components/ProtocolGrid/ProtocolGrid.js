import React, { useState, useEffect } from 'react';
import './ProtocolGrid.css';

const ProtocolGrid = (props) => {
	var grid = new Array(6);
	grid.fill(new Array(6));
	grid.forEach((arr) => {
		arr.fill('0a', 0, 6);
	});
	const [gridState, setGridState] = useState(grid);
	const renderGrid = () => {
		console.log('grid: ', grid);
		return grid.map((innerArr, outerInd) => {
			return innerArr.map((elm, ind, arr) => {
				var tempElm = elm;
				return (
					<div
						className='grid-element'
						onClick={() => {
							console.log('props: ', props);
							tempElm = props.fillCharacters;
						}}
					>
						{tempElm}
					</div>
				);
			});
		});
	};

	return (
		<div>
			<h2>Grid</h2>
			<div className='grid-container'>{renderGrid()}</div>
		</div>
	);
};

export default ProtocolGrid;
