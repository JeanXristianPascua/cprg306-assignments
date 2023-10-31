"use client"

import { useState } from 'react';
import NewItem from './new-items';
import ItemList from "./item-list";
import MealIdeas from './meal-ideas'; // New component import
import itemsData from './items.json';
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    // Redirect to landing page or display a message
    alert("You need to be signed in to view this page");
  }

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(''); // New state variable
  

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    // Extracting the item name without the size and emoji
    const cleanName = itemName.split(',')[0].replace(/,.*|🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🧼|🍽️/g, '').trim(); // Extracting and cleaning the item name
    setSelectedItemName(cleanName);
};

  

  return (
    <main className='bg-slate-950 p-2 m-2'>
      <h2 className="text-3xl font-bold mb-4">My Shopping List</h2>
          <div className='flex'> {/* Adjusted layout */}
            <div className='flex-1 max-w-sm m-2'>
              <NewItem onAddItem={handleAddItem}/>
              <ItemList items={items} onItemSelect={handleItemSelect}/> {/* Passing the new prop */}
            </div>
            <div className='flex-1 max-w-sm m-2'>
              <h3 className='text-xl font-bold'>Meal Ideas</h3>
              <MealIdeas ingredient={selectedItemName}/> {/* Passing the new prop */}
            </div>
          </div>
    </main>
  );
}
