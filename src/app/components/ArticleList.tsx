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
    <div
      className="container grid gap-6 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-lg mr-auto "
      style={{
        backgroundImage: 'url(/flag.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      {articles.map((article, index) => (
        <div
          key={index}
          className="card p-4 rounded-lg shadow-lg  border drop-shadow-md bg-base-300"
        >
          <div className="card-title flex justify-center items-center">
            <h2 className="text-2xl  font-bold mb-2 border-y border-1 drop-shadow-xl">
              {article.title}
            </h2>
          </div>
          <div className="attribution text-sm text-gray-500 italic">
            {' '}
            <p className="m-2 text-base text-left">
              Article Published {article.pubDate}
            </p>
            <p className="text-sm m-2  text-left">
              Outlet: {article.source_id}
            </p>
            <p className="text-sm m-2  text-left">Author: {article.creator}</p>{' '}
            <img
              src={article.image_url || placeholderImage}
              alt={article.title}
              className="w-full rounded-lg mb-4 object-cover bg-base-200 p-2"
            />
          </div>
          <div className="card-body mb-2 text-left text-xl bg-base-300 rounded-lg m-1 drop-shadow-md border-y-2">
            <p className="text-lg">{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4 rounded-md border text-lg drop-shadow-2xl"
            >
              <i className="fas fa-chevron-right mr-2"></i>Read more
            </a>
          </div>
          {/* Additional elements (like share buttons) can be added here */}
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
