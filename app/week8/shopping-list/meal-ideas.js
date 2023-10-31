"use client"

import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error(error);
    }
  };

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealImage, setSelectedMealImage] = useState(null);
  const [selectedMealId, setSelectedMealId] = useState(null);


  async function loadMealIdeas() {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };
  
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  const handleMealClick = (meal) => {
    if (selectedMealId === meal.idMeal) {
      setSelectedMealId(null);
      setSelectedMealImage(null);
    } else {
      setSelectedMealId(meal.idMeal);
      setSelectedMealImage(meal.strMealThumb);
    }
  };

  const renderMeals = () => {
    if (meals && meals.length > 0) {
      return (
        <div>
          <p>Meal Ideas with {ingredient}:</p>
          <ul>
            {meals && meals.map((meal) => (
              <li className='p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer' 
                  key={meal.idMeal}
                  onClick={() => handleMealClick(meal)}>
                {meal.strMeal}
                <div>
                  {selectedMealId === meal.idMeal && selectedMealImage && <img src={selectedMealImage} alt={meal.strMeal} />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No meal ideas found</div>;
    }
  };

  return renderMeals();
}
