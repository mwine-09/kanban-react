import React from 'react';
import KanbanBoard from '../components/KanbanBoard';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <h2 className="text-2xl">Welcome to your Kanban Board</h2>
 <KanbanBoard />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;






 