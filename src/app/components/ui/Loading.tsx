import { FC } from 'react';

const Loading: FC = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p className="text-3xl">
          <span className="loading loading-bars loading-lg m-2"></span> Loading
          articles.....☝🏾
        </p>
      </div>
    </div>
  );
};

export default Loading;
