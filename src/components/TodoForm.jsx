import { useState } from 'react'

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAddTodo(inputValue)
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="flex-1 relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 placeholder-gray-400"
          autoFocus
        />
      </div>
      <button
        type="submit"
        disabled={!inputValue.trim()}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
      >
        <span className="text-xl">+</span>
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm