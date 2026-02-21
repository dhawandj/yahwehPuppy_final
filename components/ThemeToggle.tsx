
import React, { useState, useEffect } from 'react';

const PALETTES = [
  { 
    name: 'Sunset Orange', 
    primary: '#f97316', 
    hover: '#ea580c', 
    light: '#fff7ed', 
    border: '#ffedd5', 
    shadow: 'rgba(249, 115, 22, 0.2)',
  },
  { 
    name: 'Royal Indigo', 
    primary: '#6366f1', 
    hover: '#4f46e5', 
    light: '#f5f3ff', 
    border: '#e0e7ff', 
    shadow: 'rgba(99, 102, 241, 0.2)',
  },
  { 
    name: 'Lush Emerald', 
    primary: '#10b981', 
    hover: '#059669', 
    light: '#f0fdf4', 
    border: '#dcfce7', 
    shadow: 'rgba(16, 185, 129, 0.2)',
  },
  { 
    name: 'Classic Blue', 
    primary: '#3b82f6', 
    hover: '#2563eb', 
    light: '#eff6ff', 
    border: '#dbeafe', 
    shadow: 'rgba(59, 130, 246, 0.2)',
  },
];

const SURFACES = [
  { name: 'Pure White', bg: '#ffffff', border: '#f1f5f9' },
  { name: 'Orange Mist', bg: '#fffaf5', border: '#fff1e6' },
  { name: 'Soft Peach', bg: '#fff7ed', border: '#ffedd5' },
  { name: 'Citrus Glow', bg: '#fffcf0', border: '#fef3c7' },
  { name: 'Amber Tint', bg: '#fffbeb', border: '#fef3c7' },
  { name: 'Warm Sand', bg: '#fdf2f2', border: '#fce7e7' },
];

const ThemeToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePalette, setActivePalette] = useState('Sunset Orange');
  const [activeSurface, setActiveSurface] = useState('Pure White');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedPalette = localStorage.getItem('yahwehfarm_palette') || 'Sunset Orange';
    const savedSurface = localStorage.getItem('yahwehfarm_surface') || 'Pure White';
    // const savedDarkMode = localStorage.getItem('yahwehfarm_darkmode') === 'true';
    const savedDarkMode = localStorage.getItem('yahwehfarm_darkmode') !== 'false';

    const palette = PALETTES.find(p => p.name === savedPalette) || PALETTES[0];
    const surface = SURFACES.find(s => s.name === savedSurface) || SURFACES[0];

    applyPalette(palette);
    setIsDarkMode(savedDarkMode);
    setActiveSurface(surface.name);
    setActivePalette(palette.name);
    
    // Initial application
    updateThemeVariables(savedDarkMode, surface);
  }, []);

  const updateThemeVariables = (dark: boolean, surface: typeof SURFACES[0]) => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      // Remove inline surface overrides in dark mode to let CSS variables take over
      root.style.removeProperty('--bg-main');
      root.style.removeProperty('--bg-surface');
      root.style.removeProperty('--border-main');
      root.style.removeProperty('--card-bg');
    } else {
      root.classList.remove('dark');
      // Apply surface overrides in light mode
      root.style.setProperty('--bg-main', surface.bg);
      root.style.setProperty('--bg-surface', surface.bg);
      root.style.setProperty('--border-main', surface.border);
      root.style.setProperty('--card-bg', '#ffffff');
    }
  };

  const applyPalette = (palette: typeof PALETTES[0]) => {
    const root = document.documentElement;
    root.style.setProperty('--primary', palette.primary);
    root.style.setProperty('--primary-hover', palette.hover);
    root.style.setProperty('--primary-light', palette.light);
    root.style.setProperty('--primary-border', palette.border);
    root.style.setProperty('--primary-shadow', palette.shadow);
    setActivePalette(palette.name);
    localStorage.setItem('yahwehfarm_palette', palette.name);
  };

  const applySurface = (surface: typeof SURFACES[0]) => {
    setActiveSurface(surface.name);
    localStorage.setItem('yahwehfarm_surface', surface.name);
    updateThemeVariables(isDarkMode, surface);
  };

  const toggleDarkMode = (dark: boolean) => {
    setIsDarkMode(dark);
    localStorage.setItem('yahwehfarm_darkmode', dark.toString());
    const surface = SURFACES.find(s => s.name === activeSurface) || SURFACES[0];
    updateThemeVariables(dark, surface);
  };

  return (
    <div className="fixed left-4 bottom-8 sm:left-8 sm:bottom-8 z-[110]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-800 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-all active:scale-90"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-slate-900 backdrop-blur-lg border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 w-64 sm:w-72 animate-in slide-in-from-bottom-2 fade-in duration-200">
          <div className="flex items-center justify-between mb-4 px-1">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Appearance</h4>
            <button 
              onClick={() => toggleDarkMode(!isDarkMode)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                isDarkMode ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {isDarkMode ? (
                <><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg> Light</>
              ) : (
                <><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg> Dark</>
              )}
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Primary Color</h5>
              <div className="grid grid-cols-2 gap-2">
                {PALETTES.map((palette) => (
                  <button
                    key={palette.name}
                    onClick={() => applyPalette(palette)}
                    className={`flex items-center gap-2.5 p-2 rounded-xl transition-all border ${
                      activePalette === palette.name 
                        ? 'bg-primary/5 border-primary/20 ring-1 ring-primary/20' 
                        : 'bg-slate-50 dark:bg-slate-800/50 border-transparent hover:border-slate-200 dark:hover:border-slate-700'
                    }`}
                  >
                    <div 
                      className="w-4 h-4 rounded-full shrink-0 shadow-sm" 
                      style={{ backgroundColor: palette.primary }}
                    />
                    <span className={`text-[10px] font-bold truncate ${activePalette === palette.name ? 'text-primary' : 'text-slate-500'}`}>
                      {palette.name.split(' ')[1]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Surface Color</h5>
              <div className="grid grid-cols-2 gap-2">
                {SURFACES.map((surface) => (
                  <button
                    key={surface.name}
                    onClick={() => applySurface(surface)}
                    className={`flex items-center gap-2.5 p-2 rounded-xl transition-all border ${
                      activeSurface === surface.name 
                        ? 'bg-primary/5 border-primary/20 ring-1 ring-primary/20' 
                        : 'bg-slate-50 dark:bg-slate-800/50 border-transparent hover:border-slate-200 dark:hover:border-slate-700'
                    }`}
                  >
                    <div 
                      className="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-200" 
                      style={{ backgroundColor: surface.bg }}
                    />
                    <span className={`text-[10px] font-bold truncate ${activeSurface === surface.name ? 'text-primary' : 'text-slate-500'}`}>
                      {surface.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
