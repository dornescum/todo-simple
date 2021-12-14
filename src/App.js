import React, {useState, useEffect} from "react";
import './styles/main/App.scss';
import {ValueContext} from "./context/config";
import Form from "./components/Form";
import TheFooter from "./components/UI/TheFooter";


function App() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState('');
	const [darkTheme, setDarkTheme] = useState(false);
	const changeTheme = () => {
		return 	setDarkTheme(!darkTheme)
	};

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


	useEffect(() => {
		const temp = localStorage.getItem('todos');
		const loadedTodos = JSON.parse(temp);
		if (loadedTodos) {
			setTodos(loadedTodos);
		}
	}, []);

	useEffect(() => {
		const temp = JSON.stringify(todos);
		localStorage.setItem('todos', temp);
	}, [todos]);


	return (
		<ValueContext.Provider value={{
			todos, setTodos, todo, setTodo, handleSubmit, deleteTodo, toggleComplete, darkTheme, changeTheme
		}}>
			<div className={darkTheme ? 'themes-dark App': 'themes-light App'}>
				<div className={darkTheme ? 'form-container-dark': 'form-container-light'}>
					<Form handleSubmit={handleSubmit}/>
					<TheFooter />
				</div>
			</div>
		</ValueContext.Provider>

	);
}

export default App;


// const [todoEditing, setTodoEditing] = useState(null);
// const [editingText, setEditingText] = useState('');

//
// const editTodo = (id) => {
// 	const updatedTodos = [...todos].map((todo) => {
// 		if (todo.id === id) {
// 			todo.text = editingText;
// 		}
// 		return todo; // il editez doar pe cel care are id ul corect
// 	});
// 	setTodos(updatedTodos);
// 	setTodoEditing(null);
// 	setEditingText('');
// };
