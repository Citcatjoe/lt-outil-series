import React, { Component } from "react";

class Frame extends Component {

    // handleToggle(e) {
    //     e.preventDefault();
    //     this.setState({
    //         isVisible: !this.state.isVisible,
    //     });
    // }

    render() {
        const isVisible = this.props.isVisible;
        const article = this.props.article;

        
        //console.log(isVisible);
        return (

            <div className={`frame ${isVisible ? 'is-visible' : ''}`}>
            <div class="frame-close"></div>
                {!article ? 'No article selected' : article.text}
            </div>
            
        )
    }

}

// Collapsible.propTypes = {
//     title: PropTypes.string,
// };

export default Frame;