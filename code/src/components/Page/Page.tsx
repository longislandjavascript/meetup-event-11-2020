import React from 'react';
import { Header } from '../Header';
import { SkipNav } from '../SkipNav';

export type PageProps = {};

export const Page: React.FC<PageProps> = () => {
  return (
    <article>
      <SkipNav contentId="main-content" />
      <Header />

      <section className="container mx-auto p-4 text-lg" id="main-content">
        <h2 className="text-3xl">Pages in Storybook</h2>
        <br />
        <p>
          We recommend building UIs with a{' '}
          <a
            href="https://componentdriven.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app. Here are
          some handy patterns for managing page data in Storybook:
        </p>
        <ul className="list-disc">
          <li>
            <p>
              Use a higher-level connected component. Storybook helps you
              compose such data from the "args" of child component stories
            </p>
          </li>
          <li>
            <p>
              Assemble data in the page component from your services. You can
              mock these services out using Storybook.
            </p>
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a
            href="https://www.learnstorybook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Storybook
          </a>
          . Read more in the{' '}
          <a
            href="https://storybook.js.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs
          </a>
          .
        </p>
        <div className="mt-4">
          <span className="bg-green-300 px-2 py-1 rounded-full text-sm text-green-900 font-semibold">
            Tip
          </span>{' '}
          Adjust the width of the canvas with the{' '}
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            className="inline mx-1 mb-1"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};