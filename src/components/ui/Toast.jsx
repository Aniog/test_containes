import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, Info } from "lucide-react";

let id = 0;
const listeners = new Set();
let queue = [];

function emit() {
  listeners.forEach((l) => l(queue));
}

export function toast(message, type = "success", opts = {}) {
  const item = {
    id: ++id,
    type,
    message,
    duration: opts.duration ?? 3200,
  };
  queue = [...queue, item];
  emit();
  window.setTimeout(() => {
    queue = queue.filter((t) => t.id !== item.id);
    emit();
  }, item.duration);
}

export default function Toaster() {
  const [items, setItems] = useState(queue);
  useEffect(() => {
    const l = (next) => setItems([...next]);
    listeners.add(l);
    return () => listeners.delete(l);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 flex flex-col items-center gap-2 px-4">
      {items.map((t) => {
        const Icon =
          t.type === "error" ? XCircle : t.type === "info" ? Info : CheckCircle2;
        const tone =
          t.type === "error"
            ? "border-[#8E2F2A]/30 text-[#8E2F2A]"
            : "border-ink/10 text-ink";
        return (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-center gap-2.5 bg-cream-soft border ${tone} px-4 py-3 shadow-soft animate-fadeUp`}
            role="status"
          >
            <Icon className="h-4 w-4" strokeWidth={1.5} />
            <p className="text-sm">{t.message}</p>
          </div>
        );
      })}
    </div>
  );
}
