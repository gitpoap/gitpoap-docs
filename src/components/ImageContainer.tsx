import React from 'react';

const ImageContainer = ({ children }) => (
  <>
    <br />
    <span
      style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </span>
    <br />
  </>
);

export default ImageContainer;
