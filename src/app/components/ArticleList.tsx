/* eslint-disable @next/next/no-img-element */
// components/ArticleList.tsx

import React from 'react';
import { NewsArticle } from '@/app/types/NewsArticles';

interface ArticleListProps {
  articles: NewsArticle[];
}

const placeholderImage = '/flag.png'; // Placeholder image path

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="grid gap-6 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-lg mr-auto ">
      {articles.map((article, index) => (
        <div
          key={index}
          className="p-4 rounded-lg shadow-lg bg-base-300 border"
        >
          <h2 className="text-2xl  font-bold mb-2  bg-base-300">
            {article.title}
          </h2>
          <p className="m-2 text-base text-left">
            Article Published {article.pubDate}
          </p>
          <p className="text-sm m-2  text-left">Outlet: {article.source_id}</p>
          <p className="text-sm m-2  text-left">
            Author: {article.creator}
          </p>{' '}
          <img
            src={article.image_url || placeholderImage}
            alt={article.title}
            className="w-full rounded-lg mb-4 object-cover bg-base-200 p-2"
          />
          <p className="mb-2 text-left text-xl bg-base-300 rounded-lg m-1">
            {article.description}
          </p>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-4 rounded-md border text-lg drop-shadow-2xl"
          >
            <i className="fas fa-chevron-right mr-2"></i>Read more
          </a>
          {/* Additional elements (like share buttons) can be added here */}
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
