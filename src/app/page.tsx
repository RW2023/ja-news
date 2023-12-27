'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SubHeading from './components/ui/SubHeading';
import axios from 'axios';
import LoadingHomePage from './components/ui/LoadingHomePage';
import { NewsArticle } from '@/app/types/NewsArticles'; // Import NewsArticle type
import Heading from './components/ui/Heading';
import HomeHeading from './components/ui/HomeHeading';
import HomeSubHeading from './components/ui/HomeSubHeading';

export default function Home() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/jamaica');
        setArticles(response.data.results.slice(0, 6));
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
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(/flag.png)',
        }}
      >
        <div className="hero-content flex-col lg:flex-row flex-wrap">
          {/* <Image
            src="/flag.png"
            alt="Placeholder"
            width={250}
            height={250}
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}
          <div>
            <HomeHeading title="Wha a Gwaan a Yaad" />
            <HomeSubHeading title="Recent Headlines" />
            {isLoading ? (
              <LoadingHomePage />
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {articles.map((article, index) => (
                  <Link
                    key={index}
                    href={'/news'}
                    className="bg-base-300 border flex-col justify-center flex items-center align-middle p-4"
                  >
                    <SubHeading title={article.title} />
                    <p className="mx-auto drop-shadow-lg bg-base-200 mb-3 rounded-md">
                      {article.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
            <Link href="/news">
              <button
                type="button"
                className="btn btn-primary mt-4 rounded-md border text-lg"
              >
                <i className="fas fa-chevron-right mr-2"></i>Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
