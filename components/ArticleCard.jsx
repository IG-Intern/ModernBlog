import React from 'react';

function ArticleCard({ article, index }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getRandomGradient = () => {
    const gradients = [
      'from-purple-500/20 to-pink-500/20',
      'from-blue-500/20 to-purple-500/20',
      'from-pink-500/20 to-orange-500/20',
      'from-green-500/20 to-blue-500/20',
      'from-orange-500/20 to-red-500/20',
      'from-teal-500/20 to-purple-500/20',
    ];
    return gradients[index % gradients.length];
  };

  const getRandomCategory = () => {
    const categories = ['Technology', 'Design', 'Lifestyle', 'Business', 'Science', 'Travel'];
    return categories[index % categories.length];
  };

  return (
    <article 
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getRandomGradient()} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Image placeholder */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={`https://picsum.photos/400/300?random=${index}`}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
            {getRandomCategory()}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative p-6 z-10">
        <div className="flex items-center justify-between mb-3">
          <time className="text-sm text-purple-400 font-medium">
            {formatDate(article.publishedAt)}
          </time>
          <div className="flex items-center space-x-1">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {article.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-gray-400 text-sm">{article.author}</span>
          </div>
          
          <button className="group/btn flex items-center space-x-2 text-purple-400 hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium">Read more</span>
            <svg 
              className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}></div>
    </article>
  );
}

window.ArticleCard = ArticleCard;