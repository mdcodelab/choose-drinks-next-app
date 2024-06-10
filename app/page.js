import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/about">About Page</Link>
    </div>
  )
}

export default HomePage
