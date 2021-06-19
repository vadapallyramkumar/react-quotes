import React, { useState } from 'react'
import allQuotes from './Quotes.json';
import './Quotes.css'

function Quotes() {

    const [quote, setquote] = useState('Strive not to be a success, but rather to be of value.')
    const [author, setauthor] = useState('Albert Einstein');

    const generateQuote = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1
        console.log(randomNumber)
        let newQuote = allQuotes.quotes[randomNumber].quote;
        let author = allQuotes.quotes[randomNumber].author;
        setauthor(author);
        setquote(newQuote);
    }

    const backgroundColor = {
        background: "#d7d7d7"
    }

    return (
        <div className="quotesLayer">
            <div style={backgroundColor}>
                <h4 className="quoteStyle">{quote}</h4>
                <p className="author">Author - {author}</p>
                <button className="btn btn-sm quoteBtn" onClick={generateQuote}>New Quote</button>
            </div>
        </div>
    )
}

export default Quotes
