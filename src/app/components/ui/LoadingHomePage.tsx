'use client';
import { FC } from 'react';

const Loading: FC = (): JSX.Element => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        textShadow:
          '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
      }}
    >
      <div className="text-center">
        <p className="text-3xl">
          <span className="m-2">
            <span className="loading loading-bars loading-lg"></span>
          </span>{' '}
          Loading articles.....☝🏾 any second now...⏱️
        </p>
      </div>
    </div>
  );
};

export default Loading;
