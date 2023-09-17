function ReviewList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return <li>{movie.title}</li>;
      })}
    </ul>
  );
}

export default ReviewList;
