import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "28",
        name: "John",
        description: "Web Development",
        course: "CS4550",
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
    const MODULE_URL = "http://localhost:4000/a5/module"

    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);
    
    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment" className="btn btn-primary">
                Get Assignment
            </a>
            <h4>Retrieving Properties</h4>
            <a href="http://localhost:4000/a5/assignment/title" className="btn btn-primary">
                Get Title
            </a>
            <h4>Modifying Properties</h4>
            <input type="text" 
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                value={assignment.title}/>
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`} className="btn btn-primary">
                Update Title
            </a>
            <h3>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                    ...assignment, title: e.target.value })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} className="btn btn-primary">
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} className="btn btn-success">
                Fetch Assignment
            </button>
            <h4>Get Module</h4>
            <a href={`${MODULE_URL}`} className="btn btn-primary">
                Get Module
            </a>
            <h4>Get Module Name</h4>
            <a href={`${MODULE_URL}/name`} className="btn btn-primary">
                Get Module Name
            </a>
            <h4>Update Module Name</h4>
            <input type="text" 
                onChange={(e) => setModule({ ...module, name: e.target.value })}
                value={module.name}/>
            <a href={`${MODULE_URL}/name/${module.name}`} className="btn btn-primary">
                Update Name
            </a>
            <h4>Update Assignment Score</h4>
            <input type="number" 
                onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
                value={assignment.score}/>
            <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`} className="btn btn-primary">
                Update Score
            </a>
            {/* ASK TA */}
            <h4>Check for Completed Assignment</h4>
            <input type="checkbox" 
                onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
                checked={assignment.completed}/>
            <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`} className="btn btn-primary">
                Update Completed
            </a>
            <h4>Update Module Description</h4>
            <input type="text" 
                onChange={(e) => setModule({ ...module, description: e.target.value })}
                value={module.description}/>
            <a href={`${MODULE_URL}/description/${module.description}`} className="btn btn-primary">
                Update Description
            </a>
        </div>
    );
}
export default WorkingWithObjects;