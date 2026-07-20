// Minimal re-export of sonner Toaster so we can customize toast styles.
// shadcn-style wrapper around the sonner package.
import { Toaster as SonnerToaster } from "sonner";

export function Toaster(props) {
  return <SonnerToaster {...props} />;
}
