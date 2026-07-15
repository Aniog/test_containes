// Thin wrapper around sonner that re-exports the components we need.
// Sonner is a vanilla headless toast library, so no shadcn-style install
// is required — the styling is applied via Toaster props in App.jsx.
import { Toaster as SonnerToaster, toast } from "sonner";

export const Toaster = SonnerToaster;
export { toast };
