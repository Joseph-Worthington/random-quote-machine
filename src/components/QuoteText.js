import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const QuoteText = ({ quote, bgColor }) => {
  return (
    <div id="text" style={{color: bgColor}} className="text-xl flex gap-3 w-full">
      <div className="text-4xl">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      <p className='pt-2'>{quote}</p>
    </div>
  );
}

export default QuoteText;