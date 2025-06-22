import { useState } from "react";

import BookOptions from '../BookOptions/BookOptions';
import './BooksContainer.css';

function BooksContainer () {
  const options = ["Reading", "Wishlist", "Completed"];
  const [selection, setSelection] = useState(options[0]);
  const selectOption = (option) => {
    setSelection(option);
  }
  return (
    <div className="BooksContainer">
      <BookOptions options={options} selection={selection} selectOption={selectOption}/>
      Books
    </div>
  );
}

export default BooksContainer;