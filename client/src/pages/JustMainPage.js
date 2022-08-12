import React, { useState } from "react";
import Button from "../components/Button/Button";
import Dropdown from "../components/Dropdown/Dropdown";
import Guide from "../components/Guide/Guide";
import MainBanner from "../components/MainBanner/MainBanner";
import Nav from "../components/Nav/Nav";
import OutLineButton from "../components/OutLineButton/OutLineButton";
import SearchBar from "../components/SearchBar/SearchBar";
import "./JustMainPage.css";
const JustMainPage = () => {
  const [selected, setSelected] = useState("Choose");
  return (
    <div className="justMainPage">
      <Nav></Nav>
      <MainBanner></MainBanner>
      <div className="justMainPageTitle">Main Title</div>
      <div className="justMainPageSubTitle">
        Google Fonts is a library of 1,442 open source font families and APIs
        for convenient use via CSS and Android. The library also has delightful
        and beautifully crafted icons for common actions and items. Download
        them for use in your digital products for Android, iOS, and web.
      </div>
      <p className="justMainPageP1">
        Google Fonts is a library of 1,442 open source font families and APIs
        for convenient use via CSS and Android. The library also has delightful
        and beautifully crafted icons for common actions and items. Download
        them for use in your digital products for Android, iOS, and web.
      </p>
      <p className="justMainPageP2">
        Google Fonts is a library of 1,442 open source font families and APIs
        for convenient use via CSS and Android. The library also has delightful
        and beautifully crafted icons for common actions and items. Download
        them for use in your digital products for Android, iOS, and web.
      </p>
      <Guide style={{ top: 750 }} text={"Button Guide"}></Guide>
      <Button style={{ top: 820, left: 40 }}></Button>
      {/* <div className="justMainPageInfo" style={{ top: 880, left: 40 }}>
        Enabled
      </div> */}
      <Button style={{ top: 820, left: 210 }} disabled></Button>
      <OutLineButton style={{ top: 920, left: 40 }}></OutLineButton>
      <OutLineButton style={{ top: 920, left: 210 }} disabled></OutLineButton>
      <Guide style={{ top: 1050 }} text={"Search Bar"}></Guide>
      <SearchBar></SearchBar>
      <Guide style={{ top: 750, left: 750 }} text={"Select Guide"}></Guide>
      <div className="justMainPageSelectTitle">information</div>
      <div className="justMainPageSelectSubTitle">
        Choose the one that applies
      </div>
      <Dropdown
        style={{ position: "absoulute", top: "100px" }}
        selected={selected}
        setSelected={setSelected}
      ></Dropdown>
      <div
        style={{
          position: "absolute",
          top: "1300px",
          width: "100%",
          height: "100px",
        }}
      ></div>
    </div>
  );
};

export default JustMainPage;
