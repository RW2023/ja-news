//src/components/ui/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Heading from '@/app/components/ui/Heading';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between flex-wrap p-3 navbar mt-3 sticky top-0 z-50  bg-base-200 mb-2 shadow-2xl"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="flex items-center flex-shrink-0 text-2xl mr-6">
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight cursor-pointer">
            <Heading title="Jamaica Headline News" />{' '}
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl inline-flex items-center justify-center p-2 rounded-md  hover:bg-button hover:text-buttonText focus:outline-1 focus:ring-2 focus:ring-inset focus:ring-buttonText text-base-content"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto lg:justify-end`}
      >
        <div className="text-sm lg:flex-grow">]
        <Link href={'/news'}>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:text-strokeDark mr-4 cursor-pointer">
              News
            </span>
        </Link>
          <Link href="/about">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:text-strokeDark  mr-4 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/feedback">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:text-buttonText mr-4 cursor-pointer">
              Feedback
            </span>
          </Link>
          <Link href="/contact">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:text-buttonText cursor-pointer mr-2 border-base-300">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
