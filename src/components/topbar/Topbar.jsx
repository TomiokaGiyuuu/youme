import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Tomioka</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="search"/>
                    <input placeholder="Search for friends" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsNoneIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/humans/kindpng_142137.png" alt="" className="topbarImg"/>
            </div>
        </div>
    );
};

export default Topbar;