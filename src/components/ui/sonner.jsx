// Minimal local re-export of the sonner Toaster + toast so we don't depend on
// shadcn-ui setup. Behavior matches sonner's Toaster default.
import { Toaster as SonnerToaster, toast } from "sonner";

export const Toaster = (props) => <SonnerToaster {...props} />;
export { toast };
