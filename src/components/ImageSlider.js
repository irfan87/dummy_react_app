import React, { Component } from "react";

class ImageSlider extends Component {
  state = {
    images: [
      "https://i.pinimg.com/236x/b6/21/07/b62107d70659823c6f409480f7435d14--watercolor-food-watercolor-print.jpg",
      "https://i.pinimg.com/236x/8a/61/c1/8a61c1ca0d1a20db922aa5e3a8493d0e--watercolour-flowers-watercolor-ideas.jpg",
      "https://i.pinimg.com/236x/86/d6/46/86d646ce2f92efd7890843ef5af9e700.jpg",
      "https://i.pinimg.com/236x/f6/4d/d7/f64dd7eb8df298195d61569b9634f982--watercolor-sketch-watercolor-kiwi.jpg",
    ],
    id: 0,
  };

  handleNextImage = () => {
    const { id } = this.state;

    this.setState(
      {
        id: id + 1,
      },
      () => {
        console.log(id);
      }
    );
  };

  handlePreviousImage = () => {
    const { id } = this.state;

    this.setState(
      {
        id: id - 1,
      },
      () => {
        console.log(id);
      }
    );
  };

  render() {
    const { id, images } = this.state;
    return (
      <div>
        <h1>Image Slider Component</h1>
        <div>
          <button onClick={this.handlePreviousImage}>Previous</button>
          <img
            style={{
              width: 100,
              height: 100,
            }}
            src={images[id]}
            alt={id + 1}
          />
          <button onClick={this.handleNextImage}>Next</button>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
