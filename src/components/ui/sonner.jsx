// Lightweight pass-through wrapper so we can theme the Toaster from one
// place using Tailwind classes. The shadcn `sonner` component normally
// imports `next-themes`; we don't need that here because we drive the
// theme via className overrides.
import { Toaster as Sonner } from "sonner";

export function Toaster(props) {
  return <Sonner {...props} />;
}

export { toast } from "sonner";
