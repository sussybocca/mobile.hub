import React, { useState } from 'react';
import StatusBar from './StatusBar.jsx';
import NavButtons from './NavButtons.jsx';
import AppGrid from './AppGrid.jsx';
import AppStore from './AppStore.jsx';
import SettingsPage from '../pages/SettingsPage.jsx';

// Auto-generate 100 placeholder apps
const autoGenerateApps = (num) => {
  const apps = [];
  for (let i = 1; i <= num; i++) {
    apps.push({
      id: `app${i}`,
      name: `App ${i}`,
      code: () => (
        <div style={{ padding: '20px' }}>
          <h2>App {i}</h2>
          <p>This is the content of App {i}</p>
        </div>
      ),
    });
  }
  return apps;
};

const appStore = autoGenerateApps(100);

function Emulator() {
  const [page, setPage] = useState('home');
  const [installedApps, setInstalledApps] = useState([]);
  const [recentApps, setRecentApps] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleAppClick = (appId) => {
    if (appId !== page) {
      setRecentApps((prev) => [page, ...prev.filter((a) => a !== page)].slice(0, 5));
      setPage(appId);
    }
  };

  const handleInstall = (app) => {
    setInstalledApps((prev) => {
      if (!prev.find((a) => a.id === app.id)) return [...prev, app];
      return prev;
    });
  };

  const handleAutoInstallAll = () => setInstalledApps([...appStore]);

  // Handle uploading a custom "APK"
  const handleInstallCustomApp = (file) => {
    const customApp = {
      id: `custom-${file.name}-${Date.now()}`,
      name: file.name,
      code: () => (
        <div style={{ padding: '20px' }}>
          <h2>{file.name}</h2>
          <p>This is a custom app uploaded by the user.</p>
        </div>
      ),
    };
    handleInstall(customApp);
  };

  // Determine page content
  let content;
  switch (page) {
    case 'home':
      content = <AppGrid installedApps={installedApps} onAppClick={handleAppClick} />;
      break;
    case 'store':
      content = <AppStore appStore={appStore} onInstall={handleInstall} />;
      break;
    case 'settings':
      content = (
        <SettingsPage
          darkMode={darkMode}
          onDarkModeChange={setDarkMode}
          onInstallCustomApp={handleInstallCustomApp}
        />
      );
      break;
    default:
      const AppComponent = installedApps.find((a) => a.id === page)?.code;
      content = AppComponent ? <AppComponent /> : <div style={{ padding: '20px' }}>App not found</div>;
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: '0',
        borderRadius: '0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      <StatusBar darkMode={darkMode} />
      <div style={{ flex: 1, overflowY: 'auto' }}>{content}</div>
      <NavButtons
        onHome={() => setPage('home')}
        onStore={() => setPage('store')}
        onStart={handleAutoInstallAll}
        onRecent={() => recentApps.length && setPage(recentApps[0])}
      />
    </div>
  );
}

export default Emulator;
