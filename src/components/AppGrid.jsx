import React from 'react';

export default function AppGrid({ installedApps, onAppClick }) {
  // Add a Settings app to the grid
  const appsWithSettings = [
    ...installedApps,
    { id: 'settings', name: 'Settings' },
  ];

  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px', padding:'20px', flex:1 }}>
      {appsWithSettings.map(app => (
        <div
          key={app.id}
          style={{
            height:'80px',
            backgroundColor:'#eee',
            borderRadius:'12px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            cursor:'pointer',
            boxShadow:'0 2px 5px rgba(0,0,0,0.2)'
          }}
          onClick={() => onAppClick(app.id)}
        >
          {app.name}
        </div>
      ))}
    </div>
  );
}
