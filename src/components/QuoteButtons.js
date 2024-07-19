import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const QuoteButtons = ({ onNewQuoteClick, quote, author, bgColor }) => {
    return (
        <div id="buttons" className="flex justify-between w-full">
            <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 text-xl font-semibold rounded-md shadow focus:outline-none text-white"
                style={{backgroundColor: bgColor}} 
            >
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <button id="new-quote" className="py-2 px-3 text-white text-sm font-semibold rounded-md shadow focus:outline-none"  style={{backgroundColor: bgColor}} onClick={onNewQuoteClick}>New Quote</button>
        </div>
    );
}

export default QuoteButtons;