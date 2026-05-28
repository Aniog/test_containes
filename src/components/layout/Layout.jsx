import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#ffffff' }}>
      <Navbar />
      <main style={{ paddingTop: '88px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
