import React from 'react';
import CompLogo from './../../assets/react-components.jpg';

const Communication = () => (
  <div>
    <h1>Communicate Between Components</h1>
    <p>
      Components are a tool for splitting the page in smaller pieces that are
      easier to manage and reuse. By breaking the page into smaller parts, we
      make their implementation simpler.
    </p>
    <p>
      But at the same time this creates a new challenge: the communication
      between these small parts.
    </p>
    <p>
      There many means for communication at our disposal. In the end, we need to
      choose the one that’s appropriate for our situation.
    </p>
    <p>To sum up, these means of communication are :</p>
    <ul>
      <li>Parent → Child: properties, methods</li>
      <li>Child → Parent: events, callbacks</li>
      <li>
        Child → Child: via parent, domain store, UI store, or global event bus.
        In short, two child components can communicate using their closest
        parent or a shared third object.
      </li>
    </ul>
    <p className="center w50 tc pv2">
      <img src={CompLogo} alt=""></img>
    </p>
    <p>Let's Create a example for demonstration </p>
  </div>
);

export default Communication;
