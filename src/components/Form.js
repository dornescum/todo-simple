import React, {useContext} from 'react';
import {ValueContext} from "../context/config";

const Form = () => {
const {handleSubmit, setTodo, todo} = useContext(ValueContext);
	return (
		<form action="" onSubmit={handleSubmit}>
			<input type="text" onChange={(e) => {
			setTodo(e.target.value);
		}} value={todo}/>
		<button type="submit">Add todo</button>
	</form>
	);
};

export default Form;
