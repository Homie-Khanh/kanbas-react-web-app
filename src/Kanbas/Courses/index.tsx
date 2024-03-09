import { courses } from "../../Kanbas/Database";
import { Route, Routes, useParams, useLocation, Link, Navigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { FaArrowAltCircleRight, FaBars, FaBook, FaChevronDown, FaGlasses, FaInbox, FaLaptopCode, FaQuestionCircle, FaRegCalendarAlt, FaRegClock, FaRegUserCircle, FaTachometerAlt } from "react-icons/fa";
import { FaHome, FaCodeBranch, FaPlug, FaWindowRestore, FaRocket, FaPeopleArrows, FaBullhorn, FaMailBulk } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Courses() {
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
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
  const chevronslinks = [
    { label: "Home",          icon: <FaHome className="fs-2" />             },
    { label: "Modules",       icon: <FaCodeBranch className="fs-2" />       },
    { label: "Piazza",        icon: <FaPlug className="fs-2" />             },
    { label: "Grades",        icon: <FaWindowRestore className="fs-2" />    },
    { label: "Assignments",   icon: <FaMailBulk className="fs-2" />         },
    { label: "Quizzes",       icon: <FaRocket className="fs-2" />           },
    { label: "People",        icon: <FaPeopleArrows className="fs-2" />     },
    { label: "Announcements", icon: <FaBullhorn className="fs-2" />         },
    { label: "Syllabus",      icon: <FaWindowRestore className="fs-2" />    },
    { label: "Discussions",   icon: <FaMailBulk className="fs-2" />         },
  ];

  return (
    <div>
      <div className="row navbar d-block d-sm-block d-md-none">
          <div className="navbar-header">
            <div className="navbar-left">
              <button className="sandwich" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <FaBars />
              </button>
              <div className="collapse" id="collapseExample">
                <div className="card card-body-sandwich">
                  {sandwichlinks.map((link, index) => (
                      <li key={index} className="sandwich-list">
                        <Link to={`/Kanbas/${link.label}`}> 
                          <div className="sandwich">
                              <span className="sandwich-icon">{link.icon}</span>
                              <span className="sandwich-label">{link.label}</span>
                          </div> 
                        </Link>
                      </li>
                    ))}
                </div>
              </div>
            </div>
            <div className="navbar-middle">
              <div>{course?.number} {course?.section} {course?.semester}</div>
              <div>{pathname.split('/')[4]}</div>
            </div>
            <div className="navbar-right">
            <FaGlasses/>
            <button className="chevron" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
              <FaChevronDown/>
            </button>
            <div className="collapse" id="collapseExample2">
              <div className="card card-body-chevron">
                {chevronslinks.map((link, index) => (
                  <li key={index} className="chevron-list">
                    <Link to={`/Kanbas/Courses/${courseId}/${link.label}`}>
                      <span className="chevron-icon">{link.icon}</span> 
                      <span className="chevron-label">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-display d-none d-sm-none d-md-block">
        <h1 className="course-display-heading">
        <HiMiniBars3 style={{ margin: "10px" }}/> {course?.name} {course?.number} {course?.section} {course?.semester} 
        <IoIosArrowForward style={{ color: "grey" }}/> <span className="page" style={{ color: "black"}}>{pathname.split('/')[4]}</span>
        {/* <div className="student-view-div" style={{ display: "flex"}}>
          <button className="student-view-button"> <FaGlasses className="student-glass"/>Student View</button>
        </div> */}
        </h1>
      </div>
      <hr style={{ border: "1px solid grey", margin: "5px", }}/>
      <div style={{ display: "flex"}}>
      <CourseNavigation />
        <div style={{ width: "100%"}}>
          <div
            className="overflow-y-scroll bottom-0 end-0"
            style={{ left: "320px", top: "50px" }} >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="People" element={<h1>People</h1>} />
              <Route path="Announcements" element={<h1>Announcements</h1>} />
              <Route path="Syllabus" element={<h1>Syllabus</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Courses;