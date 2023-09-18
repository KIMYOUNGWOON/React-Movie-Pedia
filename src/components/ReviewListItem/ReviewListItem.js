import './ReviewListItem.css';

function ReviewListItem({ movie, onDelete }) {
  function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  function handleDeleteClick() {
    onDelete(movie.id);
  }

  return (
    <div className="ReviewListItem">
      <img
        className="ReviewListItem_img"
        src={movie.imgUrl}
        alt={movie.title}
      />
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.rating}</p>
        <p>{formatDate(movie.createdAt)}</p>
        <p>{movie.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

export default ReviewListItem;
