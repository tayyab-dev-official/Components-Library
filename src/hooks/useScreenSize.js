import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenSize.width <= 768;
  const isDesktop = screenSize.width >= 992;
  const isTablet = screenSize.width > 768 && screenSize.width < 992;

  return {
    width: screenSize.width,
    isMobile,
    isTablet,
    isDesktop,
  };
};
