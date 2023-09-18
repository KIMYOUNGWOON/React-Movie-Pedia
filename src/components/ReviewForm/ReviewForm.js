import { useState } from 'react';
import './ReviewForm.css';

const initialValue = {
  title: '',
  rating: 0,
  content: '',
};

function ReviewForm() {
  const [reviewData, setReviewData] = useState(initialValue);
  const { title, rating, content } = reviewData;

  function handleInput(e) {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  }

  console.log(reviewData);

  return (
    <form className="ReviewForm">
      <input name="title" type="text" value={title} onChange={handleInput} />
      <input
        name="rating"
        type="number"
        value={rating}
        onChange={handleInput}
      />
      <textarea
        name="content"
        value={content}
        onChange={handleInput}
      ></textarea>
    </form>
  );
}

export default ReviewForm;
