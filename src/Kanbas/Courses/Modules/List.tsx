import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="wd-button">
        <button className="collapse-all ms-2">Collapse All</button>
        <button className="view-progress ms-2">View Progress</button>
        <button className="publish-all ms-2">
          {/* <select>
            <option>Publish All</option>
            <option>Publish All Modules and Items</option>
            <option>Publish Modules Only</option>
            <option>Unpublish All</option>
          </select> */}
          <FaCheckCircle style={{ color: "green"}}/> Publish All
        </button>
        <button className="module-button ms-2">+ Module</button>
        <button className="ellipsis-button ms-2"><FaEllipsisV/></button>
      </div>
      <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <span className="float-end">
            <button type="button"
              className="btn btn-success" 
              style={{ marginTop: '5px', marginRight: '2.5px', marginLeft: '8px' }}
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
            <button type="button" 
              className="btn btn-dark" style={{ marginTop: '5px', marginLeft: '2.5px' }}
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
          </span>
          <div className="row">
            <input 
              className="form-control"
              style={{ width: "100%", marginBottom: '10px'}}
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
            }/>
            <textarea
              className="form-control"
              style={{ width: "100%" }}
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
            }/>
          </div>
        </li>
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
              <span className="float-end">
                <button type="button" 
                  className="btn btn-danger" 
                  style={{ marginLeft: '5px'}}
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                <button type="button" 
                  className="btn btn-secondary" 
                  style={{ marginLeft: '5px'}}
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
              </span>
            <div className="module-head" style={{ marginBottom: '18px' }}>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson : any, index : number) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;