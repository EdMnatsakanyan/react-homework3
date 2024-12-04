import { ToDoAdd } from "./todo-add";
import { ToDoFilter } from "./todo-filter";
import { ToDoList } from "./todo-list";
import { useState } from "react";

export const ToDo = () => {
    
    const [todos, setTodos] = useState([
        { id: 101, text: "read a book", complited: false },
        { id: 102, text: "eat a burger", complited: true },
        { id: 103, text: "buy flowers", complited: false },
    ]);
    
    const [filter,setFilter]=useState('all')

    const filteredTodos=()=>{
        if(filter=='notCompleted'){
            return todos.filter(elm=>!elm.complited)
        }
        if(filter=='completed'){
            return todos.filter(elm=>elm.complited)
        }
        if(filter=='all'){
            return todos
        }
    }

    const addToDo=(text)=>{
        setTodos([...todos,{id:new Date(),text:text,complited:false}])
        
    }

    const complete=(id)=>{
        const found=todos.find(elm=>elm.id===id)
        found.complited=!found.complited
        setTodos([...todos])
    }

    const deleteToDo=(id)=>{
        setTodos([...todos.filter(elm=>elm.id!==id)])
    }
    
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
            <ToDoAdd onAddToDo={addToDo}/>
            <ToDoFilter onSetFilter={setFilter}/>
            <ToDoList todos={filteredTodos()} onComplete={complete} onDelete={deleteToDo}/>
        </div>
    );
};
