import React from 'react';
import { Link } from 'react-router-dom';

import './Pages.css'

function Stats() {
  return (
    <div className="BasePage">
      <h1>Stats</h1>
        <Link to="/books">
          Back to Books
        </Link>
    </div>
  );
}

export default Stats;