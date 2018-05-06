//@flow
import React, { Component } from "react";
import Header from "./components/Header";
import ContactsList from "./components/ContactsList";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Header />
        <ContactsList />
      </div>
    );
  }
}

export default App;
