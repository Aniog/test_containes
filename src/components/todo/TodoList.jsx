import TodoItem from './TodoItem';
import { ClipboardList } from 'lucide-react';

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-500">
        <ClipboardList className="w-10 h-10 mb-3 opacity-40" />
        <p className="text-sm">No tasks here. Add one above!</p>
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
