import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
EOF > /workspace/my-app/src/Layout.jsx
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
