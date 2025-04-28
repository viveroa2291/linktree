import React, { useEffect } from 'react';

const Homeless = () => {
  useEffect(() => {
    // Create and append the script
    const script = document.createElement('script');
    script.src = 'https://www.snapchat.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <blockquote
        className="snapchat-embed"
        data-snapchat-embed-url="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYYnVpam5xYmJoAYo4VHrQAYo4VHpUAAAAAQ/embed"
        data-snapchat-embed-title="@adx305's Sound"
        data-snapchat-embed-style="border-radius: 20px; width: 21vw; height: 650px;" // This is the line of code that fixed my error
      ></blockquote>
    </div>
  );
};

export default Homeless;