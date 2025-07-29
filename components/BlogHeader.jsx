import React from 'react';

function BlogHeader() {
  return (
    <header className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-purple-400/30 rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-10 h-10 border-2 border-pink-400/30 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-fade-in">
          ModernBlog
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
          Read, reflect, repeat✨
        </p>
        <div className="flex justify-center space-x-6">
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-scale"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-scale" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-scale" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </header>
  );
}

window.BlogHeader = BlogHeader;
