import React, { useEffect, useState } from "react"
import config from "../config/config"

interface IState {
	fsName: String,
	fsTitle: String,
}

interface IProps {
	fsName: String,
	fsTitle: String,
	fiAge?: number,
}

let Customer: React.FunctionComponent<IProps> = ({ fsName, fsTitle, fiAge }) => {

	useEffect(() => {
		document.title = `${config.appName} - Customer Page`;
	}, []);

	const [state, setState] = useState<IState>({ fsName: "WRP Prajay", fsTitle: "PHP Developer" })

	return (
		<div className="container">
			<div className="col-md-6 py-3">
				<h1 className="bg-success p-1 text-white text-center">Customer Component</h1>
				<div className="border px-4 bg-light mb-4 py-2">
					<h4>Name  : {fsName}</h4>
					<h4>Title : {fsTitle}</h4>
					<h4>Age   : {fiAge}</h4>
				</div>
				<div className="bg-light px-4 border py-2">
					<h1>Function Component State</h1>
					<h4>Name: {state.fsName}</h4>
					<h4>Title: {state.fsTitle}</h4>
				</div>
			</div>
		</div>

	);
}

export default Customer