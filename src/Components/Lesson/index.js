import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import Home from './Intro';
import Parcel from './parcel';
import Prettier from './Prettier';
import Commun from './Communication';
import Functional from './Functional';
import Tachyons from './Tachyons';

function useRouter() {
  return useContext(__RouterContext);
}

const Lesson = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
      position: 'absolute',
      width: '80%',
      right: '0',
      top: '15rem',
      zIndex: -1,
      transform: 'translate3d(100%,0,0)'
    },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' }
  });

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <div className="Lesson ph2">
        <Switch location={item}>
          <Route exact path="/" component={Home} />
          <Route exact path="/parcel" component={Parcel} />
          <Route exact path="/prettier" component={Prettier} />
          <Route exact path="/communication" component={Commun} />
          <Route exact path="/functional" component={Functional} />
          <Route exact path="/tachyons" component={Tachyons} />
        </Switch>
      </div>
    </animated.div>
  ));
};

export default Lesson;
