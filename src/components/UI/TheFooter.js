import React, {useContext, useState} from 'react';
import {ValueContext} from "../../context/config";
import CrossIcon from "./CrossIcon";
import ItemTodo from "../ItemTodo";


const TheFooter = () => {
	const [allTodos, setAllTodos] = useState(true);
	const [activeLeft, setActiveLeft] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);

	const {todos, deleteTodo, toggleComplete, darkTheme} = useContext(ValueContext);

	const activeTodos = todos.filter((task) => {
		return task.completed === false;
	});
	const completedTodos = todos.filter((task) => {
		return task.completed === true;
	});

	const showAllTodos = () => {
		setAllTodos(true);
		setIsCompleted(false);
		setActiveLeft(false);
	};
	const showAllActive = () => {
		setActiveLeft(true);
		setAllTodos(false);
		setIsCompleted(false);
	};
	const showAllCompleted = () => {
		setIsCompleted(true);
		setActiveLeft(false);
		setAllTodos(false);
	};


	return (
		<footer className={darkTheme ? 'themes-dark': "footer-light"}>
			{allTodos && <div className="results">{todos.map((todo) => {
				return <div key={todo.id} className="show-results">
					<div className='results-start'>
						<input type="radio" onChange={() => toggleComplete(todo.id)}
							   checked={todo.completed }/>
						<div  className={todo.completed ? 'line-through' : 'no-decoration'}>
							<p>{todo.text}</p>
						</div>
					</div>
					<div className='results-end'>
						<button onClick={() => deleteTodo(todo.id)} className='close-btn'>
							<CrossIcon />
						</button>
					</div>

				</div>;
			})}
			</div>}
			{activeLeft && <ItemTodo activeTodos={activeTodos} />}
			{isCompleted && <ul className={darkTheme ? ' active-results-dark': " active-results-light"}>{completedTodos.map((items) => {
				return <li className='show-active' key={items.id}>{items.text}</li>;
			})}</ul>}

			<div className={darkTheme ? 'footer-dark footer-bottom': 'footer-light footer-bottom'}>
				<div className="footer-btn">
					<button onClick={showAllTodos}
							className={darkTheme ? 'footer-btn-dark': 'footer-btn-light'}>
						all
					</button>
				</div>
				<div className="footer-btn">
					<button onClick={showAllActive}
							className={darkTheme ? 'footer-btn-dark': 'footer-btn-light'}>
						active
					</button>
				</div>
				<div className="footer-btn">
					<button onClick={showAllCompleted} className={darkTheme ? 'footer-btn-dark': 'footer-btn-light'}>
						completed
					</button>
				</div>
			</div>

		</footer>
	);

};

export default TheFooter;
