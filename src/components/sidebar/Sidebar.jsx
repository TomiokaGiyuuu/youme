import './Sidebar.css'
import {RssFeed, Chat, People, AccountCircle, Audiotrack} from "@mui/icons-material";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <AccountCircle className="sidebarIcon"/>
                        <span className="sidebarItemText">My Profile</span>
                    </li>
                    <li className="sidebarItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarItemText">News</span>
                    </li>
                    <li className="sidebarItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarItemText">Chat</span>
                    </li>
                    <li className="sidebarItem">
                        <People className="sidebarIcon"/>
                        <span className="sidebarItemText">Friends</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarForFriends">
                    <li className="sidebarFriend">
                        <img src="/assets/humans/PngItem_319691.png" alt="" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">Tomioka Giyuu</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;