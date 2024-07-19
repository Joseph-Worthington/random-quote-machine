import QuoteText from './QuoteText.js';
import QuoteAuthor from './QuoteAuthor.js';
import QuoteButtons from './QuoteButtons.js';
import { useState, useEffect } from 'react';



const QuoteBox = ({changeBgColor, bgColor}) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  function fetchQuote() {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
      setQuote(data.content);
      setAuthor(data.author);
    });
  }

  useEffect(() => {
    if(quote === '') {
      fetchQuote();
      changeBgColor();
    }
  }, []);
  const handleClick = () => {
    fetchQuote();
    changeBgColor();
  }

  return (
    <div id="quote-box"  className='bg-white w-124 min-h-64 flex justify-center items-center flex-col py-14 px-12 gap-6'>
      <div className='quote flex justify-center items-left flex-col gap-2'>
        <QuoteText quote={quote} bgColor={bgColor}/>
        <QuoteAuthor author={author}  bgColor={bgColor}/>
      </div>
      <QuoteButtons onNewQuoteClick={handleClick} quote={quote} author={author}  bgColor={bgColor}/>
    </div>
  );
}

export default QuoteBox;