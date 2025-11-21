import { createContext, useContext, useEffect, useState } from 'react';

const themecontext = createContext();

export const usetheme = () => {
  const context = useContext(themecontext);
  if (!context) {
    throw new Error('usetheme must be used within Themeprovider');
  }
  return context;
};

export const Themeprovider = ({ children }) => {
  const [theme, settheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggletheme = () => {
    settheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <themecontext.Provider value={{ theme, toggletheme }}>
      {children}
    </themecontext.Provider>
  );
};
