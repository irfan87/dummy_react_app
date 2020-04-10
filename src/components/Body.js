import React, { Fragment, Component } from "react";
import FetchRandomUser from "./FetchRandomUser";
// import Counter from "./Counter";
// import ImageSlider from "./ImageSlider";
// import ValidationsForm from "./ValidationsForm";
// import DummyForm from "./DummyForm";

class Body extends Component {
  state = {
    visible: true,
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
          <FetchRandomUser />
          <hr />
        </div>
      </Fragment>
    );
  }
}

export default Body;
