import "../Styles/Sidebar.css";
import one from "../Media/pexels-becca-correia-8723508.jpg";
import two from "../Media/pexels-nina-hill-13870795.jpg";
import logo from "../Media/logo.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side-nav">
      <div className="home soft">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
      </div>
      <div className="sidebar-container soft">
        <img className="item" src={one} />
        <img className="item" src={two}></img>
      </div>
    </div>
  );
};

export default Sidebar;
