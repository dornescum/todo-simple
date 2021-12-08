import React, {useState, useEffect} from "react";
import './App.css';


function App() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState('');
	const [todoEditing, setTodoEditing] = useState(null) ;
	const [editingText, setEditingText] = useState('');



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

	const editTodo=(id)=>{
		 const updatedTodos = [...todos].map((todo)=>{
			 if (todo.id === id){
				 todo.text = editingText
			 }
			 return todo // il editez doar pe cel care are id ul corect
		 })
		setTodos(updatedTodos);
		setTodoEditing(null)
		setEditingText('')
	}

	useEffect(()=>{
		const temp = localStorage.getItem('todos');
		const loadedTodos = JSON.parse(temp);
		if (loadedTodos){
			setTodos(loadedTodos)
		}
	}, [])

	useEffect(()=>{
		const temp = JSON.stringify(todos);
		localStorage.setItem('todos', temp)
	}, [todos])


	return (
		<div className="App">
			<Form />
			{/*<form action="" onSubmit={handleSubmit}>*/}
			{/*	<input type="text" onChange={(e) => {*/}
			{/*		setTodo(e.target.value);*/}
			{/*	}} value={todo}/>*/}
			{/*	<button type="submit">Add todo</button>*/}
			{/*</form>*/}

			{todos.map((todo) => {
				return <div key={todo.id}>
					{todoEditing === todo.id ? (
						<input type="text" onChange={(e)=>setEditingText(e.target.value)} value={editingText }/>
					): (
						<div>
							{todo.text}
						</div>
					)}

					<button onClick={() => deleteTodo(todo.id)}>delete</button>

					<input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed}/>

					{todoEditing === todo.id ? (
						<button onClick={()=>{editTodo(todo.id)}}> submit edit </button>
					):(
						<button onClick={()=>{setTodoEditing(todo.id)}}> edit todo</button>
					)}


				</div>;
			})}
		</div>
	);
}

export default App;

// const Form =({handleSubmit, todo, setTodo})=>{
// 	return <form action="" onSubmit={handleSubmit}>
// 		<input type="text" onChange={(e) => {
// 			setTodo(e.target.value);
// 		}} value={todo}/>
// 		<button type="submit">Add todo</button>
// 	</form>
// }
