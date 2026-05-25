import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const { id, data } = todo;
  const { title, completed } = data;

  return (
    <div className="flex items-center justify-between p-4 bg-card rounded-lg border shadow-sm mb-2 group animate-in fade-in slide-in-from-left-2 duration-300">
      <div className="flex items-center gap-3">
        <Checkbox
          id={`todo-${id}`}
          checked={completed}
          onCheckedChange={() => onToggle(todo)}
        />
        <label
          htmlFor={`todo-${id}`}
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer transition-all",
            completed ? "line-through text-muted-foreground" : "text-foreground"
          )}
        >
          {title}
        </label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TodoItem;
