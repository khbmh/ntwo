"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const path = usePathname();
  if (!path.includes('dashboard')) {
    return (
      <div className="flex w-1/2 *:cursor-pointer justify-between mx-auto my-4">
        <Link href={'/'}>Home</Link>
        <Link href={'/services'}>Services</Link>
        <Link href={'/posts'}>Posts</Link>
        <Link href={'/about'}>About</Link>
      </div>
    );
  } else {
    <></>;
  }
};

export default Navbar;
