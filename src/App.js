import React, {useState} from "react";
import './App.css';


function App() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState('');


	const handleSubmit = (e) => {
		e.preventDefault();
		const newTodo = {
			id: new Date().getTime(),
			text: todo,
			completed: false
		};
		setTodos([...todos].concat(newTodo));
		setTodo('');
	};

	const deleteTodo = (id) => {
		const updatedTodos = [...todos].filter((todo) => {
			return todo.id !== id;
		});
		setTodos(updatedTodos);
	};

	const toggleComplete = (id) => {
		const updatedTodos = [...todos].map((todo) => {
			// modific doar todo care il activez
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div className="App">
			<form action="" onSubmit={handleSubmit}>
				<input type="text" onChange={(e) => {
					setTodo(e.target.value);
				}} value={todo}/>
				<button type="submit">Add todo</button>
			</form>

			{todos.map((todo) => {
				return <div key={todo.id}>
					<div>
						{todo.text}
					</div>
					<button onClick={() => deleteTodo(todo.id)}>delete</button>
					<input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed}/>
					<button> edit todo</button>
				</div>;
			})}
		</div>
	);
}

export default App;
