import { useState, useCallback, useEffect } from "react";
import { DataClient } from "@strikingly/sdk";
import { Plus, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TodoItem } from "./TodoItem";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Request failed";
};

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const fetchTodos = useCallback(async () => {
    setStatus("loading");
    setError(null);
    try {
      const { data: response, error } = await client
        .from("TodoItems")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(100);

      if (error) throw error;
      setTodos(getRows(response));
      setStatus("ready");
    } catch (err) {
      setError(err.message || "Failed to load todo items");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setStatus("submitting");
    setError(null);

    const { data: response, error: createError } = await client
      .from("TodoItems")
      .insert({
        data: {
          title: inputValue.trim(),
          completed: false,
        },
      })
      .select()
      .single();

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError));
      setStatus("error");
      return;
    }

    const newTodo = getEntity(response);
    setTodos((prev) => [newTodo, ...prev]);
    setInputValue("");
    setStatus("ready");
  };

  const handleToggleTodo = async (todo) => {
    const { data: response, error: updateError } = await client
      .from("TodoItems")
      .update({
        data: {
          ...todo.data,
          completed: !todo.data.completed,
        },
      })
      .eq("id", todo.id)
      .select()
      .single();

    if (updateError || response?.success === false) {
      setError(getErrorMessage(response, updateError));
      return;
    }

    const updatedTodo = getEntity(response);
    setTodos((prev) =>
      prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
    );
  };

  const handleDeleteTodo = async (id) => {
    const { data: response, error: deleteError } = await client
      .from("TodoItems")
      .delete()
      .eq("id", id)
      .select()
      .maybeSingle();

    if (deleteError || response?.success === false) {
      setError(getErrorMessage(response, deleteError));
      return;
    }

    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter((t) => t.data.completed);
    
    // Optimistically update UI
    setTodos((prev) => prev.filter((t) => !t.data.completed));

    // Delete completed todos one by one (since bulk delete is not supported by standard client methods for multiple dynamic rows in a simple loop without IN clause or similar, and doing it sequentially is easiest here for simplicity)
    for (const todo of completedTodos) {
      await client.from("TodoItems").delete().eq("id", todo.id);
    }
    
    // Refresh to ensure sync
    await fetchTodos();
  };

  const activeTodosCount = todos.filter(t => !t.data.completed).length;

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-card rounded-xl shadow-lg border">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2 tracking-tight">Todo List</h1>
        <p className="text-muted-foreground">{activeTodosCount} tasks pending</p>
      </div>

      <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 text-lg py-6"
          disabled={status === "submitting"}
        />
        <Button 
          type="submit" 
          size="lg" 
          className="py-6 px-6"
          disabled={!inputValue.trim() || status === "submitting"}
        >
          {status === "submitting" ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Plus className="w-5 h-5 mr-2" />
              Add
            </>
          )}
        </Button>
      </form>

      {error && (
        <div className="mb-4 p-4 text-destructive bg-destructive/10 rounded-lg text-sm">
          {error}
        </div>
      )}

      {status === "loading" && todos.length === 0 ? (
        <div className="flex justify-center p-8">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <>
          <div className="space-y-1 mb-6 max-h-[50vh] overflow-y-auto pr-2">
            {todos.length === 0 ? (
              <div className="text-center p-8 text-muted-foreground bg-muted/20 rounded-lg border border-dashed">
                <p className="text-lg">No tasks yet.</p>
                <p className="text-sm mt-1">Add one above to get started!</p>
              </div>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
                />
              ))
            )}
          </div>

          {todos.some((t) => t.data.completed) && (
            <div className="flex justify-end pt-4 border-t">
              <Button
                variant="destructive"
                onClick={handleClearCompleted}
                className="group"
              >
                <Trash2 className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100" />
                Clear Completed
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
