import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Pagination from '../Components/Pagination';
import Footer from '../Components/Footer';
import Blogs from '../Components/Blogs';
import Newsletter from '../Components/Newsletter';
import { FaTwitter, FaFacebookF, FaWhatsapp, FaHeart } from 'react-icons/fa'; // Import icons from react-icons

function BlogPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [liked, setLiked] = useState(false); // State to track if the post is liked

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://froker-4rgh.onrender.com/api/posts/${id}`);
        setPost(response.data);
        setLiked(response.data.likedByUser); // Assuming the response contains a flag for whether the user has liked the post
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleLike = async () => {
    try {
      // Update the like status in the backend
      await axios.post(`https://froker-4rgh.onrender.com/api/posts/${id}/like`, { liked: !liked });

      // Update the local state
      setPost(prevPost => ({
        ...prevPost,
        likes: prevPost.likes + (liked ? -1 : 1),
      }));
      setLiked(!liked);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="mx-[12%] my-4 mt-0 p-4 bg-white rounded-lg">
        <div className="text-[#3d3d3d] font-gilroy mb-1">Blog &gt; {post.title}</div>
        <div className="relative">
          <img src={post.image} alt="Blog" className="w-full h-full object-cover rounded-3xl mb-4" />
          <div className="absolute bottom-0 left-5 font-gilroy font-bold right-0 text-white py-2 text-xl font-bold uppercase">
            {post.title}
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="font-gilroy text-sm text-orange-600">{post.author}</div>
          <div className="flex items-center space-x-2">
            <div 
              className={`w-10 h-10 flex items-center justify-center ${liked ? 'bg-red-500' : 'bg-orange-500'} text-white text-xs rounded-full cursor-pointer`} 
              onClick={handleLike}
            >
              <FaHeart className="text-xl" />
            </div>
            <span>{post.likes} likes</span>
          </div>
        </div>
        <div className="text-base text-gray-800">{post.body}</div>
      </div>
      <Blogs />
      <Newsletter />
      <Footer />

      {/* Share Section */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 p-4 rounded-lg bg-white z-10">
        <p className="font-semibold text-lg">Share</p>
        <div className="flex flex-col space-y-4">
          <a href="https://x.com/intent/post?url=https%3A%2F%2Ffroker-portal.in%2Fblog%2F5" target="_blank" rel="noopener noreferrer">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
              <FaTwitter className="text-white text-2xl hover:text-blue-300" />
            </div>
          </a>
          <a href="https://www.facebook.com/people/Froker/100090044834703/?mibextid=YMEMSu" target="_blank" rel="noopener noreferrer">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-full">
              <FaFacebookF className="text-white text-2xl hover:text-blue-400" />
            </div>
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full">
              <FaWhatsapp className="text-white text-2xl hover:text-green-300" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
