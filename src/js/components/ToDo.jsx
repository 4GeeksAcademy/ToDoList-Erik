import React from "react";
import {useState} from "react";
import "../../styles/ToDo.css";


//create your first component
const ToDo = () => {
	const [inputValue, setInputValue] = useState("");
	return (
		<div className="to-do">
			<div className="wrapper">
				<h1>todos</h1>
				<div className="input-container">
					<input type="text" />
					<button className="add-btn">Add</button>
				</div>
				<ul>
					<li>Superar desafios<button className="delete-btn">Delete</button></li>
					<p className="empty">What needs to be done?</p>
				</ul>
			</div>
			
		</div>
	)
};

export default ToDo;