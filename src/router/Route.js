import React from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import NProgress from "nprogress";
import 'nprogress/nprogress.css';

//import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Welcome from "../components/Welcome";
import MakeSchool from "../components/Tweets/MakeSchool";
import YComb from "../components/Tweets/YComb";
import NewsY from "../components/Tweets/NewsY";

export default function Router() {

  React.useEffect(()=> {
    NProgress.start();
    NProgress.done();
  })

    return(
      <BrowserRouter >
      <div>
        <Navigation />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch>
            <Route path="/" exact={true} component={Welcome} />
            <Route path="/makeschool" exact={true} component={MakeSchool} />
            <Route path="/ycomb" exact={true} component={YComb} />
            <Route path="/newsy" exact={true} component={NewsY} />
          </Switch>
        </AnimatePresence>
      </div>
      </BrowserRouter>
    )
    
  }