import React, { useState, useEffect } from 'react';
import Blog from './Blog'; // Import the Blog component
import Pagination from './Pagination'; // Import the Pagination component
import axios from 'axios';
import { FaTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa'; // Import icons from react-icons

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const postsPerPage = 6; // Number of posts to show per page

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        const totalPosts = response.data.length;
        setPosts(response.data);
        setTotalPages(Math.ceil(totalPosts / postsPerPage));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  // Calculate the posts to display based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative">
      <div className="mx-[13%]">
        <h1 className="text-4xl mb-4">Recent Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPosts.map((post, index) => (
            <Blog key={index} post={post} /> // Use the Blog component here
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

  
    </div>
  );
}

export default Blogs;
