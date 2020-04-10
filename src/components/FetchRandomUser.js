import React, { Component } from "react";

class FetchRandomUser extends Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = `https://api.randomuser.me/?results=5`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ loading: false, people: data.results });
  }

  render() {
    return (
      <div>
        <h1>Fetch Random User API</h1>
        {this.state.loading || !this.state.people.length ? (
          <h4>Data is loading. Please wait...</h4>
        ) : (
          <div>
            <ul>
              {this.state.people.map((person) => (
                <li key={person.login.uuid}>
                  <img src={person.picture.large} alt={person.name.first} />
                  <h4>
                    {person.name.title} {person.name.first} {person.name.last}
                  </h4>
                  <p>
                    {person.location.street.number},{" "}
                    {person.location.street.name}, {person.location.city},
                    {person.location.state}, {person.location.country},{" "}
                  </p>
                  <strong>{person.location.postcode}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default FetchRandomUser;
