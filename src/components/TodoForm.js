import React, { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';

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
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow"
        required
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TodoForm;