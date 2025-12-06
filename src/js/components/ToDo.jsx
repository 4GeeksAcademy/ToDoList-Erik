import React from "react";
import {useState} from "react";
import "../../styles/ToDo.css";


//create your first component
const ToDo = () => {
	const [inputValue, setInputValue] = useState("");
	const [toDos, setToDos] = useState([]);
	
	const handleOnChange = (e) => {
		setInputValue(e.target.value);
	}

	const handleOnClick = () => {
		if(inputValue === ""){
			alert("You must write something")
			return
		}
		setToDos([...toDos, inputValue]);
		setInputValue("");
	}

	const handleDelete = (index) => {
		const updateToDos = toDos.filter((toDos, i) => i !== index)
		setToDos(updateToDos);
	}

	return (
		<div className="to-do">
			<div className="wrapper">
				<h1>todos</h1>
				<div className="input-container">
					<input type="text" value={inputValue} onChange={handleOnChange}/>
					<button className="add-btn" onClick={handleOnClick}>Add</button>
				</div>
				
				<ul>
					{toDos.length > 0 ? toDos.map((toDo, index) => {
						return(
							<li className="list-item" key={index}>{toDo}<button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button></li>
						)
					})
				 : <p>No tasks yet</p>}
				</ul>
			</div>
			
		</div>
	)
};

export default ToDo;