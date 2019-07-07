import React from 'react';
import Jaouads from './../../assets/jaouad.jpg';

const Home = () => {
  return (
    <div>
      <h1>Introduction</h1>
      <div>
        <p className="pb5 ">
          Working with React is great. But unfortunately creating a react
          development environment is quite painful for a beginner and the ever
          changing Javascript community makes it even more complicated and
          cumbersome. You need to be familiar with technologies such as Babel,
          Webpack, ESLint and a couple of other things that might not be
          immediately apparent to a beginner. Along the way we &apos; re going
          to talk about the various technologies we need, why we need them and
          how they make our lives easier. Obviously, you can just use{' '}
          <a
            href="https://github.com/facebook/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            CRA
          </a>{' '}
          but I believe every react developer should know how to create an
          environment specific to their needs and particular development
          preferences.
        </p>
        <p>
          This article is mostly targeted at beginner web developers who have
          experience building web applications and are looking to learn react.
          To follow along you should be familiar with Javascript and ES6 syntax.
          Let &apos; s get started.
        </p>
        <h1>Who Ami I ?</h1>
        <div>
          <p className="center w50 tc">
            <img src={Jaouads} alt="" className="w-50" />
          </p>
          <p className="pt5">
            My name is Jaouad Sourour. I'm presently (as of writing) a Freelance
            Full-Stack Developer, and Js Student, i'm into Anime, Games,
            Fitness, and Music. Previous to that, i was a Front End Developer at
            Pyxiom, and an alumnus at Coder Academy.
          </p>
          <p>
            My biggest passions in life are poeple and experiences, i hope by
            going through this lesson that it can improve your life in some
            meaningful way and that you in turn can improve someones else's
            life.
          </p>
          <p>Please catch with me on social media, would love to chat:</p>
          <ul>
            <li>
              <a
                href="https://twitter.com/JaouadPxy"
                title=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jaouadpxy"
                title=""
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sourour-jaouad-6aa89a5b/"
                title=""
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
