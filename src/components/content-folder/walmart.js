import React from 'react';

const Walmart = () => {
  return (
    <div>
      <blockquote
        className="snapchat-embed"
        data-snapchat-embed-url="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYanFxdHRtemRjAYi3PiTfAYi3PiIyAAAAAQ/embed"
        data-snapchat-embed-title="@adx305's Sound"
        data-snapchat-embed-style="border-radius: 20px; width: 21vw; height: 650px;" // This is the line of code that fixed my error
      ></blockquote>
    </div>
  );
};

export default Walmart;