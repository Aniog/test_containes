import TodoItem from './TodoItem';
import { ClipboardList } from 'lucide-react';

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-slate-500">
        <ClipboardList className="w-12 h-12 mb-3 opacity-40" />
        <p className="text-base font-medium">No tasks here</p>
        <p className="text-sm mt-1 opacity-70">Add a task above to get started</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
