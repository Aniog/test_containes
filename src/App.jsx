import React from 'react';
import TodoList from './components/TodoList';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            STRK Todo
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A simple, powerful task manager
          </p>
        </header>

        <main>
          <TodoList />
        </main>

        <footer className="text-center text-sm text-slate-500 py-8">
          &copy; {new Date().getFullYear()} Todo App. Powered by @strikingly/sdk.
        </footer>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
