export const ToDoItem = ({ item,onComplete,onDelete }) => {
    return (
        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md shadow-md hover:bg-gray-700 transition">
            <p className={!item.complited?"text-sm":"text-sm line-through"}>{item.text}</p>
            <div className="flex space-x-3">
                
                {item.complited? <button onClick={()=>onComplete(item.id)} className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                    Cancel
                </button>:<button onClick={()=>onComplete(item.id)} className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                    Complete
                </button> }
                
                <button onClick={()=>onDelete(item.id)} className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                    Delete
                </button>
            </div>
        </div>
    );
};
