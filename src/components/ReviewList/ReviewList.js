import ReviewListItem from '../ReviewListItem/ReviewListItem';

function ReviewList({ movies, onDelete }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <ReviewListItem movie={movie} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
