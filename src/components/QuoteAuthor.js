const QuoteAuthor = ({ author, bgColor }) => {
  return (
    <div id="author" className="self-end"  style={{color: bgColor}}>
      <p>- {author}</p>
    </div>
  );
}

export default QuoteAuthor;