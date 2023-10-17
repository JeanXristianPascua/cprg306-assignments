"use client"

import { useState } from 'react';
import NewItem from './new-items';
import ItemList from "./item-list";
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <>
    <main>
        <div>
          <h1 className="text-3xl font-bold m-2">My Shopping List</h1>
          <NewItem onAddItem={handleAddItem}/>
          <ItemList items={items}/>
        </div>
    </main>
    </>
  );
}