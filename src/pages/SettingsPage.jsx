import React, { useState, useEffect } from 'react';

function SettingsPage({ darkMode: initialDarkMode, onDarkModeChange, onInstallCustomApp }) {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  const [darkMode, setDarkMode] = useState(initialDarkMode || false);
  const [brightness, setBrightness] = useState(50);
  const [devMode, setDevMode] = useState(false);
  const [customAppFile, setCustomAppFile] = useState(null);

  useEffect(() => {
    onDarkModeChange && onDarkModeChange(darkMode);
  }, [darkMode]);

  const handleCustomAppUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCustomAppFile(file);
      onInstallCustomApp && onInstallCustomApp(file);
      alert(`Custom app "${file.name}" added!`);
    }
  };

  return (
    <div
      style={{
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Settings</h2>

      {/* Basic settings */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" checked={wifi} onChange={() => setWifi(!wifi)} />
          Wi-Fi {wifi ? 'On' : 'Off'}
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" checked={bluetooth} onChange={() => setBluetooth(!bluetooth)} />
          Bluetooth {bluetooth ? 'On' : 'Off'}
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          Dark Mode {darkMode ? 'On' : 'Off'}
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          Brightness: {brightness}%
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
          />
        </label>
      </div>

      {/* Developer settings */}
      <hr style={{ margin: '20px 0' }} />
      <h3>Developer Settings</h3>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" checked={devMode} onChange={() => setDevMode(!devMode)} />
          Enable Developer Mode
        </label>
      </div>

      {devMode && (
        <div style={{ marginTop: '10px' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            Upload Custom App (APK)
            <input type="file" accept=".apk" onChange={handleCustomAppUpload} />
            {customAppFile && <small>Selected: {customAppFile.name}</small>}
          </label>
        </div>
      )}

      <p style={{ marginTop: '30px', fontStyle: 'italic', fontSize: '12px' }}>
        Settings are local to the emulator and browser session.
      </p>
    </div>
  );
}

export default SettingsPage;
