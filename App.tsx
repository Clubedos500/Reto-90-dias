import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import SalesPage from './components/SalesPage';
import ThankYouPage from './components/ThankYouPage';

// ScrollToTop component to ensure navigation starts at top of page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/gracias" element={<ThankYouPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;