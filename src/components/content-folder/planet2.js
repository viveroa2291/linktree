import React from 'react';

const Planet2 = () => {
  return (
    <div>
      <blockquote
        className="snapchat-embed"
        data-snapchat-embed-url="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYbmdpZ2pkcHlkAYtua1NbAYtuazrqAAAAAQ/embed"
        data-snapchat-embed-title="🏎️🏎️🏎️"
        data-snapchat-embed-style="border-radius: 20px; width: 21vw; height: 650px;" // This is the line of code that fixed my error
      ></blockquote>
    </div>
  );
};

export default Planet2;