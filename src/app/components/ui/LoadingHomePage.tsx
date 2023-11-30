'use client';
import { FC } from 'react';

const Loading: FC = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <p className="text-3xl">
          <span className="m-2"></span> Loading
          articles.....☝🏾
        </p>
      </div>
    </div>
  );
};

export default Loading;