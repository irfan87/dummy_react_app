import React, { Component } from "react";

class FetchRandomUser extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = `https://api.randomuser.me/`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ loading: false, person: data.results[0] });
  }

  render() {
    return (
      <div>
        <h1>Fetch Random User API</h1>
        {this.state.loading || !this.state.person ? (
          <h4>Data is loading. Please wait...</h4>
        ) : (
          <div>
            <img
              src={this.state.person.picture.large}
              alt={this.state.person.name.first}
            />
            <h4>
              {this.state.person.name.title} {this.state.person.name.first}{" "}
              {this.state.person.name.last}
            </h4>
            <hr />
            <div>
              <p>{this.state.person.location.street.number}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FetchRandomUser;
