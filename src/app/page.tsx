// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';

const products = [
  {
    name: 'Croissant',
    description: 'A buttery and flaky pastry.',
    ingredients: 'Flour, butter, yeast, water, salt',
    price: '$2.99',
    image: '/croissant.jpg',
  },
  {
    name: 'Chocolate Cake',
    description: 'Moist and decadent chocolate cake.',
    ingredients: 'Flour, cocoa, sugar, eggs, butter',
    price: '$19.99',
    image: '/chocolatecake.jpg',
  },
  {
    name: 'Blueberry Muffin',
    description: 'Freshly baked muffin with juicy blueberries.',
    ingredients: 'Flour, blueberries, sugar, eggs, butter',
    price: '$3.49',
    image: '/blueberrymuffin.jpg',
  },
  {
    name: 'Baguette',
    description: 'A classic French baguette with a crisp crust.',
    ingredients: 'Flour, water, salt, yeast',
    price: '$4.99',
    image: '/bagutte.jpg',
  },
  {
    name: 'Apple Pie',
    description: 'Homemade apple pie with a flaky crust.',
    ingredients: 'Apples, flour, sugar, butter, cinnamon',
    price: '$12.99',
    image: '/applepie.jpg',
  },
  {
    name: 'Cinnamon Roll',
    description: 'Sweet and gooey cinnamon roll with icing.',
    ingredients: 'Flour, cinnamon, sugar, butter',
    price: '$3.99',
    image: '/cinnamonroll.jpg',
  },
  {
    name: 'Red Velvet Cupcake',
    description: 'Delicious red velvet cupcake with cream cheese frosting.',
    ingredients: 'Flour, cocoa, sugar, eggs, buttermilk',
    price: '$2.49',
    image: '/redvelvet.jpg',
  },
  {
    name: 'Sourdough Bread',
    description: 'Artisanal sourdough bread with a chewy crust.',
    ingredients: 'Flour, water, sourdough starter, salt',
    price: '$6.99',
    image: '/SourdoughBread.jpg',
  },
  {
    name: 'Chocolate Chip Cookies',
    description: 'Homemade chocolate chip cookies.',
    ingredients: 'Flour, chocolate chips, sugar, butter',
    price: '$5.49',
    image: '/ChocolateChipCookies.jpg',
  },
  {
    name: 'Fruit Tart',
    description: 'Colorful fruit tart with a buttery crust.',
    ingredients: 'Pastry dough, custard, assorted fruits',
    price: '$9.99',
    image: '/FruitTart.jpg',
  },
  // Add more products here...
];

export default function Home() {
  return (
    <div className="bg-purple-200 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Camilex Bakers</title>
        <meta name="description" content="Camilex Bakers - Nairobi's finest bakery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-800">Camilex Bakers</h1>
        <p className="mt-4 text-xl text-purple-600">Nairobi's Finest Bakery</p>
      </header>

      <main className="flex flex-wrap justify-center">
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

      <footer className="mt-10 text-gray-600">
        <p>Visit us at Pipeline, Nairobi</p>
      </footer>
    </div>
  );
}
