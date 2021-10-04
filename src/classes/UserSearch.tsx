/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/require-render-return */
import { Component } from 'react';

interface UserSearchProps {
	users: {
		name: string;
		age: number;
	}[];
}

interface UserSearchState {
	name: string;
	user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
	state: UserSearchState = {
		name: '',
		user: undefined,
	};

	onClick = () => {
		const foundUser = this.props.users.find((user) => user.name === this.state.name);

		this.setState({ user: foundUser });
	};

	render() {
		return (
			<div>
				<h1>User Search</h1>
				<input value={this.state.name} onChange={(e) => this.setState(e.target.value)} />
				<button onClick={this.onClick}>Find User</button>
				<div>
					{this.state.user && this.state.user.name}
					{this.state.user && this.state.user.age}
				</div>
			</div>
		);
	}
}

export default UserSearch;
