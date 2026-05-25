import { useMemo, useState } from 'react'
import TodoActions from '@/components/todos/TodoActions'
import TodoForm from '@/components/todos/TodoForm'
import TodoHeader from '@/components/todos/TodoHeader'
import TodoList from '@/components/todos/TodoList'

const initialTodos = [
  { id: 1, text: 'Draft the week\'s top priorities', completed: false },
  { id: 2, text: 'Review project notes before lunch', completed: true },
  { id: 3, text: 'Send the final design feedback', completed: false },
]

const Home = () => {
  const [todos, setTodos] = useState(initialTodos)
  const [draft, setDraft] = useState('')

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos],
  )
  const activeCount = todos.length - completedCount

  const handleSubmit = (event) => {
    event.preventDefault()

    const text = draft.trim()
    if (!text) {
      return
    }

    setTodos((currentTodos) => [
      {
        id: Date.now(),
        text,
        completed: false,
      },
      ...currentTodos,
    ])
    setDraft('')
  }

  const handleToggle = (todoId) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const handleDelete = (todoId) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== todoId))
  }

  const handleClearCompleted = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed))
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <section className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <TodoHeader
              activeCount={activeCount}
              completedCount={completedCount}
              totalCount={todos.length}
            />

            <div className="space-y-4 rounded-3xl bg-slate-50 p-4 md:p-6">
              <TodoForm value={draft} onChange={setDraft} onSubmit={handleSubmit} />
              <TodoActions
                hasCompleted={completedCount > 0}
                onClearCompleted={handleClearCompleted}
              />
              <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
