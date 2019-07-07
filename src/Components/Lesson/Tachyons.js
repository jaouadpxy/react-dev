import React from 'react';
import Highlight from 'react-highlight';

const Tachyons = () => {
  return (
    <div>
      <h1>What Is Tachyons?</h1>
      <p>
        Tachyons is a CSS framework, but unlike other well-known frameworks like
        <a
          href="https://foundation.zurb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Foundation
        </a>{' '}
        and{' '}
        <a
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootstrap
        </a>
        , it doesn't come with pre-built UI components. Instead it aims to break
        down CSS rules into as small and reusable parts as possible. This is
        commonly referred to as a
        <a
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subatomic Design System
        </a>{' '}
        and it makes frameworks like Tachyons very flexible, scalable, and
        perhaps most importantly, fast.
      </p>
      <h2>So, Why Tachyons?</h2>
      <p>
        All this talk of concepts and ways of working it great, but it means
        nothing if there are no benefits to the end-user's experience. As hinted
        at above, Tachyons delivers a small CSS file for styling your web page;
        around only 14kb when minified and gzipped, so very small indeed.
      </p>
      <p>
        First run{' '}
        <code className="f3 bg-beige mid-gray">
          npm install --save tachyons
        </code>
        . -D means it's for development only.
      </p>
      <Highlight language="javascript">
        {`npm install --save tachyons`}
      </Highlight>
      <br />
      <p>
        Because i will use sass in my configuration will install tachyons with
        sass{' '}
        <code className="f3 bg-beige mid-gray">
          npm install --save tachyons-sass
        </code>
        .
      </p>
      <br />
      <Highlight language="javascript">
        {`npm install --save tachyons-sass`}
      </Highlight>
    </div>
  );
};

export default Tachyons;
