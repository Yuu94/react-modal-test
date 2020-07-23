import React from 'react';
import './App.css';
import Timeline from './Timeline';
import Submit from './Submit';

function App() {
  const [tweets, setTweets] = React.useState([
    {
      id: 0,
      icon: '🌽',
      displayName: 'もろこし太郎',
      accountName: 'morokoshi',
      content: '今日も1日もろこしがうまい'
    },
    {
      id: 1,
      icon: '🦐',
      displayName: 'エビデンス',
      accountName: 'evidence',
      content: 'かにみそたべたい'
    }
  ]);

  const submitTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);
  
  return (
    <div>
      <Timeline tweets={tweets}/>
      <Submit submitTweet={submitTweet}/>
    </div>
  );
}

export default App;
