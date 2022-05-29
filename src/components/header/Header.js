import React from "react";
// import Time from "../Time/Time";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyle = {
    textDecoration: "none",
    fontWeight: "700px",
    fontSize: "1.1rem",
    margin: "0 1px",
  };

  return (
    <div>
      <h4 className="header-heading">Calculator</h4>
      <div className="header-main">
        <div className="standerd-types header-section">
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./standerd/"
          >
            Standerd
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./scientific/"
          >
            Scientific
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./dateconversion"
          >
            DateConversion
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./time/"
          >
            Time
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./volume/"
          >
            Volume
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./length/"
          >
            Length
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./currency/"
          >
            Currency
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./speed/"
          >
            Speed
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./power/"
          >
            Power
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./angle/"
          >
            Angle
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./pressure/"
          >
            Pressure
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./data/"
          >
            Data
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./energy/"
          >
            Energy
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./temperature/"
          >
            Temperature
          </NavLink>
          <NavLink
            style={navLinkStyle}
            className={(navData) =>
              navData.isActive ? "activated" : "header-item"
            }
            to="./weight/"
          >
            Weight
          </NavLink>
        </div>
        {/* <div>
        <Time />
      </div> */}
      </div>
    </div>
  );
};

export default Header;
