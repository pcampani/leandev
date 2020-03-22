import React from 'react';
import Container from '@material-ui/core/Container';

import Header from '../Header';
import Tweet from "./Tweet";
import { dummyData } from '../../state/tweetData';
import Footer from "../Footer";
import {Wrapper, Heading, pageTransition} from "../Stylesheets";



export default function MakeSchool() {
  
  let [tweets, setTweets] = React.useState([]);

  const getTweets = () => (setTweets(() => tweets = dummyData()));

  React.useEffect(()=> {
    getTweets();
  },[])
  
    return (
      <div>
         <Header />
        <Container maxWidth='lg'>
          <Heading>MakeSchool</Heading>
          <Wrapper>
            {tweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
          </Wrapper>
        </Container>
        <Footer />
      </div>
      
    )
}
