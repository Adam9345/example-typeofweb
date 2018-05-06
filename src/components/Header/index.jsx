//@flow
import React, { Component } from "react";
import "./styles.css";

type Props = {};

class Header extends Component<Props> {
  render() {
    return (
      <div className="container">
        <div className="headerLogoContainer">
          <div>
            <img
              className="headerImg"
              src="https://typeofweb.com/wp-content/uploads/2017/09/typeofweb-facebook-image-sharer.png"
              alt="typeOfWeb"
            />
          </div>
          <div>
            <h2>Lista kontaktów</h2>
          </div>
        </div>
        <div className="containerButtonAdd">
          <button className="buttonAdd">Dodaj</button>
        </div>
      </div>
    );
  }
}

export default Header;
