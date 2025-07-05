import { LazyLoadImage } from 'react-lazy-load-image-component';
import './BookCard.css';

function BookCard({ book }) {
  return (
    <div className="BookCard">
      <LazyLoadImage
        className="BookImage"
        src={book.image}
        alt={book.name}
        effect="opacity"
      />
      <div className="BookDetails">
        <h3 className="BookTitle">{book.name}</h3>
        <p className="BookAuthor">by {book.author}</p>
        <p className="BookGenre">{book.genre}</p>
      </div>
    </div>
  );
}

export default BookCard;