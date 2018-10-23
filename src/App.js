import React, { Component } from 'react';
import './App.scss';
import "./components/frame.scss";
import MovieCards from "./components/movieCards.js";
import Frame from "./components/frame";
// import { throws } from 'assert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false, // DEBUG / false
      article: null
    };
    this.showFrame = this.showFrame.bind(this);
    this.seeArticle = this.seeArticle.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('http://web.tcch.ch/tv-test/') //     // https://www.letemps.ch/tv-shows
    .then( (response) => {
      return response.json() })
    .then( (json) => {
      this.setState({data: json, isLoading: false});
    }).catch(function() {
        console.log("Error when loading json");
    });
  };

  seeArticle(article) {
    this.setState({ article: article });
    this.showFrame()
  }


  showFrame() {
    this.setState((state, props) => ({
      isVisible: true
    }));
  }

  hideFrame() {
    this.setState((state, props) => ({
      isVisible: false
    }));
  }

  render() {

    return (
      <div className="App">
        <aside>
          <div>
            <MovieCards
              data={this.state.data}
              showData={this.seeArticle}
              numberOfCards='one'
              additionalClasses='stackable stuff yolo'
            />
          </div>
        </aside>
        <main>
          <div className="main-header" />
          {/* <div class="main-content">
          </div> */}
        </main>

        <Frame isVisible={this.state.isVisible} article={this.state.article} />
      </div>
    );
  }
}

export default App;
