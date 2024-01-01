'use client';
import React, { useEffect, useState } from 'react';
import { NewsArticle } from '@/app/types/NewsArticles';
import Heading from '@/app/components/ui/Heading';
import Loading from '@/app/components/ui/Loading';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ArticlePage: React.FC = () => {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [error, setError] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`/api/jamaica?id=${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch article');
          }
          return response.json();
        })
        .then((data) => setArticle(data))
        .catch((err) => setError(err.message || 'Failed to fetch article.'));
    }
  }, [id]);

  if (error) return <p>Error loading article: {error}</p>;
  if (!article) return <Loading />;

  return (
    <>
      <Head>
        <title>{article?.title}</title>
        <meta name="description" content={article?.description} />
      </Head>
      <div>
        <Heading title={article?.title} />
        <div className="text-left text-sm">
          <p>{article?.pubDate}</p>
          <p>{article?.source_id}</p>
          <p>{article?.creator}</p>
        </div>

        <div className="font-sans">
          <p>{article?.content}</p>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
