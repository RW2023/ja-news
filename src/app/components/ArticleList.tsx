/* eslint-disable @next/next/no-img-element */
// components/ArticleList.tsx
import React from 'react';
import { NewsArticle } from '@/app/types/NewsArticles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ArticleListProps {
  articles: NewsArticle[];
}

const placeholderImage = '/flag.png'; // Placeholder image path

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div
      className="container grid gap-6 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-lg mx-auto text-center"
      style={{
        backgroundImage: 'url(/flag.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} index={index} />
      ))}
    </div>
  );
};

const ArticleCard: React.FC<{ article: NewsArticle; index: number }> = ({
  article,
  index,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="card-compact p-4 rounded-lg shadow-lg  border drop-shadow-md bg-base-300 flex flex-col justify-center items-center"
    >
      <div className="card-title flex justify-center items-center">
        <h2 className="border-y border-1 drop-shadow-xl  text-xl font-semibold font-poppins text-center mb-6 mt-6">
          {article.title}
        </h2>
      </div>
      <div className="attribution text-sm italic border border-1 rounded drop-shadow-sm bg-base text-paragraph">
        {' '}
        <p className="m-2 text-base text-left">
          Article Published {article.pubDate}
        </p>
        <p className="text-sm m-2  text-left">Outlet: {article.source_id}</p>
        <p className="text-sm m-2  text-left">Author: {article.creator}</p>{' '}
        <figure>
          <img
            src={article.image_url || placeholderImage}
            alt={article.title}
            className="w-full rounded-lg mb-4 object-cover bg-base-200 p-2"
          />
        </figure>
      </div>
      <div className="card-body mb-2  text-xl rounded-lg m-1 drop-shadow-md border-y-2 h-auto">
        <article className="pros  bg-base-200 p-2 rounded-md text-justify text-lg border">{article.description}</article>
        <div className="card-actions">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-4 rounded-md border text-lg drop-shadow-2xl"
          >
            <i className="fas fa-chevron-right mr-2"></i>Read more
          </a>
        </div>
      </div>
      {/* Additional elements (like share buttons) can be added here */}
    </motion.div>
  );
};

export default ArticleList;
