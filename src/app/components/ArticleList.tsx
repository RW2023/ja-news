/* eslint-disable @next/next/no-img-element */
// components/ArticleList.tsx

import React from 'react';
import { NewsArticle } from '@/app/types/NewsArticles';

interface ArticleListProps {
  articles: NewsArticle[];
}

const placeholderImage = '/imagePlaceHolder.png'; // Placeholder image path

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="grid gap-6 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-lg mr-auto ">
      {articles.map((article, index) => (
        <div
          key={index}
          className="p-4 rounded-lg shadow-lg bg-background border border-headline"
        >
          <h2 className="text-base md:text-lg font-bold mb-2 text-headline">
            {article.title}
          </h2>
          <img
            src={article.image_url || placeholderImage}
            alt={article.title}
            className="w-full rounded-lg mb-4 object-cover"
          />
          <p className="mb-2 text-paragraph text-lg">{article.description}</p>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-button hover:text-headline hover:text-opacity-100 hover:underline"
          >
            Read more
          </a>
          {/* Additional elements (like share buttons) can be added here */}
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
