import React from "react";

const DisplayQuotes = ({quote}) => {
    return (
        <div className="displayQuotes">
            <img src={quote.image} alt="quote links"></img>
            <ul>
                <li>{quote.character}</li>
                <li>{quote.quote}</li>
            </ul>
        </div>
    )
}


export default DisplayQuotes;
