import React, { Component } from "react";
import { connect } from "react-redux";
import {
    changeLeftTop,
    changeLeftDown,
    changeRightTop,
    changeRightDown
} from "../action/action";

class ButtonGroup extends Component {
    render() {
        return (
            <div>
                {this.props.technologies.map((tech, i) => (
                    <button
                        key={`btn-${i}`}
                        onClick={
                            (this.props.side === "leftTop" &&
                                (() => this.props.callChangeLeftTop(tech))) ||
                            (this.props.side === "leftDown" &&
                                (() => this.props.callChangeLeftDown(tech))) ||
                            (this.props.side === "rightTop" &&
                                (() => this.props.callChangeRightTop(tech))) ||
                            (this.props.side === "rightDown" &&
                                (() => this.props.callChangeRightDown(tech)))
                        }
                    >
                        {tech}
                    </button>
                ))}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        callChangeLeftTop: tech => dispatch(changeLeftTop(tech)),
        callChangeLeftDown: tech => dispatch(changeLeftDown(tech)),
        callChangeRightTop: tech => dispatch(changeRightTop(tech)),
        callChangeRightDown: tech => dispatch(changeRightDown(tech))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ButtonGroup);
