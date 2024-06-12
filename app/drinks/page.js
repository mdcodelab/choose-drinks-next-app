import React from 'react'
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

async function DrinksPage () {
    const response = await fetch(url);
    const data= await response.json();
    console.log(data);
  

  return (
    <div>
      Drinks Page
    </div>
  )
}

export default DrinksPage 
