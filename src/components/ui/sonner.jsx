// Tiny re-export wrapper for the sonner Toaster so we can theme it
// once and import it from anywhere in the app.
import { Toaster as SonnerToaster } from "sonner";

export function Toaster(props) {
  return <SonnerToaster {...props} />;
}
