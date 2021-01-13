import { useState } from 'react';
import './App.css';
import SetupInput from './components/SetupInput/SetupInput';
import ProtocolGrid from './components/ProtocolGrid/ProtocolGrid';
// import SolutionOutput from './components/SolutionOutput/SolutionOutput';

function App() {
	const [fillCharacters, setFillCharacters] = useState('');
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Cyberpunk Breach Protocol solver</h1>
				<p>
					This will help you download all 3 during the breach protocol in
					Cyberpunk. The solution will give you the order in which to chose the
					codes and the minimum buffer size.
				</p>
			</header>
			<section>
				<SetupInput
					fillCharacters={fillCharacters}
					setFillCharacters={setFillCharacters}
				/>
				<ProtocolGrid
					fillCharacters={fillCharacters}
					setFillCharacters={setFillCharacters}
				/>
				{/* <SolutionOutput /> */}
			</section>
		</div>
	);
}

export default App;
