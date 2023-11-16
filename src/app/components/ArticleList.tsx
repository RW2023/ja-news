// components/ArticleList.tsx

import React from 'react';
import { NewsArticle } from '@/app/types/NewsArticles';

interface ArticleListProps {
  articles: NewsArticle[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div key={article.article_id} className="article-item mb-4">
          <h2 className="text-xl font-bold">{article.title}</h2>
          <p>{article.description}</p>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Read more
          </a>
          <div className="text-sm text-gray-500">
            Published on: {article.pubDate}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
