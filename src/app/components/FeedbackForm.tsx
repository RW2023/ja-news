//src/Components/FeedbackForm.tsx
'use client';

import { FC } from 'react';
import Heading from '@/app/components/ui/Heading';

interface Props {}

const FeedbackForm: FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <Heading title="Feedback Form" />
      <form className="form-control w-full max-w-xs flex flex-col justify-center m-auto">
        <label className="label" htmlFor="name">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="input input-bordered w-full max-w-xs"
        />

        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="email@domain.com"
          className="input input-bordered w-full max-w-xs"
        />

        <label className="label" htmlFor="feedback">
          <span className="label-text">Feedback</span>
        </label>
        <textarea
          id="feedback"
          placeholder="Your feedback"
          className="textarea textarea-bordered h-24"
        ></textarea>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;