import React from 'react';

const Airport = () => {

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
        data-snapchat-embed-url="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYd3Bldm5xaG1mAY930gKJAY930d3OAAAAAQ/embed"
        data-snapchat-embed-title="You Know How We Do It"
        data-snapchat-embed-style={embedStyle} // This is the line of code that fixed my error
      ></blockquote>
    </div>
  );
};

export default Airport;