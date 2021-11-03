import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import JobFeature from './features/Jobs';
import DetailPage from './features/Jobs/pages/DetailPage/DetailPage';
import './index.css';
function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/search' component={JobFeature} />
				<Route path='/job/:jobId' component={DetailPage} />
				<Redirect from='/' to='/search' exact />
			</Switch>
		</div>
	);
}

export default App;
