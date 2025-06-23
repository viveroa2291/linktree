import React, { useEffect, useState } from 'react';

const Airport = () => {
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
        data-snapchat-embed-url="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYd3Bldm5xaG1mAY930gKJAY930d3OAAAAAQ/embed"
        data-snapchat-embed-title="You Know How We Do It"
        data-snapchat-embed-style={embedStyle} // This is the line of code that fixed my error
      ></blockquote>
    </div>
  );
};

export default Airport;