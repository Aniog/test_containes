import TodoItem from './TodoItem'

const EMPTY_MESSAGES = {
  all: 'No todos yet. Add one above!',
  active: 'No active tasks. Great job!',
  completed: 'No completed tasks yet.',
}

const TodoList = ({ todos, onToggle, onDelete, filter }) => {
  if (todos.length === 0) {
    return (
      <p className="text-center text-slate-400 text-sm py-6">
        {EMPTY_MESSAGES[filter] || EMPTY_MESSAGES.all}
      </p>
    )
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
  )
}

export default TodoList
