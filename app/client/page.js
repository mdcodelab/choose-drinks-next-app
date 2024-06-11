"use client";
import React from 'react';

function page() {
  const[count, setCount]=React.useState(0);
  return (
    <div>
      <h1 className="text-3xl mx-10">{count}</h1>
      <button className="btn  btn-primary" onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default page
