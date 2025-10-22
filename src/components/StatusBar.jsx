import React, { useEffect, useState } from 'react';

function StatusBar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      height:'24px',
      backgroundColor:'#222',
      color:'#fff',
      display:'flex',
      justifyContent:'space-between',
      padding:'0 8px',
      fontSize:'12px'
    }}>
      <span>{time}</span>
      <span>100%</span>
    </div>
  );
}

export default StatusBar;
