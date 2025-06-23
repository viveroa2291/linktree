import React from 'react';

const Umbrella = () => {
  return (
    <div>
      <blockquote
        className="snapchat-embed"
        data-snapchat-embed-url="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYd2poY2VoaGd1AYkisUj9AYkisUEKAAAAAQ/embed"
        data-snapchat-embed-title="@adx305's Sound"
        data-snapchat-embed-style="border-radius: 20px; width: 21vw; height: 650px;" // This is the line of code that fixed my error
      ></blockquote>
    </div>
  );
};

export default Umbrella;