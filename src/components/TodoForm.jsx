


import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500 focus-visible:ring-blue-500"
      />
      <Button 
        type="submit" 
        disabled={!text.trim()}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Plus className="h-5 w-5 mr-1" />
        Add
      </Button>
    </form>
  );
};

export default TodoForm;


