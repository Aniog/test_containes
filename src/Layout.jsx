import Navbar from './components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} ConnectUs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
