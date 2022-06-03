import React, { useState } from "react";
// import Time from "../Time/Time";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [burger, setBurger] = useState(true);

  const navLinkStyle = {
    textDecoration: "none",
    fontWeight: "700px",
    fontSize: "1.1rem",
    margin: "0 1px",
  };

  const headerHandler = () => {
    setBurger(!burger);
  };

  return (
    <div>
      <button onClick={headerHandler} type="button" className="calculator-head">
        Calculator ☰
      </button>
      <div
        className="header-main"
        style={{ display: burger ? "block" : "none" }}
      >
        <div className="standerd-types header-section">
          <ul className="header-ul">
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./standerd/"
              >
                Standerd
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./scientific/"
              >
                Scientific
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./dateconversion"
              >
                DateConversion
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./timeconversion/"
              >
                Time Conversion
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./volume/"
              >
                Volume
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./length/"
              >
                Length
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./currency/"
              >
                Currency
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./speed/"
              >
                Speed
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./power/"
              >
                Power
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./angle/"
              >
                Angle
              </NavLink>
            </li>
            <li>
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./pressure/"
              >
                Pressure
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./data/"
              >
                Data
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./energy/"
              >
                Energy
              </NavLink>
            </li>

            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./temperature/"
              >
                Temperature
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink
                style={navLinkStyle}
                className={(navData) =>
                  navData.isActive ? "activated" : "header-item"
                }
                to="./weight/"
              >
                Weight
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div>
        <Time />
      </div> */}
      </div>
    </div>
  );
}

export default Header;
