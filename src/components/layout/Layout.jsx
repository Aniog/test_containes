import Header from "./Header";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <Header />
      <main className="flex-1 w-full bg-background mt-[72px] md:mt-[88px] home-reset">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;