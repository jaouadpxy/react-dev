import React from 'react';
import Highlight from 'react-highlight';
import Babel from './../../assets/babel.jpg';


const Prettier = () => {
  return (
    <div>
      <h1>npm, ESLint & Prettier</h1>
      <div>
        <h3>npm</h3>
        <p>
          npm does not stand for Node Package Manager. It is, however, the
          package manager for Node. (They don't say what it stands for.) It also
          has all the packages in the front end scene. npm makes a command line
          tool, called <code className="f3 bg-beige mid-gray"> npm</code> as
          well.
          <code className="f3 bg-beige mid-gray"> npm </code>
          allows you to bring in code from the npm registry which is a bunch of
          open source modules that people have written so you can use them in
          your project. Whenever you run{' '}
          <code className="f3 bg-beige mid-gray">npm install react</code> (don't
          do this yet), it will install the latest version of React from the
          registry.
        </p>
        <p>
          In order to start an npm project, run{' '}
          <code className="f3 bg-beige mid-gray">npm init -y</code> at the root
          of your project it. If you don't have Node.js installed, please go
          install that too. When you run{' '}
          <code className="f3 bg-beige mid-gray">npm init</code> it'll ask you a
          bunch of questions. If you don't know the answer or don't care, just
          run <code className="f3 bg-beige mid-gray">npm init -y</code>. You can
          always modify package.json later. This will allow us to get started
          installing and saving packages.
        </p>
      </div>
      <div>
        <h3>Prettier</h3>
        <p>
          <a
            className="link"
            href="https://github.com/prettier/prettier"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prettier
          </a>{' '}
          is an amazing tool from the brain of{' '}
          <a
            className="link"
            href="https://twitter.com/jlongster"
            target="_blank"
            rel="noopener noreferrer"
          >
            James Long
          </a>
          . James, like many of us, was sick of having to constantly worried
          about the style of his code: where to stick indents, how many, when to
          break lines, etc etc. Coming from languages like Go, Reason, or Elm
          where all that is just taken care of by the tooling for the language,
          this quickly wears. James did something about it and made a tool to
          take care of it: Prettier.
        </p>
        <p>
          Prettier is a really fancy pretty printer. It takes the code you
          write, breaks it down in to an abstract syntax tree (AST) which is
          just a representation of your code. It then takes that AST, throws
          away all of your code style you made and prints it back out using a
          predefined style. While this sounds a little scary, it's actually
          really cool. Since you no longer have control of the style of your
          code, you no longer have to think at all about it. Your code is always
          consistent, as is the code from the rest of your team. No more
          bikeshedding!! As I like to put it: if your brain is a processor, you
          get to free up the thread of your brain that worries about code styles
          and readability: it just happens for you. Don't like semicolons? Don't
          write them! It puts them in for you. I love Prettier.
        </p>
        <p>
          Need to tool around a bit with it before you trust it? Go here. You
          can see how it works.
        </p>

        <p>
          Prettier is great to use with{' '}
          <a
            className="link"
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual Studio Code
          </a>
          . Just download this{' '}
          <a
            className="link"
            href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
            target="_blank"
            rel="noopener noreferrer"
          >
            extension
          </a>
          . Pro tip: set it to only run Prettier when it detects a Prettier
          config file. Makes it so you never have to turn it off. In order to do
          that, set{' '}
          <code className="f3 bg-beige mid-gray">prettier.requireConfig</code>{' '}
          to <code className="f3 bg-beige mid-gray">true</code> and{' '}
          <code className="f3 bg-beige mid-gray">editor.formatOnSave</code> to{' '}
          <code className="f3 bg-beige mid-gray">true</code>.
        </p>
        <p>
          So that our tool can know this is a Prettier project, we're going to
          create a file called{' '}
          <code className="f3 bg-beige mid-gray">.prettierrc</code> and put{' '}
          <code className="f3 bg-beige mid-gray">{}</code> in it. This lets
          everyone know this is a Prettier project that uses the default
          configuration.
        </p>
        <h3>npm/Yarn scripts</h3>
        <p>
          So it can be painful to try to remember the various CLI commands to
          run on your project. You can put CLI commands into it and then run the
          name of the tag and it'll run that script. Let's go see how that
          works. Put the following into your package.json.
        </p>

        <p>
          First run{' '}
          <code className="f3 bg-beige mid-gray">npm install -D prettier</code>.
          -D means it's for development only.
        </p>
        <Highlight language="javascript">
          {`"scripts" {
  "format": "prettier --write \"src/**/*.{js,jsx}\"",
}`}
          ,
        </Highlight>
        <br />
        <h2>ESlint</h2>
       <p> On top of Prettier which takes of all the formatting, you may want to enforce some code styles which pertain more to usage: for example you may want to force people never use with which is valid JS but ill advised to use. ESLint comes into play here. It will lint for this problems.</p>

<p>First of all, <code className="f3 bg-beige mid-gray">run npm install -D eslint eslint-config-prettier</code> to install eslint in your project development dependencies. Then you may configure its functionalities.</p>

<p>There are dozens of present configs for ESLint and you're welcome to use any one of them. The Airbnb config is very popular, as is the standard config (which both I taught in previous versions of this class). I'm going to use a looser one for this class:  <code className="f3 bg-beige mid-gray">eslint:recommended</code>. Let's create an <code className="f3 bg-beige mid-gray">.eslintrc.json</code> file to start linting our project.</p>

<p>Create this file called <code className="f3 bg-beige mid-gray">.eslintrc.json</code>.</p>
<Highlight language="javascript">
          {`{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}`}
          ,
        </Highlight>
        <p>Let's go add this to our npm scripts.</p>
        <br />
        <Highlight language="javascript">
          {`"lint": "eslint \"**/*.{js,jsx}\" --quiet",}`}
          ,
        </Highlight>
        <h2>ESLint + React</h2>
        <p>We need to give ESLint a hand to get it to recognize React and not yell about React not being used. Right now it thinks we're importing React and not using because it doesn't know what to do with React. Let's help it.</p>

<p>Run this: <code className="f3 bg-beige mid-gray">npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react</code></p>

<p>Update your .eslintrc.json to:</p>
<Highlight language="javascript">
          {`{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}`}
          ,
        </Highlight>
        <br />
        <p>This is a little more complicated config than I used in previous versions of the workshop but this is what I use in my personal projects and what I'd recommend to you. In previous versions of this workshop, I used airbnb and standard. Feel free to check those out; I now find both of them a bit too prescriptive. Linting is a very opinionated subject, so feel free to explore what you like.</p>

<p>This particular configuration has a lot of rules to help you quickly catch common bugs but otherwise leaves you to write code how you want.</p>
<ul className="ml5">
  <li>The import plugin helps ESLint catch commons bugs around imports, exports, and modules in general
</li>
  <li>jsx-a11y catches many bugs around accessibility that can accidentally arise using React, like not having an <code className="f3 bg-beige mid-gray">alt</code> attribute on an <code className="f3 bg-beige mid-gray">img</code> tag.
</li>
  <li>react is mostly common React things, like making sure you import React anywhere you use React.
</li>
  <li>babel-lint allows ESLint to use the same transpiling library, Babel, that Parcel uses under the hood. Without it, ESLint can't understand JSX.
</li>
  <li><code className="f3 bg-beige mid-gray">eslint-plugin-react</code> now requires you to inform of it what version of React you're using. We're telling it here to look at the package.json to figure it out.
</li>
  </ul>
  <br />
  <h2>Babel</h2>
  <p>Babel is a free and open-source JavaScript compiler and configurable transpiler which is commonly used for transpiling ES6.</p>
  <p>Babel was created by Sebastian McKenzien JavaScript Developer @facebook in September of 2014. It was originally called 6to5 but was later renamed to Babel. With the release of Babel 6, the focus turned more towards making Babel pluggable. The default action for Babel in version 6 is not to transform your ES6 to ES5 anymore, but towards making Babel pluggable (Allows you to create plugins to transform your code) so you now have to include various presets. The latest release is Babel 7</p>
  <p className="w50 auto tc"><img src={Babel} className="mr-auto  ml-auto w60 h5" /></p>
  <p></p>
        <br />
        <h2>.gitignore</h2>
        <p>If you haven't already, create a .gitignore at the root of your project to ignore the stuff we don't want to commit. Go ahead and put this in there:</p>
        <p> we're going to take ahold of our own Babel configuration, we need to take over all of it. Parcel won't do it for us anymore. So install the following:</p>
        <br />
        <Highlight language="javascript">
          {`npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`}
          ,
        </Highlight>
        <br />
        <p>Now make a file in the root directory called .babelrc with the following:</p>
        <Highlight language="javascript">
          {`{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}`}
          ,
        </Highlight>
        <p>This will allow us to make ESLint play nice too (Prettier handles this automatically.) Add one line to the top level of your .eslintrc.json:</p>
        <br />
        <Highlight language="javascript">
          {`{
  …
  "parser": "babel-eslint",
  …
}`}
          ,
        </Highlight>
        <br />
        <Highlight language="javascript">
          {`node_modules
.cache/
dist/
.env
.DS_Store
coverage/
.vscode/`}
          ,
        </Highlight>

      </div>
    </div>
  );
};

export default Prettier;
