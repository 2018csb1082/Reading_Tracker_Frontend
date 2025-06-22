import { useState } from "react";

import './BookOptions.css';

function BookOptions ({options, selection, selectOption}) {

  return (
    <div className="BookOptionsContainer">
      {options.map((option) =>
        selection === option ? (
          <div className="BookOptionTab selected" onClick={() => selectOption(option)} key={option}>
            {option}
          </div>
        ) : (
          <div className="BookOptionTab" onClick={() => selectOption(option)} key={option}>
            {option}
          </div>
        )
      )}
    </div>
  );
}

export default BookOptions;