import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./loginScreen.css";

export const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		const lastPath = localStorage.getItem("lastPath") || "/";

		dispatch({
			type: types.login,
			payload: {
				name: "Nicolas"
			}
		});
		history.replace(lastPath);
	};

	return (
		<div className='login-screen__container'>
			<div className='container login-btn'>
				<h1>Heroes App</h1>
				<button
					onClick={handleLogin}
					className='login-btn__button btn btn-outline-danger'
				>
					Start
				</button>
			</div>
		</div>
	);
};
