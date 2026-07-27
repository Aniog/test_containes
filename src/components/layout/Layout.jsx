import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/sonner";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main className="flex-1 w-full bg-white">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}