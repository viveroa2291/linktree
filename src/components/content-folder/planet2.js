import React, { useEffect } from 'react';

const Planet2 = () => {
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
    const embedStyle = `border-radius: 20px;
                    height: 650px;
                    box-sizing: border-box;
                    @media(max-width: 850px) {
                      width: 100vw;
                    };`
  return (
    <div>
      <blockquote
        className="snapchat-embed"
        data-snapchat-embed-url="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYbmdpZ2pkcHlkAYtua1NbAYtuazrqAAAAAQ/embed"
        data-snapchat-embed-title="🏎️🏎️🏎️"
        data-snapchat-embed-style={embedStyle}
      ></blockquote>
    </div>
  );
};

export default Planet2;