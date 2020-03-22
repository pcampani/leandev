import React from 'react';
import Container from '@material-ui/core/Container';
import { motion } from 'framer-motion';

import { dummyData } from '../../state/tweetData';
import Footer from "../Footer";
import Tweet from "./Tweet"
import {Wrapper, Heading, pageTransition} from "../Stylesheets";

export default function YComb() {
  let [tweets, setTweets] = React.useState([]);

  const getTweets = () => (setTweets(() => tweets = dummyData()));

  React.useEffect(()=> {
    getTweets();
  },[])
 
  return (
    <motion.div exit='out' animate='in' inital='out' variants={pageTransition}>
        <Container maxWidth='lg'>
          <Heading>YComb</Heading>
          <Wrapper>
            {tweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
          </Wrapper>
        </Container>
        <Footer />
      </motion.div>
    
  )
}