import React, { Component } from "react";
import Parser from 'html-react-parser';
import { render } from 'react-dom';

class Frame extends Component {

  // hantableeToggle(e) {
  //     e.preventDefault();
  //     this.setState({
  //         isVisible: !this.state.isVisible,
  //     });
  // }

  render() {
    const isVisible = this.props.isVisible;
    const article = this.props.article;

    if (!article) {
      return null
    }

    console.log(isVisible);
    return (
      // petite structure header-body-footer, on est pas obligés de garder bien sur
      <div className={`frame ${isVisible ? 'is-visible' : ''}`}>
        <div className='header'>
          <img src={article.np8_main_media} alt={article.title} />
          <div className="frame-close"></div>
          <h2 className="frame-title">{!article ? 'No article selected' : article.title}</h2>
          <table>
            <tr><td className="key">Genre</td><td>{article.lt_tv_show_genre}</td></tr>
            <tr><td className="key">Distributeur</td><td>{article.lt_distributor}</td></tr>
          </table>
        </div>
        <div className='body'>
          <div className='author'>
            Par <a href="https://www.letemps.ch/#auteur-etc">{article.np8_author_ref}</a>
          </div>
          <div>{Parser(article.body)}</div>
        </div>
        <div className='footer'>
        </div>
      </div>

    )
  }

}

// Collapsible.propTypes = {
//     title: PropTypes.string,
// };

export default Frame;
