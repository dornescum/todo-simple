import React, {useContext, useState} from 'react';
import {ValueContext} from "../../context/config";


const TheFooter = () => {
	const {
		todos, todoEditing, editingText, setEditingText, deleteTodo, toggleComplete, editTodo,
		setTodoEditing,
	} = useContext(ValueContext);

	const activeTodos = todos.filter((task) => {
		return task.completed === false;
	});
	const completedTodos = todos.filter((task) => {
		return task.completed === true;
	});

	const [itemsLeft, setItemsLeft] = useState(true);
	const [allTodos, setAllTodos] = useState(false);
	const [activeLeft, setActiveLeft] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);
	const [clearCompleted, setClearCompleted] = useState(false);

	const showAllItemsLeft = () => {
		setItemsLeft(true);
		setAllTodos(false);
		setIsCompleted(false);
		setActiveLeft(false);
		setClearCompleted(false);
	};
	const showAllTodos = () => {
		setAllTodos(true);
		setItemsLeft(false);
		setIsCompleted(false);
		setActiveLeft(false);
		setClearCompleted(false);

	};
	const showAllActive = () => {
		setActiveLeft(true);
		setAllTodos(false);
		setItemsLeft(false);
		setIsCompleted(false);
		setClearCompleted(false);

	};
	const showAllCompleted = () => {
		setIsCompleted(true);
		setActiveLeft(false);
		setAllTodos(false);
		setItemsLeft(false);
		setClearCompleted(false);

	};
	const removeCompleted = () => {
		setClearCompleted(true);
		setIsCompleted(false);
		setActiveLeft(false);
		setAllTodos(false);
		setItemsLeft(false);
	};

	return (
		<footer>


			{itemsLeft && <div className="display">{todos.length}</div>}
			{allTodos && <div className="results">{todos.map((todo) => {
				return <div key={todo.id} className="show-results">
					<input type="radio" onChange={() => toggleComplete(todo.id)}
						   checked={editTodo ? !todo.completed : todo.completed}/>

					{todoEditing === todo.id ? (
						<input type="text" onChange={(e) => setEditingText(e.target.value)}
							   value={editingText}/>
					) : (
						<div  className={todo.completed ? 'line-through' : 'no-decoration'}>
							{todo.text}
						</div>
					)}
					<div className='results-end'>
						{todoEditing === todo.id ? (
							<button onClick={() => {
								editTodo(todo.id);
							}}> submit edit </button>
						) : (
							<button onClick={() => {
								setTodoEditing(todo.id);
							}}> edit todo</button>
						)}
						<button onClick={() => deleteTodo(todo.id)}>delete</button>
					</div>

				</div>;
			})}
			</div>}
			{activeLeft && <div>{activeTodos.map((items) => {
				return <ul key={items.id}>
					<li>{items.text}</li>
				</ul>;
			})}</div>}
			{isCompleted && <div>{completedTodos.map((items) => {
				return <ul key={items.id}>
					<li>{items.text}</li>
				</ul>;
			})}</div>}
			{clearCompleted && <div>{todos.map((todo) => {
				return <div key={todo.id}>
					{todoEditing === todo.id ? (
						<input type="text" onChange={(e) => setEditingText(e.target.value)}
							   value={editingText}/>
					) : (
						<div>
							{todo.text}
						</div>
					)}
					<button onClick={() => deleteTodo(todo.id)}>delete</button>
					<input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed}/>
					{todoEditing === todo.id ? (
						<button onClick={() => {
							editTodo(todo.id);
						}}> submit edit </button>
					) : (
						<button onClick={() => {
							setTodoEditing(todo.id);
						}}> edit todo</button>
					)}
				</div>;
			})}
			</div>}
			<div className="footer-bottom">
				<div className="footer-btn">
					<button onClick={showAllItemsLeft}>
						<span style={{padding: ".5rem .2rem"}}>{activeTodos.length}</span> todos left
					</button>

				</div>
				<div className="footer-btn">
					<button onClick={showAllTodos}>
						all
					</button>
				</div>
				<div className="footer-btn">
					<button onClick={showAllActive}>
						active
					</button>
				</div>
				<div className="footer-btn">
					<button onClick={showAllCompleted}>
						completed
					</button>
				</div>
				<div className="footer-btn">
					<button onClick={removeCompleted}>
						clear
					</button>
				</div>
			</div>

		</footer>
	);

};

export default TheFooter;

// const activeTodos = todos.filter((task) => {
// 	return task.completed === false;
// });
// const completedTodos = todos.filter((task) => {
// 	return task.completed === true;
// });
// const todosLength = todos.length;
//
// const [itemsLeft, setItemsLeft] = useState(true);
// const [allTodos, setAllTodos] = useState(false);
// const [activeLeft, setActiveLeft] = useState(false);
// const [isCompleted, setIsCompleted] = useState(false);
// const [clearCompleted, setClearCompleted] = useState(false);
//
// const showAllItemsLeft =()=>{
// 	setItemsLeft(!itemsLeft);
// }
//
//
// return (
// 	<div style={{display: 'flex'}}>
// 		<div className="footer">
// 			<button onClick={showAllItemsLeft}>
// 				<span style={{padding: ".5rem .2rem"}}>{activeTodos.length}</span> todos left
// 			</button>
//
// 		</div>
// 		<div className="footer">
// 			<button >
// 				all
// 			</button>
// 		</div>
// 		<div className="footer">
// 			<button >
// 				active
// 			</button>
// 		</div>
// 		<div className="footer">
// 			<button >
// 				completed
// 			</button>
// 		</div>
// 		<div className="footer">
// 			<button >
// 				clear
// 			</button>
// 		</div>
//
// 		{itemsLeft && <div className='display'>{todos.length}</div>}
// 		{allTodos && <div>{todos}</div>}
// 		{activeLeft && <div >{activeTodos}</div>}
// 		{isCompleted && <div >{completedTodos}</div>}
// 		{clearCompleted && <div >{activeTodos.length}</div>}
//
//
// 	</div>
// );
