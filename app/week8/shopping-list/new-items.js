import { useState } from "react";

export default function NewItem({ onAddItem }) { 
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };
        onAddItem(newItem);

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
        <div className="flex-1 max-w-sm m-2">
          <h3 className="text-xl font-bold">Add New Item</h3>
            <form onSubmit={handleSubmit} className="text-black">
                <div className="mb-2">
                    <input
                        className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                        placeholder="Enter item name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <input
                        className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}     
                        min={1}
                        max={99}
                    /> 
                    <select onChange={handleCategoryChange} className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                        <option disabled>Category</option>
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
                    </select>   
                </div>
                <button 
                    type="submit"
                    className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Add Item
                </button>
            </form>
        </div>
    );
}