import React from 'react';

function TweetInput(props) {
    const textareaRef = React.useRef(null);
  
    const sendTweet = React.useCallback(() => {
      if(textareaRef.current) {
        props.addTweet({
          id: new Date().getTime(), // IDはユニークな値にする
          icon: '☠️', // このあたりの値は好きにしてください
          displayName: 'ミスター死',
          accountName: 'mrdeath',
          content: textareaRef.current.value
        });
      }
    }, [textareaRef.current, props.addTweet]);
  
    return (
      <div>
        <div><textarea className="tweet-textarea" ref={textareaRef}></textarea></div>
        <div><button onClick={sendTweet} className="send-tweet">Tweet</button></div>
      </div>
    );
  }

  export default TweetInput;