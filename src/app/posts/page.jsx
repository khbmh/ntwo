import Link from 'next/link';
import React from 'react';

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
};

const page = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-5xl my-8 text-center">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 flex-wrap mx-auto w-[90vw] mb-16">
        {posts.map((p) => (
          <Link
            href={`/posts/${p.id}`}
            key={p.id}
            className="border hover:border-amber-300 p-4 flex flex-col justify-between gap-4"
          >
            <h2 className="text-xl capitalize">{p.title}</h2>
            <p className="opacity-80">{p.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
