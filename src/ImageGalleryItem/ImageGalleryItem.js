import React, { Component } from "react";
import propTypes from "prop-types";

class ImageGalleryItem extends Component {
  static defaultProps = { imageLink: " ", imageAlt: " " };

  static propTypes = {
    imageLink: propTypes.string,
    imageAlt: propTypes.string,
    largeImageURL: propTypes.string,
    modalFn: propTypes.func,
  };

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={(e) => {
            this.props.modalFn(this.props.largeImageURL);
            console.log(e);
          }}
          src={this.props.imageLink}
          alt={this.props.imageAlt}
          // data-large={}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
