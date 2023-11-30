// src/components/AboutPage.tsx
import React from 'react';
import Heading from '../components/ui/Heading';
import SubHeading from '../components/ui/SubHeading';

const AboutPage = () => {
    return (
      <div className="p-4 bg-base-200">
        <div className="p-2 bg-base-300 rounded-md drop-shadow-xl mb-4 card-bordered">
          <Heading title="About me" />
          <div className="container flex flex-col items-center justify-center text-lg">
            <p className="mb-4">
              I&apos;m a software enthusiast with a love for coding and a deep
              connection to my Jamaican roots. This app started as a small
              project to keep my mom updated with news from home while she
              visited me in Canada. It&apos;s a simple way for us to stay in
              touch with Jamaican headlines, no matter where we are.
            </p>
            <p className="mb-4">
              JA-News is a casual, hobby project that I hope brings a little bit
              of Jamaica to anyone interested. It&apos;s my way of sharing a
              slice of home with those who miss it or are curious about the
              vibrant culture and happenings in Jamaica.
            </p>
          </div>
        </div>
        <div className="p-2 bg-base-300 rounded-md drop-shadow-xl">
          <SubHeading title="Features" />
          <ul
            className="list-disc ml-6 mb-4 text-center"
            style={{ listStyleType: 'none' }}
          >
            <li>Easy-to-read headlines from Jamaican news sources.</li>
            <li>A simple, user-friendly interface.</li>
            <li>
              A mix of local and international news to keep you connected.
            </li>
          </ul>
          <p className='text-center text-xl'>
            Feel free to explore the app, and I hope it brings you closer to
            Jamaica, just like it does for me and my mom.
          </p>
        </div>
      </div>
    );
};

export default AboutPage;