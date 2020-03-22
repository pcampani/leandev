import React from 'react';
import Container from '@material-ui/core/Container';
import { dummyData } from '../../state/tweetData';

import Header from '../Header';
import Tweet from "./Tweet";
import {Wrapper, Heading } from "../Stylesheets";
import Footer from "../Footer";


export default function NewsY() {
  let [tweets, setTweets] = React.useState([]);

  const getTweets = () => (setTweets(() => tweets = dummyData()));

  React.useEffect(()=> {
    getTweets();
  },[])
  
  return (
    <div>
        <Header />
        <Container maxWidth='lg'>
          <Heading>NewsY</Heading>
          <Wrapper>
            {tweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
          </Wrapper>
        </Container>
        <Footer />
      </div>
    
  )

}