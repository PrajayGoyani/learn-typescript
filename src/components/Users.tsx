import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { IUsers } from "../modals/IUsers"
import { UsersService } from "../services/UsersService";
import Loader from "./Loader";
import config from "../config/config";

interface IState {
	isLoading: boolean,
	faUser: IUsers[],
	fsErrMsg: string
}

const Users: React.FunctionComponent = () => {

	useEffect(() => {
		document.title = `${config.appName} - User Page`;
	}, []);

	const [state, setState] = useState<IState>({
		isLoading: false,
		faUser: [] as IUsers[],
		fsErrMsg: ''
	});

	// network request
	useEffect(() => {
		setState({ ...state, isLoading: true });
		setTimeout(() =>
			UsersService.getAllUsers()
				.then(res => setState({
					...state,
					isLoading: false,
					faUser: res.data,
				}))
				.catch(err => setState({
					...state,
					isLoading: false,
					fsErrMsg: err.message,
				}))
			, 500)
		// eslint-disable-next-line
	}, [])

	const { isLoading, faUser, fsErrMsg } = state

	return (
		<>
			<div className="container">
				<h1 className="display-5 my-3">Data From APIs</h1>
				{fsErrMsg && <p className="text-danger">{fsErrMsg}</p>}
				{isLoading ? (<Loader />) :
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">ID</th>
								<th scope="col">Name</th>
								<th scope="col">Username</th>
								<th scope="col">Email</th>
							</tr>
						</thead>
						<tbody>
							{faUser.length > 0 && faUser.map(({ id, name, username, email }) => (
								<tr key={id}>
									<th scope="row">
										<Link className="text-decoration-none" to={`users/${id}`}>{id}</Link>
									</th>
									<td>{name}</td>
									<td>{username}</td>
									<td>{email}</td>
								</tr>
							))}
						</tbody>
					</table>}
			</div>
		</>
	)
}

export default Users