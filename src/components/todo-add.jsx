import { useState } from "react";

export const ToDoAdd = ({onAddToDo}) => {
    const [text, setText] = useState("");
    const [err,setErr]=useState(null)

    const errFunc=()=>{
        if(!text.trim()){
            return setErr("input text!")
        }
        setErr(null)
        onAddToDo(text)
        setText("")
    }

    return (
        <div className="flex space-x-4 mb-6">
                {err && <p className="bg-red-400 p-2 my-2">{err}</p>}            
                <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="px-4 py-2 bg-gray-700 text-white rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a task"
            />
            <button
                onClick={() => errFunc()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Add
            </button>
        </div>
    );
};
