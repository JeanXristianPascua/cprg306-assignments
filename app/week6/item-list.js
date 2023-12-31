import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    // Add a default return value for cases where neither 'name' nor 'category' is chosen for sorting
    return 0;
  });

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  };

  return (
    <div className='mt-8'>
      <div>
        <label htmlFor="sort">Sort by:</label>
        <button onClick={handleSortByName} className='bg-orange-500 p-1 m-2 w-28'>
          Sort by Name
        </button>
        <button onClick={handleSortByCategory} className='bg-orange-500 p-1 m-2 w-28'>
          Sort by Category
        </button>
      </div>
      <ul className='p-2 m-4 bg-slate-500 max-w-sm'>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};
