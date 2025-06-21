import Link from 'next/link';
import React from 'react';
import MealSrc from './components/MealSrc';

const Page = async ({ searchParams }) => {
  const search = await searchParams;

  const fetchMeal = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.query}`,
      );
      const data = await res.json();
      // setMeals(data.meals);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const meals = await fetchMeal();

  return (
    <div>
      <h1 className="text-5xl my-8 text-center">Meals</h1>
      <MealSrc />
      {meals && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 flex-wrap mx-auto w-[90vw] mb-16">
          {meals.map((m) => (
            <div
              key={m?.idMeal}
              className="border hover:border-amber-300 p-4 flex flex-col justify-between gap-4"
            >
              <img src={m.strMealThumb} alt="" />
              <h2 className="text-xl capitalize">{m?.strMeal}</h2>
              <p className="opacity-80">{m?.strCategory}</p>
              <p className="opacity-80">{m?.strArea}</p>
              <Link
                href={`/meals/${m?.idMeal}`}
                className=" px-3 py-2 text-center bg-orange-900"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
      {!meals && (
        <div className="mx-auto w-[90vw] mb-16 text-center py-8">
          <p> sorry, no meal found!</p>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/desert-unavailable-error-404-illustration-download-in-svg-png-gif-file-formats--sweet-food-delivery-business-activities-pack-store-illustrations-9032011.png?f=webp"
            alt="not found"
            className="w-[300px] mx-auto opacity-50"
          />
        </div>
      )}
    </div>
  );
};

export default Page;
