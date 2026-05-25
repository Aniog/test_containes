import { Trash2, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TodoItem({ todo, onToggle, onDelete }) {
  const isCompleted = todo.data.completed;

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg mb-2 bg-white shadow-sm transition-all hover:shadow-md group">
      <div className="flex items-center gap-3 flex-1 overflow-hidden">
        <button
          onClick={() => onToggle(todo)}
          className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
        >
          {isCompleted ? (
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>
        <span
          className={`text-lg truncate transition-all duration-200 ${
            isCompleted
              ? "text-muted-foreground line-through opacity-70"
              : "text-foreground"
          }`}
        >
          {todo.data.title}
        </span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="w-5 h-5" />
      </Button>
    </div>
  );
}
