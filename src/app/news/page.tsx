// src/app/news/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import ArticleList from '@/app/components/ArticleList';
import { NewsArticle } from '@/app/types/NewsArticles';
import Loading from '@/app/components/ui/Loading';

const YourNewsPage: React.FC = () => {
  const [newsData, setNewsData] = useState<{ results: NewsArticle[] } | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsLoading(true); // Start loading
    fetch('/api/jamaica')
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
        setIsLoading(false); // Stop loading after fetching data
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    ); // Loading indicator
  }

  return (
    <div
      className="text-3xl text-center font-sans font-bold"
  
    >
      <h1>Latest Headlines</h1>
      {newsData && <ArticleList articles={newsData.results} />}
    </div>
  );
};

export default YourNewsPage;
