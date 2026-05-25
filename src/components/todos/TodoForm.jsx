import { Plus } from 'lucide-react'

const TodoForm = ({ value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center"
    >
      <label className="sr-only" htmlFor="todo-input">
        Add a new task
      </label>
      <input
        id="todo-input"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="What needs to get done today?"
        className="min-h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 placeholder:text-slate-400"
      />
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100"
      >
        <Plus className="h-4 w-4" />
        Add task
      </button>
    </form>
  )
}

export default TodoForm
