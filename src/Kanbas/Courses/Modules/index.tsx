import React, { useState } from "react";
import ModulesControls from "./ModulesControl";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const addModule = () => {
    setModules([...modules, {
      _id: new Date().getTime().toString(),
      name: moduleName, course: cid, lessons: []
    }]);
    setModuleName("");
    const deleteModule = (moduleId: string) => {
      setModules(modules.filter((m: { _id: string; }) => m._id !== moduleId));
    };
    const editModule = (moduleId: string) => {
      setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
    };
    const updateModule = (module: any) => {
      setModules(modules.map((m) => (m._id === module._id ? module : m)));
    };


  };
  return (
    <div>
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule} />
      {modules.map((module) => (
        <div key={module._id}>
          <ModuleControlButtons
            moduleId={module._id}
            deleteModule={deleteModule}
            editModule={editModule}
          />
          <BsGripVertical className="me-2 fs-3" />
          {!module.editing && module.name}
          {module.editing && (
            <input
              className="form-control w-50 d-inline-block"
              onChange={(e) => updateModule({ ...module, name: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateModule({ ...module, editing: false });
                }
              }}
              defaultValue={module.name}
            />
          )}
          </div>
      ))}
          <ul id="wd-modules" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                Week 1 </div>
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  LEARNING OBJECTIVES </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  Introduction to the course </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  Learn what is Web Development </li>
                <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
                <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
              </ul>
            </li>
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  LEARNING OBJECTIVES </li>
                <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
                <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
              </ul>
            </li>
          </ul> </div>
      );
}
