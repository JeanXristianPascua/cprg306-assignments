import React from 'react';

export default function Item({name, quantity, category, onSelect}) {
 return (
      <>
          <li className="p-2 m-2 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" onClick={() => onSelect(Item)}>
              <h2 className="text-xl font-bold">Name: {name}</h2>
              <p>Quantity: {quantity}</p>
              <p>Category: {category}</p>
          </li>
      </>
 );
}
