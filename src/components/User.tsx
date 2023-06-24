import React from "react"
import config from "../config/config";

interface IState {
	ID: number,
	Name: String,
}

interface IProps {
	fiUserID: number,
	fsUserName: String,
}

export default class User extends React.Component<IProps, IState> {

	componentDidMount() {
		document.title = `${config.appName} - User Page`
	}

	// eslint-disable-next-line
	constructor(props: IProps) {
		super(props);
		this.state = {
			ID: 27,
			Name: "Goyani Prajay",
		}
	}

	render() {
		const { fiUserID, fsUserName } = this.props
		const { ID, Name } = this.state
		return (
			<div className="container">
				<div className="col-md-6 py-3 d-md-flex flex-column justify-content-between">
					<h1 className="bg-success p-1 text-white text-center">User Component</h1>
					<div className="border px-4 bg-light mb-4">
						<h4>User ID: {fiUserID}</h4>
						<h4>User Name: {fsUserName}</h4>
					</div>
					<div className="bg-light px-4 border">
						<h1>Class Component State</h1>
						<h4>ID: {ID}</h4>
						<h4>Name: {Name}</h4>
					</div>
				</div>
			</div>
		)
	}
}