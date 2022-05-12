import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const ImageSwitcher = ({ lightImageSrc, darkImageSrc }) => {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  return <img src={isDarkTheme ? darkImageSrc : lightImageSrc} alt="Example banner" />;
};

export default ImageSwitcher;
