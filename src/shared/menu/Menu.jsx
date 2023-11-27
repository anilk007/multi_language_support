import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/app-form">App Form</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/sample-logger">Sample Logger</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/sample-language-support">Sample Language Support</Link> &nbsp;&nbsp;&nbsp;
        </li>
        {/* Add more menu items for other routes if needed */}
      </ul>
    </div>
  );
}

export default Menu;
