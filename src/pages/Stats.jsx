import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
  return (
    <div className="p-4">
      <h1>Stats</h1>
        <Link to="/books">
          Back to Books
        </Link>
    </div>
  );
}

export default Stats;