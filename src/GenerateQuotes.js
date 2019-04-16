import React from "react";

const GenerateQuotes = ({selectQuote}) => {
    return (
        <div className="GenerateQuotes">
            <button onClick={selectQuote}>Get quote</button>
        </div>
    )
}


export default GenerateQuotes;
