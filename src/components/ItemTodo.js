import React, {useContext} from 'react';
import {ValueContext} from "../context/config";


const ItemTodo = ({activeTodos}) => {
const {darkTheme}= useContext(ValueContext);
	return (
		<ul className={darkTheme ? ' active-results-dark': " active-results-light"}>{activeTodos.map((items) => {
			return <li className='show-active'  key={items.id}>{items.text}</li>

		})}</ul>
	);
};

export default ItemTodo;
