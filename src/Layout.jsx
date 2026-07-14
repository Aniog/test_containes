import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>ContactKeeper &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
