function Card({ title, content, author }) {
    return (
      <div className={`card ${title.toLowerCase().replace(/\s/g, '-')}`}>
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
        <span className="card-author">{author}</span>
      </div>
    );
  }
  
  export default Card;
  