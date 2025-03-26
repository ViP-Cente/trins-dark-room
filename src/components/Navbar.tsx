// filepath: trins-dark-room/src/components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/appointments">Appointments</Link></li>
        <li><Link href="/prints">Prints</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;