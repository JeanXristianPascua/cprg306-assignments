"use client"

import { useState } from 'react';
import Item from './item';

export default function ItemList({items}){
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  }

  return (
    <div>
      <div>
        <button
          style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
          onClick={handleSortByName}
          className='bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded'
        >
          Sort by Name
        </button>
        <button
          style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
          onClick={handleSortByCategory}
          className='bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded'
        >
          Sort by Category
        </button>
      </div>
      <ul className='p-2 m-4 bg-slate-500 max-w-sm'>
        {sortedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};
