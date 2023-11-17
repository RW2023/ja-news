// src/app/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/placeHolder.png"
            alt="Placeholder"
            width={400} // Set appropriate width
            height={400} // Set appropriate height
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Headlines from Yaad</h1>
            <p className="py-6">
             Read headlines from Yaad and around the world.
            </p>
            <Link
              href="/news"
              
            >
            <button type="button" className="btn btn-primary">Get Headlines</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
