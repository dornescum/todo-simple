import React, {useContext, useState} from 'react';
import {ValueContext} from "../context/config";
import SunIcon from "./UI/SunIcon";
import MoonIcon from "./UI/MoonIcon";


const Form = () => {
	const {handleSubmit, setTodo, todo, darkTheme, changeTheme} = useContext(ValueContext);
	console.log(changeTheme);

	return (
		<div className="form">
			<div className={darkTheme ? ' form-header bg-dark' : ' form-header bg-light'}>
				<h1>TODO</h1>
				{darkTheme && <button onClick={changeTheme} className='sun-icon'>
					<SunIcon/>
				</button>}
				{!darkTheme && <button onClick={changeTheme} className='moon-icon'>
					<MoonIcon />
				</button>}

				{/*<button onClick={changeTheme} className={darkTheme ? 'themes-dark': 'themes-light'}>change color</button>*/}

			</div>

			<form action="" onSubmit={handleSubmit} className={darkTheme ? ' form-body-dark' : ' form-body-light'}>
				<input type="text" onChange={(e) => {
					setTodo(e.target.value);
				}} value={todo}/>
				<button type="submit" className={darkTheme ? 'themes-dark' : 'themes-light'}>Add</button>

			</form>
			{/*<p className='nothing'></p>*/}
			{/*<button onClick={changeTheme} className={darkTheme ? 'themes-dark': 'themes-light'}>change color</button>*/}
		</div>

	);
};

export default Form;
