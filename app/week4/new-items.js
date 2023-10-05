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
                        required
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Quantity</span>
                    <input
                        type="number"
                        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                        value={quantity}
                        onChange={handleQuantityChange}     
                        min={1}
                        max={99}
                    />    
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Category</span>
                    <select
                        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                    />
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
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