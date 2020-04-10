import React, { Fragment, Component } from "react";
import Counter from "./Counter";
// import FetchRandomUser from "./FetchRandomUser";
// import Counter from "./Counter";
// import ImageSlider from "./ImageSlider";
// import ValidationsForm from "./ValidationsForm";
// import DummyForm from "./DummyForm";

class Body extends Component {
  // state = {
  //   visible: true,
  // };

  state = {
    count: 0,
  };

  handleIncrement = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  };

  handleDecrement = () => {
    const { count } = this.state;

    if (count === 0) {
      alert("0 is invalid");
    } else {
      this.setState({
        count: count - 1,
      });
    }
  };

  render() {
    // const { title } = this.props;
    // const { visible } = this.state;

    // const buttonText = visible ? "Hide" : "Show";
    // let imageSlider = visible ? (
    //   <ImageSlider />
    // ) : (
    //   <div className={visible ? "visible" : "hidden"}>
    //     <Counter />
    //     Wanna see the images? just click 'Show'
    //   </div>
    // );

    // if (!visible) {
    //   imageSlider = <div>Nothing to display</div>;
    // }

    return (
      <Fragment>
        {/* <h1>{title}</h1> */}
        <div>
          {/* {imageSlider} */}
          {/* <button
            onClick={() => {
              this.setState({ visible: !visible });
            }}
          >
            {buttonText}
          </button> */}
          {/* <DummyForm /> */}
          {/* <ValidationsForm /> */}
          {/* <FetchRandomUser /> */}
          <Counter
            count={this.state.count}
            increment={this.handleIncrement}
            decrement={this.handleDecrement}
          />
          <hr />
        </div>
      </Fragment>
    );
  }
}

export default Body;
