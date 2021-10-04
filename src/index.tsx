import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch';
import EventComponent from './events/EventComponent';

const App = () => {
	return (
		<div>
			<GuestList />
			<UserSearch />
			<hr />
			<EventComponent />
		</div>
	);
};
ReactDOM.render(<App />, document.querySelector('#root'));
