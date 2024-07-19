import { render, screen } from '@testing-library/react';
import QuoteText from './components/QuoteText';
import QuoteAuthor from './components/QuoteAuthor';

/*
* Checks if the QuoteText component renders the quote text
*/

test('renders quote text', () => {
    render(<QuoteText quote='This is a quote' bgColor='rgba(255, 255, 255)' />);
    const quoteText = screen.getByText(/This is a quote/i);
    expect(quoteText).toBeInTheDocument();
    }
);


/*
* Checks if the QuoteAuthor component renders the quote author
*/

test('renders quote author', () => {
    render(<QuoteAuthor author='Author' bgColor='rgba(255, 255, 255)' />);
    const quoteAuthor = screen.getByText(/Author/i);
    expect(quoteAuthor).toBeInTheDocument();
    }
);

