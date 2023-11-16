'use client';
import { FC } from 'react';
import Heading from '@/app/components/ui/Heading';

interface Props {}

const Contact: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex flex-col justify-center form-control w-full max-w-xs  m-auto">
      <Heading title="Contact Us" />
      <form className="form-control w-full max-w-xs">
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

        <label className="label" htmlFor="subject">
          <span className="label-text">Subject</span>
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          className="input input-bordered w-full max-w-xs"
        />

        <label className="label" htmlFor="message">
          <span className="label-text">Message</span>
        </label>
        <textarea
          id="message"
          placeholder="Your message"
          className="textarea textarea-bordered h-24"
        ></textarea>

        <button type="submit" className="btn btn-primary mt-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;