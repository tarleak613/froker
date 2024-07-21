import React from 'react';
import { Link } from 'react-router-dom';

function Blog({ post }) {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden">
      <Link to={`/blog/${post._id}`} className="block h-full">
        <div className="relative">
          <img
            src={post.image}
            alt="pic of blogs"
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
        <div className="p-4 pl-0">
          <div className="text-sm text-[#f76f32] mb-2">{post.author}</div>
          <div className="text-lg font-semibold mb-2">{post.title}</div>
          <p className="text-base text-gray-800 mb-4">
            Introduction: Welcome to the dynamic world of content creation, where creativity...
          </p>
          <div className="text-[#f76f32] font-bold underline">Read More...</div>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
