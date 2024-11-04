

import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-fuchsia-500">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Online Store!</h1>
      
    </div>
    <div>
       <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Our Online Store. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default HomePage;

