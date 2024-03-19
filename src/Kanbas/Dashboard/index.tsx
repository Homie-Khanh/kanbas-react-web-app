import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { courses } from "../Database";
import * as db from "../Database";
function Dashboard( 
    { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse } : {
    courses: any[]; 
    course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    deleteCourse: (course: any) => void;
    updateCourse: () => void; }) 
  {
  return (
    <div className="p-4 d-block">
      <h1>Dashboard</h1>    
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />  
      <input value={course.section} className="form-control"
             onChange={(e) => setCourse({ ...course, section: e.target.value }) } />
      <input value={course.semester} className="form-control"
             onChange={(e) => setCourse({ ...course, semester: e.target.value }) } />         
      <button type="button" className="btn btn-success" style={{ marginTop: '5px', marginRight: '2.5px' }} onClick={addNewCourse} >
        Add
      </button>
      <button type="button" className="btn btn-dark" style={{ marginTop: '5px', marginLeft: '2.5px' }} onClick={updateCourse} >
        Update
      </button>
      <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 350 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 180 }} alt="card-img"/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    <span className="float-end">
                      <button type="button" className="btn btn-secondary" style={{ marginLeft: '5px'}}
                        onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                        Edit
                      </button>
                      <button type="button" className="btn btn-danger" style={{ marginLeft: '5px'}}
                        onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                        Delete
                      </button>
                    </span>
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;