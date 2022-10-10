/* eslint-disable no-underscore-dangle */

import React from 'react';
import { formatDistance } from 'date-fns';

const TweetList = ({ tweetList, onNewLikeSubmit }) => {
  return (
    <section className="tweets-wrapper">
      {tweetList.map((tweet) => {
        return (
        // eslint-disable-next-line no-underscore-dangle
          <div className="tweet-box" key={tweet._id}>
            <h4 className="message-box">{tweet.message}</h4>
            <div className="like-time-box">
              <div className="like-container">
                <button
                  className={tweet.hearts === 0 ? 'button-no-likes' : 'button-likes'}
                  type="button"
                  onClick={() => onNewLikeSubmit(tweet._id)}>
                  <span className="heart">🧡</span>
                </button>
                <p className="heart-counter">x {tweet.hearts}</p>
              </div>
              <p className="time-stamp">
                {formatDistance(new Date(tweet.createdAt), Date.now(), { addSuffix: true })}
              </p>
            </div>
          </div>
        )
      })}
    </section>
  );
}
export default TweetList;