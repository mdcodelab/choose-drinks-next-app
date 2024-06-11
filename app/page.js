import React from 'react';
import Link from 'next/link';

function HomePage() {
  console.log("home page");
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/client" className="btn btn-accent">Get Started</Link>
    </div>
  )
}

export default HomePage
