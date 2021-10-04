import { useState } from 'react';

const users = [
	{ name: 'Sarah', age: 20 },
	{ name: 'Bob', age: 21 },
	{ name: 'John', age: 22 },
];

const UserSearch: React.FC = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});

		setUser(foundUser);
	};
	return (
		<div>
			<h1>User Search</h1>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Find User</button>
			<div>
				{user && user.name}
				{user && user.age}
			</div>
		</div>
	);
};

export default UserSearch;
