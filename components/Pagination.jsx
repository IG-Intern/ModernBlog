import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5;
    
    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    let end = Math.min(totalPages, start + showPages - 1);
    
    if (end - start < showPages - 1) {
      start = Math.max(1, end - showPages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 py-12">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="relative group px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-purple-400 disabled:text-gray-500 disabled:cursor-not-allowed hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center space-x-2">
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Prev</span>
        </div>
      </button>

      {/* First page */}
      {getPageNumbers()[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="relative group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative font-medium">1</span>
          </button>
          {getPageNumbers()[0] > 2 && (
            <span className="text-gray-500 px-2">...</span>
          )}
        </>
      )}

      {/* Page numbers */}
      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`relative group w-12 h-12 backdrop-blur-sm border rounded-xl font-medium transition-all duration-300 overflow-hidden ${
            currentPage === pageNumber
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500 text-white shadow-lg shadow-purple-500/25'
              : 'bg-slate-800/50 border-slate-700/50 text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative">{pageNumber}</span>
        </button>
      ))}

      {/* Last page */}
      {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
        <>
          {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
            <span className="text-gray-500 px-2">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="relative group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative font-medium">{totalPages}</span>
          </button>
        </>
      )}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="relative group px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-purple-400 disabled:text-gray-500 disabled:cursor-not-allowed hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center space-x-2">
          <span className="font-medium">Next</span>
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
}

window.Pagination = Pagination;