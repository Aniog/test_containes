import TodoItem from './TodoItem';

const FILTERS = ['All', 'Active', 'Completed'];

const TodoList = ({ todos, filter, onFilterChange, onToggle, onDelete, onClearCompleted }) => {
  const filtered = todos.filter((t) => {
    if (filter === 'Active') return !t.completed;
    if (filter === 'Completed') return t.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1 bg-white/5 rounded-xl p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-indigo-500 text-white shadow'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="text-sm text-white/40 hover:text-red-400 transition-colors"
          >
            Clear completed ({completedCount})
          </button>
        )}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-white/30 text-sm">
          {filter === 'Completed'
            ? 'No completed tasks yet.'
            : filter === 'Active'
            ? 'No active tasks. Great job!'
            : 'No tasks yet. Add one above!'}
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {filtered.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}

      {/* Footer summary */}
      {todos.length > 0 && (
        <p className="mt-5 text-xs text-white/30 text-center">
          {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
        </p>
      )}
    </div>
  );
};

export default TodoList;
