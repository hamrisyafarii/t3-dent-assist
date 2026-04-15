"use client";

import { api } from "~/trpc/react";

const PostPage = () => {
  const { data: posts } = api.post.getAllPost.useQuery();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800 text-white">
      <div>
        {posts?.map((post) => {
          return <p key={post.id}>{post.name}</p>;
        })}
      </div>
    </div>
  );
};

export default PostPage;
