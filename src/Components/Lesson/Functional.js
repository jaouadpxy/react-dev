import React from 'react';
import Highlight from 'react-highlight';

const Functional = () => {
  return (
    <div>
      <h1>Functional CSS</h1>
      <p>
        Before we dive in on what is Functional css is, i want to talk about
        some higher level frameworks like bootstrap are built with class names
        that make a bunch of appearance, layout and design decisions for you.
        Take Bootstrap’s ‘btn’ class for example. Adding the ‘btn’ class to a
        link applies about 321 lines of CSS to that element (if you don’t
        believe me, check out lines 2206 to 9293 on the{' '}
        <a
          href="https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap.css#L3003"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootstrap GitHub Repo
        </a>
        ). If you’re building a site that’s a twitter clone, and you want it to
        look and feel exactly like twitter, this is great. Super easy and you’re
        done.
      </p>
      <h2>What is the heck is it?</h2>
      <p>
        Functional CSS basically means that you have a ton of tiny, single
        purpose classes that are named based on their visual function.
      </p>
      <p>For example, instead of something like this:</p>
      <Highlight language="html">
        {`<div class="profile-card">
  ...
</div>`}
      </Highlight>
      <Highlight language="html">
        {`<style>
  .profile-card {
    padding: 20px;
    margin: 20px;
    color: #eee;
    background: #333;
    border: 1px solid #555;
  }
</style>`}
      </Highlight>
      <br />
      <p>You’d instead just do this:</p>
      <br />
      <Highlight language="html">
        {`<div class="m-5 p-5 text-gray-light bg-gray-darker border border-gray-light">
  ...
</div>`}
      </Highlight>
      <br />
      <p>
        So instead of actually writing any CSS, you just apply the utility
        classes for each of the CSS rules that you would normally have written.
      </p>
      <h1>
        But I don’t want to sit there and write a bajillion utility classes
      </h1>
      <p>And you don’t have to. Lots of frameworks exist, such as:</p>
      <ul>
        <li>
          <a
            href="http://tachyons.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tachyons
          </a>{' '}
          (my favorite)
        </li>
        <li>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind
          </a>
        </li>
        <li>
          <a
            href="http://basscss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Basscss
          </a>
        </li>
      </ul>
      <p>
        There are also{' '}
        <a
          href="https://css-tricks.com/need-css-utility-library/"
          target="_blank"
          rel="noopener noreferrer"
        >
          lots more
        </a>{' '}
        if none of those are doing it for you.
      </p>
    </div>
  );
};

export default Functional;
