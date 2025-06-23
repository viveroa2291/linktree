import React from 'react';

const Planet = () => {
  return (
    <div>
      <blockquote
        className="snapchat-embed"
        data-snapchat-embed-url="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYcGJ5bnJtbWN2AYzXIveaAYzXItlgAAAAAQ/embed"
        data-snapchat-embed-title="🏎️🏎️🏎️"
        data-snapchat-embed-style="border-radius: 20px; width: 21vw; height: 650px;" // This is the line of code that fixed my error
      ></blockquote>
    </div>
  );
};

export default Planet;