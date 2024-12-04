export const ToDoFilter = ({onSetFilter}) => {
    return (
        <div className="flex space-x-6 mb-6">
            <label className="flex items-center text-sm space-x-2 text-white">
                <input onChange={()=>onSetFilter('all')} type="radio" name="Edo" className="text-blue-600 focus:ring-2 focus:ring-blue-500" />
                All
            </label>

            <label className="flex items-center text-sm space-x-2 text-white">
                <input onChange={()=>onSetFilter('completed')} type="radio" name="Edo" className="text-blue-600 focus:ring-2 focus:ring-blue-500" />
                Completed
            </label>

            <label className="flex items-center text-sm space-x-2 text-white">
                <input onChange={()=>onSetFilter('notCompleted')} type="radio" name="Edo" className="text-blue-600 focus:ring-2 focus:ring-blue-500" />
                Not Completed
            </label>
        </div>
    );
};
