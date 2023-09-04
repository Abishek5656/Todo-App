import "./Header.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const Header = () => {
  let navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMouseOver = (index, value) => {
    setActiveIndex(index);
  };

  const tabs = ["all", "active", "completed"];

  const handleClick = (tab) => {
    console.log(tab);
    if (tab === "all") {
      navigate("/");
    } else if (tab == "active") {
      navigate("/active");
    } else if (tab == "completed") {
      navigate("/complete");
    }
  };

  return (
    <div className="header flex__center">
      <div className="header__title">
        <h1>#todo</h1>
      </div>
      <div className="header__tabs">
        {tabs.map((tab, index) => (
          <article key={index} onChange={() => {}}>
            <Button
              onMouseOver={() => {
                handleMouseOver(index, tabs[index]);
              }}
              onClick={() => handleClick(tab)}
            >
              <p>{tab}</p>
            </Button>
            <div className={activeIndex === index ? "tab__active" : ""} />
          </article>
        ))}
      </div>

      <div className="header__line" />
    </div>
  );
};

export default Header;



