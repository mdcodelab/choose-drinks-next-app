import DrinksList from "../../components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async ()=>{
  await new Promise((resolve)=> setTimeout(resolve, 1000));
const response = await fetch(url);
// throw error
if(!response.ok) {
  throw new Error("failed to fetch drinks");
}
    const data= await response.json();
    return data;
}

async function DrinksPage () {
    const data = await fetchDrinks();
    //console.log(data)  

  return (
    <div>
      <DrinksList drinks={data.drinks}></DrinksList>
    </div>
  )
}

export default DrinksPage 
