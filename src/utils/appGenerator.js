// src/utils/appGenerator.js
export function generateApps() {
  const apps = [];
  for (let i = 1; i <= 100; i++) {
    apps.push({
      id: `app${i}`,
      name: `App ${i}`,
      code: `
        import React from 'react';
        export default function App${i}() {
          const [counter, setCounter] = React.useState(0);
          return (
            <div style={{padding:'20px'}}>
              <h2>App ${i}</h2>
              <p>Counter: {counter}</p>
              <button onClick={()=>setCounter(counter+1)}>+1</button>
            </div>
          );
        }
      `,
    });
  }
  return apps;
}
