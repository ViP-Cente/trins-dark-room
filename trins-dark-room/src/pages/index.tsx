// filepath: trins-dark-room/src/pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to Trin's Dark Room</h1>
        <p>Explore and purchase beautiful photography prints.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;