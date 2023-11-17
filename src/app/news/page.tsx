// src/app/news/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import ArticleList from '@/app/components/ArticleList';
import { NewsArticle } from '@/app/types/NewsArticles';

const YourNewsPage: React.FC = () => {
  const [newsData, setNewsData] = useState<{ results: NewsArticle[] } | null>(
    null,
  );

  useEffect(() => {
    // Fetch the news data from the /api/jamaica endpoint
    fetch('/api/jamaica')
      .then((response) => response.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <div className='text-3xl text-center font-sans font-bold'>
      <h1>Latest Headlines</h1>
      {newsData && <ArticleList articles={newsData.results} />}
    </div>
  );
};

export default YourNewsPage;
