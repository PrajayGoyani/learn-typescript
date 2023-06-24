import React, { useEffect, useState } from "react"
import config from "../config/config"


interface IState {
	fiCount: number,
}

interface IProps { }


const Counter: React.FunctionComponent = () => {
	const [state, setState] = useState<IState>({ fiCount: 0 })

	useEffect(() => {
		document.title = `${config.appName} - Counter`
	}, [])

	// increment-add
	const handleIncrement = () => {
		setState({ fiCount: state.fiCount + 1 })
	}

	// decrement-minus
	const handleDecrement = () => {
		setState({ fiCount: state.fiCount - 1 })
	}


	const { fiCount } = state;
	return (
		<>
			<div className="container">
				<div className="col-md-6 py-3 text-center">
					<h1>Event Handling</h1>
					<div className="card">
						<div className="card-body">
							<h2 className="display-3">{fiCount}</h2>
							<button className="btn btn-success ms-3" onClick={handleIncrement}>INC</button>
							<button className="btn btn-danger ms-3" onClick={handleDecrement}>DECR</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Counter