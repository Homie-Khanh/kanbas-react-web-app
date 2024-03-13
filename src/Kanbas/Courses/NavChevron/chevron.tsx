// import { FaHome, FaCodeBranch, FaPlug, FaWindowRestore, FaRocket, FaPeopleArrows, FaBullhorn, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";

function Chevrons() {
    const chevronslinks = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzes", 
                "People", "Announcements", "Syllabus", "Discussions", ];
    return (
        <ul className="wd-kanbas-navigation-chevron">
            {chevronslinks.map((link, index) => (
                <li key={index} className="wd-chevron-list">
                    <Link to="#"> 
                        <div className="wd-chevron-label">
                            {link}
                        </div> 
                    </Link>
                </li>
            ))}
        </ul>
    );
}
export default Chevrons;