import { useState, useEffect, useDebugValue } from 'react';

const useWindowSize = (minWidth, maxWidth) => {
  const [windowSize, setWindowSize] = useState('medium');

  useEffect(() => {
    const updateWindowSize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < minWidth) {
        setWindowSize('small');
      } else if (windowWidth > maxWidth) {
        setWindowSize('big');
      } else {
        setWindowSize('medium');
      }
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, [minWidth, maxWidth]);

  useDebugValue(`Window Size: ${windowSize}`);

  return windowSize;
};

export default useWindowSize;
