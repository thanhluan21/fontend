import React from 'react';

function Dashboard() {
  const htmlContent = `
    <html>
      <head>
        <title>My HTML File</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
        <p>This is my HTML file.</p>
      </body>
    </html>
  `;

  return (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} />
  );
}

export default Dashboard;