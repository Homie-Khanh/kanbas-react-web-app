import { FaTachometerAlt, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaLaptopCode, FaArrowAltCircleRight, FaQuestionCircle, FaRegUserCircle } from "react-icons/fa";
import { Link} from "react-router-dom";
import "./index.css";

function Sandwiches() {
    const sandwichlinks = [
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
    return (
        <ul className="wd-kanbas-navigation-sandwich">
            {sandwichlinks.map((link, index) => (
                <li key={index} className="wd-sandwich-list">
                <Link to={`/Kanbas/${link.label}`}> 
                    <div className="wd-sandwich-icon-label">
                        {link.icon} <span className="wd-sandwich-label">{link.label}</span>
                    </div> 
                </Link>
                </li>
            ))}
        </ul>
    );
}
export default Sandwiches;