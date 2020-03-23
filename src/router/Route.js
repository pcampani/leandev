import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import NProgress from "nprogress";
import 'nprogress/nprogress.css';

import Navigation from '../components/Navigation';
import Welcome from "../components/Welcome";
import MakeSchool from "../components/Tweets/MakeSchool";
import YComb from "../components/Tweets/YComb";
import NewsY from "../components/Tweets/NewsY";

export default function Router() {

  const location = useLocation();
  const transition = useTransition(location, (location) => location.pathname, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  });

  React.useEffect(()=> {
    NProgress.start();
    NProgress.done();
  },[])

    return(
      <div>
        <Navigation />
        {transition.map(({item, props, key}) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route path="/" exact={true} component={Welcome} />
              <Route path="/makeschool" exact={true} component={MakeSchool} />
              <Route path="/ycomb" exact={true} component={YComb} />
              <Route path="/newsy" exact={true} component={NewsY} />
            </Switch>
          </animated.div>
        ))}
      </div>
    )
    
  }