import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import "./components/frame.scss";
import Frame from "./components/frame";
import { throws } from 'assert';

const articles = [
  {
    image: "punisher.jpg",
    title: "Punisher",
    text: "blablablablabla"
  },
  {
    image: "avatar.jpg",
    title: "Avatar",
    text: "ké ké ké ké ké ké ké"
  },
  {
    image: "Battlestar.jpg",
    title: "Battlestar Galactica",
    text: "Piou Piou Piou Piou Piou"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      article: null
    };
    this.showFrame = this.showFrame.bind(this);
  }

  seeArticle(article_index) {
    this.setState({ article: articles[article_index] });
    this.showFrame();
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
    const itemListing = articles.map((article, index) => (
      <article key={index} onClick={this.seeArticle.bind(this, index)}>
        <img src="{article.image}" />
        <div class="article-bottom">{article.title}</div>
      </article>
    ));

    return (
      <div className="App">
        <aside>
          <div className="aside-header">
            <button onClick={this.showFrame} />
            {itemListing}
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
