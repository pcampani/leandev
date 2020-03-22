import React from 'react';
import Container from '@material-ui/core/Container';
import { dummyData } from '../../state/tweetData';
import { motion } from 'framer-motion';

import Tweet from "./Tweet";
import {Wrapper, Heading, pageTransition} from "../Stylesheets";
import Footer from "../Footer";


export default function NewsY() {
  let [tweets, setTweets] = React.useState([]);

  const getTweets = () => (setTweets(() => tweets = dummyData()));

  React.useEffect(()=> {
    getTweets();
  },[])
  
  return (
    <motion.div exit='out' animate='in' inital='out' variants={pageTransition}>
        <Container maxWidth='lg'>
          <Heading>NewsY</Heading>
          <Wrapper>
            {tweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
          </Wrapper>
        </Container>
        <Footer />
      </motion.div>
    
  )

}