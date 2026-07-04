import { Toaster as Sonner, toast as sonnerToast } from "sonner";

export const Toaster = (props) => <Sonner {...props} />;
export const toast = sonnerToast;
