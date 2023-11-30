// pages/articles/[id].tsx
import React, { useEffect, useState } from 'react';
import { NewsArticle } from '@/app/types/NewsArticles';
import Heading from '@/app/components/ui/Heading';
import Loading from '@/app/components/ui/Loading';
import Head from 'next/head';
import { useParams } from 'next/navigation';

const ArticlePage: React.FC = () => {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [error, setError] = useState('');
  const params = useParams();

  useEffect(() => {
    if (params) {
      const id = params.id;
      if (id) {
        fetch(`/api/articles/${id}`)
          .then((response) => response.json())
          .then((data) => setArticle(data))
          .catch((err) => setError('Failed to fetch article.'));
      }
    }
  }, [params]);

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
