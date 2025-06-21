'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MealSrc = () => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const searchQuery = { query };
    const urlQuery = new URLSearchParams(searchQuery)
    const url = `${path}?${urlQuery}`
    router.push(url)
  }, [query]);

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className="outline-none bg-gray-900 p-3 w-[300px] mb-8"
        placeholder="search your food"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default MealSrc;
