"use client"

import React, { useState, useEffect } from 'react';

async function fetchMealIngredients(mealName) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    const data = await response.json();
    if (data && data.meals && data.meals[0]) {
      const meal = data.meals[0];
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push(`${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`);
        } else {
          break;
        }
      }
      return ingredients;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    if (data && data.meals) {
      return data.meals.map((meal) => ({
        name: meal.strMeal,
        id: meal.idMeal,
        image: meal.strMealThumb,
      }));
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [mealIdeas, setMealIdeas] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  async function loadMealIdeas() {
    const fetchedMealIdeas = await fetchMealIdeas(ingredient);
    setMealIdeas(fetchedMealIdeas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  const handleMealClick = async (meal) => {
    if (selectedMeal && selectedMeal.id === meal.id) {
      setSelectedMeal(null);
    } else {
      const ingredients = await fetchMealIngredients(meal.name);
      setSelectedMeal({ ...meal, ingredients });
    }
  };

  const renderMeals = () => {
    if (mealIdeas && mealIdeas.length > 0) {
      return (
        <div>
          <p>Meal Ideas with {ingredient}:</p>
          <ul>
            {mealIdeas.map((meal) => (
              <li
                className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
                key={meal.id}
                onClick={() => handleMealClick(meal)}
              >
                {meal.name}
                {selectedMeal && selectedMeal.id === meal.id && (
                  <div>
                    <img src={meal.image} alt={meal.name} />
                    <p>Ingredients:</p>
                    <ul>
                      {selectedMeal.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
