import Link from "next/link";

function DrinksList({ drinks }) {
  return (
    <ul className="menu menu-vertical">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link href={`/drinks/${drink.idDrink}`} className="text-xl font-medium">{drink.strDrink}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DrinksList;
