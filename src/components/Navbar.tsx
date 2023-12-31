import React, { useState } from "react"
import { Link } from "react-router-dom"

interface IState {
	fsName: String,
	fsTitle: String,
}

let Navbar: React.FunctionComponent = () => {
	const [state, setState] = useState<IState>({ fsName: "WRP Prajay", fsTitle: "PHP Developer" })
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container">
					<Link className="navbar-brand" aria-current="page" to={'/'}>Navbar</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/about-us'}>About Us</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/login'}>Login</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/customer'}>Customer</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/user'}>User</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/counter'}>Counter</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/youtube'}>Youtube</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/auth-user'}>Auth User</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/user-list'}>User List</Link>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar