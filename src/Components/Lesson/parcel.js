import React from 'react';
import Highlight from 'react-highlight';
import Parcel from './../../assets/parcel-logo.jpg';

const parcel = () => {
  return (
    <div className="pb5">
      <h1> Parcel</h1>
      <p className="w-100 tc mb3">
        <img src={Parcel} alt="" className="w-50" />
      </p>

      <p>
        <a
          href="https://parceljs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Parcel
        </a>{' '}
        is a relatively new bundler for JavaScript projects. The first three
        revisions of this workshop all teach Webpack and end up spending a
        decent amount of time covering how to set it up. Webpack is a fantastic
        piece of technology and you should definitely consider using it for your
        large applications; it's been around a long time and has a lot of
        support. That being said, Parcel is an amazing tool that zero-config. It
        works with everything we want to do out of the box. Since this is a
        class on React and not build processes, this allows us to focus more on
        React. Let's go see what it can do for us.
      </p>
      <h1>What are the benefits of Parcel?</h1>
      <ul>
        <li>
          Fast bundle times — Parcel is faster than Webpack, Rollup and
          Browserify.
        </li>
        <li>
          Parcel has out of the box support for JS, CSS, HTML, file assets, and
          more —{' '}
          <span className="fw9">no plugins needed — More user friendly.</span>
        </li>
        <li>
          Zero configuration required. Out of the box code splitting, hot module
          reloading, css preprocessors, development server, caching, and many
          more!
        </li>
        <li>Friendlier error logs.</li>
      </ul>
      <p>
        Install Parcel by doing{' '}
        <code className="f3 bg-beige mid-gray">
          npm install -D parcel-bundler.
        </code>{' '}
      </p>
      <br />
      <p>
        Now inside of your{' '}
        <code className="f3 bg-beige mid-gray">package.json</code> put:
      </p>
      <h2>Alright — so when should I use Parcel, Webpack or Rollup?</h2>
      <p>
        It’s completely up to you but I personally would use each bundler in the
        following situations:
      </p>
      <ul>
        <li>
          <span className="i fw9">Parcel</span> — Small to medium sized projects
          (&#60;15k lines of code)
        </li>
        <li>
          <span className="i fw9">Webpack</span> — Large to enterprise sized
          projects.
        </li>
        <li>
          <span className="i fw9">Rollup </span> — For NPM packages.
        </li>
      </ul>
      <p className="i">Let’s give Parcel a shot!</p>

      <Highlight language="javascript">
        {`"scripts" {
  "dev": "parcel src/index.html -p 3000"
}`}
      </Highlight>
      <br />
      <p>Now open <a
            className="link"
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >http://localhost:3000</a>. You should see your site come up. The difference here is now it's being run through Parcel which means we can leverage all the features that Parcel allows us which we will explore shortly.</p>

<p>So how does it work? We gave the entry point, which is index.html. It then reads that index.html file and finds its dependencies, which is the two React files and the one App.js file that we linked to. It's smart enough to detect that those two React files are remote so it doesn't do anything with those, but it sees that App.js is local and so it reads it and compiles its dependencies. Right now it has no dependencies so let's fix that.</p>

<p>First let's fix the React and ReactDOM dependencies. Right now these are coming from unpkg.com. Unpkg isn't meant to serve production traffic, nor do we want the burden of loading all of our future dependencies this way. Believe me, it would get messy quickly and we'd have to make a million requests to get all of them by the end (we'll install more later as we go.) Instead, it'd be better if we could pull our dependencies down from npm and include it in our bundle. Let's do that now.</p>
    </div>
  );
};

export default parcel;
