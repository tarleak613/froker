import React from 'react';
import './Header.css'; // Ensure this file contains the necessary custom CSS

function Header() {
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white p-6 pt-1 pb-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-gilroy font-semibold text-[#f76f32]">
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/black-logo-frokerr-copy-10_pwpomg.jpg"
              alt="Company Logo"
              className="w-28 h-auto"
            />
          </div>
          <div className="flex space-x-8">
            <a href="/" className="nav-link text-xl font-semibold text-[#f76f32]">Home</a>
            <a href="/blog" className="nav-link text-lg font-semibold text-[#f76f32]">Blogs</a>
            <a href="/froker" className="nav-link text-lg font-semibold text-[#f76f32]">Discover Froker</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
