import { ToDoItem } from "./todo-item";

export const ToDoList = ({ todos,onComplete,onDelete }) => {
    return (
        <div className="space-y-3 w-full max-w-md">
            {todos.map((item) => (
                <ToDoItem key={item.id} item={item} onComplete={onComplete} onDelete={onDelete}/>
            ))}
        </div>
    );
};
