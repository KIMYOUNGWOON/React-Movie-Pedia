import { useEffect, useState } from 'react';
import ReviewList from './components/ReviewList/ReviewList';
import { getReviews } from './api';
import ReviewForm from './components/ReviewForm/ReviewForm';

function App() {
  const [movies, setMovies] = useState([]);
  const [order, setOrder] = useState('createdAt');
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const LIMIT = 6;

  function handleNewestClick() {
    setOrder('createdAt');
  }

  function handleBestClick() {
    setOrder('rating');
    console.log(1);
  }

  function onDelete(targetId) {
    const filteredMovies = movies.filter((movie) => movie.id !== targetId);
    setMovies(filteredMovies);
  }

  async function loadReviews(queryOptions) {
    const { reviews, paging } = await getReviews(queryOptions);

    if (queryOptions.offset === 0) {
      setMovies(reviews);
    } else {
      setMovies((prevMovies) => [...prevMovies, ...reviews]);
    }

    setOffset(queryOptions.offset + reviews.length);
    setHasNext(paging.hasNext);
  }

  function loadMore() {
    loadReviews({ order, offset, limit: LIMIT });
  }

  useEffect(() => {
    loadReviews({ order, offset: 0, limit: LIMIT });
    console.log(2);
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm />
      <ReviewList movies={movies} onDelete={onDelete} />
      {hasNext && <button onClick={loadMore}>더보기</button>}
    </div>
  );
}

export default App;
