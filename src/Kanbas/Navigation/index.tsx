import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaLaptopCode, FaArrowAltCircleRight, FaQuestionCircle } from "react-icons/fa";

function KanbasNavigation() {
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-2" />        },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />        },
        { label: "Courses",   icon: <FaBook className="fs-2" />                 },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" />       },
        { label: "Inbox",     icon: <FaInbox className="fs-2" />                },
        { label: "History",   icon: <FaRegClock className="fs-2" />             },
        { label: "Studio",    icon: <FaLaptopCode className="fs-2" />           },
        { label: "Commons",   icon: <FaArrowAltCircleRight className="fs-2" />  },
        { label: "Help",      icon: <FaQuestionCircle className="fs-2" />       },
    ];
    const { pathname } = useLocation();

    return (
        <ul className="wd-kanbas-navigation d-none d-sm-none d-md-block">
            <li className="logo">
                <Link to={'https://www.northeastern.edu/'}>
                    <div className="wd-icon">
                        <img className="nu-logo" src="/images/NU.png" alt="img"/>
                    </div>
                </Link>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                <Link to={`/Kanbas/${link.label}`}> 
                    <div className={pathname.includes("Account") ? "wd-icon-account" : "wd-icon"}>
                        {link.icon}
                    </div>
                    <div className={pathname.includes("Account") ? "wd-label-account" : "wd-label"}>
                        {link.label}
                    </div> </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;