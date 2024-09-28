// src/components/Layout.tsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode; // Required children prop
  showSidebar?: boolean;     // Optional prop to control sidebar visibility
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        {showSidebar && <Sidebar />} {/* Conditionally render the sidebar */}
        <main className={`flex-grow p-4 ${showSidebar ? 'ml-64' : ''}`}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;