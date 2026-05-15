import TodoItem from './TodoItem';
import { ClipboardList } from 'lucide-react';

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <ClipboardList className="w-12 h-12 text-gray-600 mb-3" />
        <p className="text-gray-500 text-sm">No tasks here. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
