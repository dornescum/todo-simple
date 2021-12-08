import React, {useContext, useState} from 'react';
import {ValueContext} from "../../context/config";


const TheFooter = (props) => {
	const {todos} = useContext(ValueContext);
	const activeTodos = todos.filter((task) => {
		return task.completed === false;
	});
	const completedTodos = todos.filter((task) => {
		return task.completed === true;
	});
	const todosLength = todos.length;

	const [itemsLeft, setItemsLeft] = useState(false);
	const [allTodos, setAllTodos] = useState(false);
	const [activeLeft, setActiveLeft] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);
	const [clearCompleted, setClearCompleted] = useState(false);



	return (
		<div style={{display: 'flex'}}>
			<div className="footer">
				<button >
					<span style={{padding: ".5rem .2rem"}}>{activeTodos.length}</span> todos left
				</button>

			</div>
			<div className="footer">
				<button >
					all
				</button>
			</div>
			<div className="footer">
				<button >
					active
				</button>
			</div>
			<div className="footer">
				<button >
					completed
				</button>
			</div>
			<div className="footer">
				<button >
					clear
				</button>
			</div>

			{itemsLeft && <div>{activeTodos.length}</div>}
			{allTodos && <div>{activeTodos.length}</div>}
			{activeLeft && <div>{activeTodos.length}</div>}
			{isCompleted && <div>{activeTodos.length}</div>}
			{clearCompleted && <div>{activeTodos.length}</div>}


		</div>
	);
};

export default TheFooter;

