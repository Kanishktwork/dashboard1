import "./navbar.css";
import avatar from "../../assets/avatar.png";

const navbar = ({sidebarOpen, openSidebar}) => {
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>

            <div className="navbar__left">
                <a href="#">Blogs</a>
                <a className="active_link" href="#">Admin</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    );

};

export default navbar;