import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IntroPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts'); // Update this URL to your API endpoint
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mx-[13%] py-6 pt-10 space-y-6">
      {/* First div with heading */}
      <div className="text-center">
        <h1 className="text-3xl ">
          <span className="font-gilroy text-[#f76f32]">FROKER</span> <span className="text-black">BLOG</span>
        </h1>
      </div>

      {/* Second div with text */}
      <div className="pb-6 pt-4 font-gilroy text-[#3d3d3d] text-center">
        <p className="text-5xl">
          <span className='pb-2'>Articles covering the most recent</span><br/>
          <span> updates and advancements</span>
        </p>
      </div>

      {/* Third div with a side-by-side layout */}
      <div className="flex space-x-4">
        {/* First side-by-side blog post */}
        {posts.length > 0 && (
          <a href={`/blog/${posts[0]._id}`} className="block bg-white rounded-xl flex-1 overflow-hidden">
            <div className="relative">
              <img
                src={posts[0].image}
                alt="pic of blogs"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-4 pl-0">
              <div className="text-sm text-[#f76f32] mb-2">by {posts[0].author} - {new Date(posts[0].date).toLocaleDateString()}</div>
              <div className="text-lg font-semibold mb-2">{posts[0].title}</div>
              <p className="text-base text-gray-800 mb-4">
                {posts[0].body.slice(0, 100)}... {/* Shorten the body text */}
              </p>
              <div className="text-[#f76f32] font-bold underline">Read More...</div>
            </div>
          </a>
        )}

        {/* Second side-by-side blog post containing two horizontally aligned posts */}
        <div className="flex flex-col space-y-4 flex-1">
          {posts.slice(1, 3).map((post) => (
            <a key={post._id} href={`/blog/${post._id}`} className="block bg-white rounded-xl flex">
              <div className="w-1/2 flex-shrink-0">
                <img
                  src={post.image}
                  alt="pic of blogs"
                  className="w-full h-56 object-cover rounded-xl" // Square image with fixed height
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="text-sm text-[#f76f32] mb-2">by {post.author} - {new Date(post.date).toLocaleDateString()}</div>
                    <div className="text-lg font-semibold mb-2">{post.title}</div>
                    <p className="text-base text-gray-800 mb-4">
                      {post.body.slice(0, 50)}... {/* Shorten the body text */}
                    </p>
                  </div>
                  <div className="text-[#f76f32] font-bold underline">Read More...</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntroPost;
