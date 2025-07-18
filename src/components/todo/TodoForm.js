import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow"
          aria-label="New todo text"
        />
        <Button type="submit" disabled={!text.trim()}>
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;