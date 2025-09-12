

import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <span className={`${todo.completed ? "line-through text-gray-500" : ""}`}>
          {todo.text}
        </span>
      </div>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:bg-red-50 hover:text-red-600"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TodoItem;

