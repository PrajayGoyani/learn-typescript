import React, { useEffect, useState } from "react"
import { IUser } from "../modals/IUser";
import { UserService } from "../services/UserService";
import config from "../config/config";

interface IState {
	faUser: IUser[]
}

const UserList: React.FunctionComponent = () => {

	useEffect(() => {
		document.title = `${config.appName} - User List`
	})

	const [state, setState] = useState<IState>({
		faUser: UserService.getAllUsers()
	});

	const { faUser } = state;

	return (
		<>
			<div className="container">
				<div className="row w-50">
					<h1>Looping / Iteration</h1>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">sno</th>
								<th scope="col">Name</th>
								<th scope="col">Age</th>
							</tr>
						</thead>
						<tbody>
							{faUser.length > 0 && faUser.map(({ sno, fsName, fiAge }) => (
								<tr key={sno}>
									<th scope="row">{sno}</th>
									<td>{fsName}</td>
									<td>{fiAge}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default UserList