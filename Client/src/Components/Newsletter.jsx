import React, { useState } from 'react';
import axios from 'axios';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://froker-4rgh.onrender.com/api/newsletter', { email });
      
      if (response.status === 200) {
        setMessage('Thank you for subscribing! You are now part of our community. Get ready to receive exciting updates, exclusive offers, and more directly to your inbox.');
        setMessageType('success');
        setSubmitted(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) { // Already subscribed
        setMessage('Sorry! Already subscribed.');
        setMessageType('error');
      } else {
        setMessage('An error occurred. Please try again.');
        setMessageType('error');
      }
    }
  };

  if (submitted) {
    return (
      <div className="mx-[17%] flex justify-center items-center min-h-[50vh] bg-white">
      <div className="border border-gray-400 rounded-3xl max-w-4xl w-full flex">
        {/* Image Container */}
        <div className="flex-shrink-0 w-1/3 flex items-center justify-center p-4">
          <img
            src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707226119/thanku_hfiump.jpg"
            alt="Thank you"
            className="w-56 h-56 object-contain"
          />
        </div>
        
        {/* Message Container */}
        <div className="flex-1 flex font-gilroy text-center text-[#394452] flex-col justify-center p-4">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold mb-2">Thank you for subscribing!</h2>
            <div className="text-lg mt-2">
              You are now part of our community. Get ready to receive exciting updates, exclusive offers, and more directly to your inbox.
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
  }

  return (
    <div className="mx-[17%] flex justify-center items-center min-h-[50vh] bg-white">
      <div className="border border-gray-400 rounded-3xl max-w-4xl w-full flex">
        {/* Image Container */}
        <div className="flex-shrink-0 w-1/3 flex items-center justify-center pb-2 pr-4">
          <img
            src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1706767740/Frokerassets/OBJECTS_lpey0b.png"
            alt="newsletter"
            className="w-56 h-56 object-contain"
          />
        </div>

        {/* Form Container */}
        <div className="flex-1 flex flex-col justify-center p-4">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold mb-2">Subscribe to our newsletter to get the latest updates and news</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-0">
            <input
              type="email"
              id="email"
              name="Email_ID"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-3xl outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="py-3 px-4 bg-orange-500 text-white rounded-r-3xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </form>
          {message && (
            <div className={`mt-4 p-4 rounded-lg ${messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
