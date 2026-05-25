import React from 'react';
import { Check, Trash2, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const data = todo.data || {};

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-card shadow-sm group hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(todo)}
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
            data.completed 
              ? "bg-primary border-primary text-primary-foreground" 
              : "border-muted-foreground hover:border-primary"
          )}
        >
          {data.completed && <Check className="w-4 h-4" />}
        </button>
        <span className={cn(
          "text-lg transition-all",
          data.completed && "line-through text-muted-foreground"
        )}>
          {data.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TodoItem;
