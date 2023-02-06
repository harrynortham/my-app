import { useState } from "react";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];
//list items should include a key. React will rely on your keys to understand what happened if you later insert, delete, or reorder the items.
//You will rely on JavaScript features like for loop and the array map() function to render lists of components.
const listItems = products.map((product) => (
  <li
    key={product.id}
    style={{
      color: product.isFruit ? "magenta" : "darkgreen",
    }}
  >
    {product.title}
  </li>
));

function MyButton() {
  //You will get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to call them like [something, setSomething].

  //getter and setter
  const [count, setCount] = useState(0);
  function handleClick() {
    //alert("You clicked me!");
    setCount(count + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Clicked me {count} times
    </button>
  );
}

//If you render the same component multiple times, each will get its own state. Try clicking each button separately:
export function MyApp() {
  return (
    <div>
      <h1>Welcome to my app, {user.name}</h1>
      <ul>{listItems}</ul>

      <MyButton />
      <MyButton />
    </div>
  );
}
