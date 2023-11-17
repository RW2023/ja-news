// pages/articles/[id].tsx

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { NewsArticle } from '@/app/types/NewsArticles';
import Heading from '@/app/components/ui/Heading';
import Loading from '@/app/components/ui/Loading';

const ArticlePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    // Fetch the article data using the id
    // Replace this URL with your actual API endpoint
    fetch(`/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  }, [id]);

  if (!article) return <Loading />;

  return (
    <div>
      <Heading title={article.title} />
      <div className='text-left text-sm'>
          <p>{article.pubDate} </p>
          <p>{article.source_id} </p>
          <p>{article.creator} </p>
      </div>

      <div className='font-sans'>
          {/* Render the full content of the article */}
          <p>{article.content}</p>
          {/* Rest of the article details */}
      </div>
    </div>
  );
};

export default ArticlePage;
