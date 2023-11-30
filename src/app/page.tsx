// src/app/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SubHeading from './components/ui/SubHeading';
import axios from 'axios';
import LoadingHomePage from './components/ui/LoadingHomePage';
import { NewsArticle } from '@/app/types/NewsArticles'; // Import NewsArticle type

export default function Home() {
  const [articles, setArticles] = useState<NewsArticle[]>([]); // Use the NewsArticle type
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/jamaica');
        setArticles(response.data.results.slice(0, 3)); // Adjust number of articles as needed
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row flex-wrap">
          <Image
            src="/placeHolder.png"
            alt="Placeholder"
            width={300}
            height={250}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-center">Headlines from Yaad</h1>
            <SubHeading title="Sample Stories" />
            {isLoading ? (
              <LoadingHomePage />
            ) : (
              articles.map((article, index) => (
                <div key={index} className="text-lg">
                  <Link href={'/news'}>
                    <h3 className='btn p-1 border border-headline m-1 bg-base-300 rounded-md shadow-2xl'>{article.title}</h3>                  </Link>
                  {/* Add more details from the article as needed */}
                </div>
              ))
            )}
            <Link href="/news">
              <button
                type="button"
                className="btn btn-primary mt-4 rounded-md border text-lg"
              >
                Get Headlines
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
