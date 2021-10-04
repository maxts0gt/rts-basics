import { useState } from 'react';

const GuestList: React.FC = () => {
	const [names, setNames] = useState('');
	const [guests, setGuests] = useState<string[]>([]);

	const onClick = () => {
		setNames('');
		setGuests([...guests, names]);
	};

	const newGuests = guests.map((guest) => <li key={guest}>{guest}</li>);

	return (
		<div>
			<h3>Guess List</h3>
			<ol>{newGuests}</ol>
			<input value={names} onChange={(e) => setNames(e.target.value)} />
			<button onClick={onClick}>Add Guest</button>
		</div>
	);
};

export default GuestList;
