import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

import BookCard from "../BookCard/BookCard";
import BookOptions from '../BookOptions/BookOptions';
import BookList from './BookList';
import './BooksContainer.css';

function BooksContainer () {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = ["Reading", "Wishlist", "Completed"];
  const [selection, setSelection] = useState(options[0]);
  const selectOption = (option) => {
    setSelection(option);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/books/status?value=${selection}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchData();
  }, [selection]);

  return (
    <div className="BooksContainer">
      <BookOptions options={options} selection={selection} selectOption={selectOption}/>
      {loading || error ? 
        <div className="TempContainer">
          {loading ?
            <BeatLoader
              color="#4169E1"
              size={35}
              aria-label="BeatLoader"
              data-testid="BeatLoader"
            /> :
            error}
        </div> :
        <BookList data={data}/>
      }
    </div>
  );
}

export default BooksContainer;