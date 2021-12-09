import React, {useContext, useState} from 'react';
import {ValueContext} from "../context/config";



const Form = () => {
	const {handleSubmit, setTodo, todo, darkTheme, changeTheme} = useContext(ValueContext);
	console.log(changeTheme);

	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<input type="text" onChange={(e) => {
					setTodo(e.target.value);
				}} value={todo}/>
				<button type="submit" className={darkTheme ? 'themes-dark': 'themes-light'}>Add todo</button>

			</form>
			<button onClick={changeTheme} className={darkTheme ? 'themes-dark': 'themes-light'}>change color</button>
		</div>

	);
};

export default Form;
