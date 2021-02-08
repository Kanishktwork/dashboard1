import "./sidebar.css"
import logo from "../../assets/logo.png"


const sidebar= ({ sidebarOpen, closeSidebar }) => {
    return(
    <div className={sidebarOpen ? "sidebar-resposive" : ""} id="sidebar">
        <div className="sidebar__title">
            <div className="sidebar__img">
                <img src={logo} alt= "logo" />
                <h1>Koders Dashboard</h1>
            </div>

            <i className="fa fa-times"
            id="sidebarIcon"
            onClick={() => closeSidebar()}>
            </i>
        </div>

        <div className="sidebar__menu">
            <div className="sidebar__link active_menu_link">
                <i className="fa fa-home"></i>
                <a href="#">Dashboard</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-user-secret"></i>
                <a href="#">Admin Profile</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-archive"></i>
                <a href="#">Archives</a>
            </div>

            <div className="sidebar__logout">
                <i className="fa fa-power-off"></i>
                <a href="#">Log out</a>
            </div>

        </div>

    </div>

    )

}

export default sidebar;