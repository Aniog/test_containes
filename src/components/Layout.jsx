import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  console.log('LAYOUT RENDERING');
  return (
    <div className="min-h-screen flex flex-col bg-cream" style={{color: 'black'}}>
      <Navbar />
      <main className="flex-1" style={{color: 'black'}}>{children}</main>
      <Footer />
    </div>
  );
}
