import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkDependencies = () => {
      if (
        window.Home &&
        window.BlogHeader &&
        window.ArticleCard &&
        window.Pagination
      ) {
        setIsReady(true);
      }
    };

    checkDependencies();
    const interval = setInterval(checkDependencies, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
        <p className="mt-4 text-gray-300 text-lg">Loading...</p>
      </div>
    );
  }

  return <window.Home />;
}

createRoot(document.getElementById('renderDiv')).render(<App />);