// filepath: trins-dark-room/src/components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full shadow-md">
      <ul className="flex justify-center space-x-8 py-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/appointments" className="hover:text-gray-300">
            Appointments
          </Link>
        </li>
        <li>
          <Link href="/prints" className="hover:text-gray-300">
            Prints
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;