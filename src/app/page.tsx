// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';

const products = [
  {
    name: "Croissant",
    description: "A buttery and flaky pastry.",
    ingredients: "Flour, butter, yeast, water, salt",
    price: 'Kes 20',
    image: "/croissant.jpg",
  },
  {
    name: "Chocolate Cake",
    description: "Moist and decadent chocolate cake.",
    ingredients: "Flour, cocoa, sugar, eggs, butter",
    price: 'Kes 1999',
    image: "/chocolatecake.jpg",
  },
  {
    name: "Blueberry Muffin",
    description: "Freshly baked muffin with juicy blueberries.",
    ingredients: "Flour, blueberries, sugar, eggs, butter",
    price: 'Kes 49',
    image: "/blueberrymuffin.jpg",
  },
  {
    name: "Baguette",
    description: "A classic French baguette with a crisp crust.",
    ingredients: "Flour, water, salt, yeast",
    price: 'Kes 49',
    image: "/bagutte.jpg",
  },
  {
    name: "Apple Pie",
    description: "Homemade apple pie with a flaky crust.",
    ingredients: "Apples, flour, sugar, butter, cinnamon",
    price: 'Kes 120',
    image: "/applepie.jpg",
  },
  {
    name: "Cinnamon Roll",
    description: "Sweet and gooey cinnamon roll with icing.",
    ingredients: "Flour, cinnamon, sugar, butter",
    price: 'Kes 99',
    image: "/cinnamonroll.jpg",
  },
  {
    name: "Red Velvet Cupcake",
    description: "Delicious red velvet cupcake with cream cheese frosting.",
    ingredients: "Flour, cocoa, sugar, eggs, buttermilk",
    price: 'Kes 24',
    image: "/redvelvet.jpg",
  },
  {
    name: "Sourdough Bread",
    description: "Artisanal sourdough bread with a chewy crust.",
    ingredients: "Flour, water, sourdough starter, salt",
    price: 'Kes 69',
    image: "/SourdoughBread.jpg",
  },
  {
    name: "Chocolate Chip Cookies",
    description: "Homemade chocolate chip cookies.",
    ingredients: "Flour, chocolate chips, sugar, butter",
    price: 'Kes 10',
    image: "/ChocolateChipCookies.jpg",
  },
  {
    name: "Fruit Tart",
    description: "Colorful fruit tart with a buttery crust.",
    ingredients: "Pastry dough, custard, assorted fruits",
    price: 'Kes 999',
    image: "/FruitTart.jpg",
  },
  // Add more products here...
];

export default function Home() {
  return (
    <div className="bg-purple-200 min-h-screen flex flex-col items-center">
      <Head>
        <title>Camilex Bakers</title>
        <meta name="description" content="Camilex Bakers - Nairobi's finest bakery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-purple-800 text-white py-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">Camilex Bakers</h1>
          <nav>
            <ul className="flex space-x-6">
              <li className="text-xl">Home</li>
              <li className="text-xl">Products</li>
              <li className="text-xl">About Us</li>
              <li className="text-xl">Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 flex flex-wrap justify-center">
        {products.map((product, index) => (
          <div key={index} className="max-w-md bg-white rounded-lg shadow-lg m-4 p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-t-lg"
            />
            <h2 className="text-xl font-semibold text-purple-800 mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Ingredients: </span>
              {product.ingredients}
            </p>
            <p className="text-purple-600 font-semibold">{product.price}</p>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8 w-full">
        <div className="container mx-auto flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="text-gray-300">Phone: +254-723-269-204 or +254-710-951-902</p>
            <p className="text-gray-300">Email: info@camilexbakers.com</p>
            <p className="text-gray-300">Address: Pipeline, Nairobi</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}