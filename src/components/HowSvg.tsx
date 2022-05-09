import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import HowSvgLight from '@site/static/img/gitpoap_visuals/how.svg';
import ImageContainer from './ImageContainer';

const HowSvg = () => {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  return (
    <ImageContainer>
      {isDarkTheme ? (
        <img
          src={require('@site/static/img/gitpoap_visuals/how_dark_lg.png').default}
          style={{
            maxWidth: '500px',
            textAlign: 'center',
          }}
        />
      ) : (
        <HowSvgLight
          style={{
            maxWidth: '500px',
            textAlign: 'center',
          }}
        />
      )}
    </ImageContainer>
  );
};

export default HowSvg;
