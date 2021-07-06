import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
	const { dispatch } = useContext(AuthContext);

	const history = useHistory();

	const handleLogout = () => {
		history.replace("/login");

		dispatch({
			type: types.logout
		});
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					Heroes App
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/marvel'
						>
							Marvel
						</NavLink>

						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/dc'
						>
							DC
						</NavLink>

						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/search'
						>
							Search
						</NavLink>

						<button className='btn nav-item nav-link' onClick={handleLogout}>
							Logout
						</button>
					</ul>
				</div>
			</div>
		</nav>
	);
};
