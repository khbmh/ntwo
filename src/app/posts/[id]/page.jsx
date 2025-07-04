import React from 'react';

export const dynamic = 'force-dynamic';

const getPost = async (postId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const p = await params;
  const post = await getPost(p.id);
  return (
    <div className="p-6">
      <h1 className="text-5xl my-8 text-center">single post {post.userId}</h1>
      <h1 className="text-3xl my-8">single page {post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default page;
