import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import searchNormal from "../../assets/search-normal.png";
import searchActive from "../../assets/search-active.png";
const SearchBar = () => {
  const ref = useRef();
  const [active, setActive] = useState(false);
  useEffect(() => {
    const focusListener = (event) => {
      setActive(true);
    };
    const blurListener = (event) => {
      setActive(false);
    };

    ref.current.addEventListener("focus", focusListener);
    ref.current.addEventListener("blur", blurListener);
    return () => {
      ref.current.removeEventListener("focus", focusListener);
      ref.current.removeEventListener("blur", blurListener);
    };
  }, [ref]);

  return (
    <div className="searchBarPosition">
      <div
        className="searchBarWrapper"
        style={{ border: active && "1px solid #2D63EC" }}
      >
        <input ref={ref} className="searchBar" />
        <img
          className="searchBarIcon"
          src={active ? searchActive : searchNormal}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default SearchBar;
