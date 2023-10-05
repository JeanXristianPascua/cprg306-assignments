"use client";

import { useState } from "react";

export default function NewItem() { 
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting ${name} ${quantity} ${category}`);

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <>
        <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
         <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">
            Add New Item
          </h1>
            <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                    <span className="text-gray-700">Item Name</span>
                    <input
                        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                        placeholder="Enter item name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Quantity</span>
                    <input
                        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                        value={quantity}
                        onChange={handleQuantityChange}     
                    />    
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Category</span>
                    <input
                        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                        value={category}
                        onChange={handleCategoryChange}
                    />
                <button onClick={incrementQuantity}>+</button>
                </label>

                <button 
                    type="submit"
                    className="bg-gray-500 hover:bg-grey-700 text-black font-bold py-2 px-4 rounded block mb-4">
                    Add Item
                </button>
            </form>
         </div>
        </div>
        </>
    );
}