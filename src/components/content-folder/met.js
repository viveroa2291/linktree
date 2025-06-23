import React from 'react';

const Met = () => {
  return (
    <div>
      <blockquote
        className="snapchat-embed"
        data-snapchat-embed-url="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYdHJxcWFjZ3puAZaczfMMAZaczeBbAAAAAQ/embed"
        data-snapchat-embed-title="I Wanna Be Yours"
        data-snapchat-embed-style="border-radius: 20px; width: 21vw; height: 650px;" // This is the line of code that fixed my error
      ></blockquote>
    </div>
  );
};

export default Met;