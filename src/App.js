import React, { Component } from 'react';
import GenerateQuotes from "./GenerateQuotes";
import DisplayQuotes from "./DisplayQuotes";
import './App.css';

const testQuote = {
  character : "homer",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  quote : "Hello dude"
}


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      quotes : testQuote
    }
  }


  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=30")
      .then (response  =>  response.json())
      .then(data => {this.setState({quotes: data[0]})});
  }

  render() {
    return (
      <article>
        <GenerateQuotes selectQuote={() => this.getQuote()}/> 
        <DisplayQuotes quote={this.state.quotes}/>
      </article>
    );
  }
}

export default App;
