import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import { Router, Link } from "@reach/router";

import Info from "./Home/Info";
import Contacto from "./Home/Contacto";
import Help from "./Home/Help";
import User from "./Home/User";

const ProfilePage = () => {
  // Asigna un user para leer el contexto del tema actual.
  // React encontrará el Provider superior más cercano y usará su valor.
  const user = useContext(UserContext);

  const { photoURL, displayName, email } = user;
  console.log(" Usuario ProfilePage : " + displayName + " - " + email);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              WebSiteName
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Sucursales</Link>
            </li>
            <li>
              <Link to="contacto">Contactanos</Link>
            </li>
            <li>
              <Link to="user">User</Link>
            </li>
            <li>
              <Link to="help">Help</Link>
            </li>
            <Link to="">
              <button
                className="btn btn-danger"
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </button>
            </Link>

            <li
              style={{
                color: "white",
                marginTop: "20px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              {" "}
              {displayName}
            </li>

            <li
              style={{
                color: "white",
                marginTop: "20px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              {" "}
              | <span style={{ marginLeft: "10px" }}></span> {email}{" "}
            </li>

            <li
              className="float-right"
              style={{
                background: `url(${
                  photoURL ||
                  "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
                })  no-repeat center center`,
                backgroundSize: "cover",
                height: "45px",
                width: "45px",
                marginTop: "2px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            ></li>
          </ul>
        </div>
      </nav>
      <Router>
        <Info exact path="/" />
        <Contacto exact path="contacto" />
        <Help exact path="help" />
        <User exact path="user" />
      </Router>
    </div>
  );
};

export default ProfilePage;
