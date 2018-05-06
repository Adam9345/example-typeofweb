//@flow
import React, { Component } from "react";
import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import { connect } from "react-redux";
import { contactsFetched } from "./actions";

type Props = {
  contactsFetched: Function,
  contacts: Array<Object>
};

class App extends Component<Props> {
  componentDidMount() {
    this.fetchContacts();
  }

  async fetchContacts() {
    const response = await fetch(
      "https://randomuser.me/api/?format=json&results=10"
    );

    const json = await response.json();

    this.props.contactsFetched(json.results);
  }

  render() {
    const { contacts } = this.props;

    return (
      <div>
        <Header />
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default connect(
  state => ({
    contacts: state.contacts
  }),
  { contactsFetched }
)(App);
