function Card({ title, content, author }) {
    return (
      <div className="card">
        <a className="card-title">{title}</a>
        <a className="card-content">{content}</a>
        <a className="card-author">{author}</a>
      </div>
    );
  }
  
  export default Card;
  