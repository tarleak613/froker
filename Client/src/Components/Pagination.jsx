import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center mt-6 mb-8">
      <button
        className={`w-8 h-8 flex items-center justify-center mx-1 rounded-full border border-gray-300 text-lg font-bold ${
          currentPage === 1
            ? 'text-gray-400 bg-white cursor-not-allowed'
            : 'text-gray-800 bg-white hover:bg-gray-100'
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          className={`w-8 h-8 flex items-center justify-center mx-1 rounded-full border border-gray-300 text-lg ${
            index + 1 === currentPage
              ? 'bg-gray-200 text-gray-800'
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`w-8 h-8 flex items-center justify-center mx-1 rounded-full border border-gray-300 text-lg font-bold ${
          currentPage === totalPages
            ? 'text-gray-400 bg-white cursor-not-allowed'
            : 'text-gray-800 bg-white hover:bg-gray-100'
        }`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
