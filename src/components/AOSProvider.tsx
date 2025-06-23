'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // Changed from true to false to allow re-animation
      mirror: true, // Changed from false to true to animate again when scrolling back up
      offset: 100,
    });

    // Refresh AOS when route changes
    const handleRouteChange = () => {
      AOS.refresh();
    };

    // Add event listener for route changes
    window.addEventListener('routeChangeComplete', handleRouteChange);
    
    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
}
