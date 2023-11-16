//src/Components/UI/Heading.tsx
'use client';
import React, { FC, useState } from 'react';

interface Props {
  title: string;
}

const Heading: FC<Props> = (props): JSX.Element => {
  // State to manage the theme
  const [theme, setTheme] = useState('luxury'); // Default theme

  // Function to handle theme change
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div>
      <h1 className="text-center font-sans text-4xl m-8 ">{props.title}</h1>
      </div>
  );
};

export default Heading;
