import React, { Dispatch, SetStateAction, useState } from 'react'
import TodoService from '../TodoService'
import TodoType from '../todo'
import '../css/TodoForm.css'

 
    interface PropTypes {
        setTodos: Dispatch<SetStateAction<TodoType[]
        >>
    }
    
    const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
        const [newTodoText, setNewTodoText] = useState<string>("");

        const handleAddTodo = () => {
            if (newTodoText.trim() !== "") {
                const newTodo = TodoService.addTodos(newTodoText);
                setTodos((prevTodos) => [...prevTodos, newTodo]);
                setNewTodoText("");
            }
        };

        return (
            <div className='inputForm'>  
            <input type="text" value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            autoFocus={true}
            placeholder='Add a Task'
            />
            <button onClick={handleAddTodo}>Add Todo </button>
            </div>
        )
    };
 
export default TodoForm