import React from "react";
import {store} from "../store";
import setTechnology from "../action";

const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);

function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech; //will get the data attribute set on the button, data-tech . 
    store.dispatch(setTechnology(tech));// how you dispatch an action in Redux, and setTechnology() 
                                        //   is the action creator we wrote earlier!                                 
}

export default ButtonGroup;