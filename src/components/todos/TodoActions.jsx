import { Eraser } from 'lucide-react'

const TodoActions = ({ hasCompleted, onClearCompleted }) => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Task list</h2>
        <p className="text-sm text-slate-500">
          Mark tasks as done as you finish them, then clear completed items in one click.
        </p>
      </div>
      <button
        type="button"
        onClick={onClearCompleted}
        disabled={!hasCompleted}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
      >
        <Eraser className="h-4 w-4" />
        Clear completed
      </button>
    </div>
  )
}

export default TodoActions
