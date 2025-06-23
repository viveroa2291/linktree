import React, { useEffect, useState } from 'react';

const Planet2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  useEffect(() => {
    // Create and append the script
    const script = document.createElement('script');
    script.src = 'https://www.snapchat.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    const mediaQuery = window.matchMedia('(max-width: 800px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);
    const embedStyle = `border-radius: 20px; width: ${isMobile ? '100vw' : '21vw'}; height: 650px;`
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