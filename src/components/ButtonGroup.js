import React, { Component } from "react";
import { connect } from "react-redux";
import { changeLeft, changeRight } from "../action/action";

class ButtonGroup extends Component {
    render() {
        return (
            <div>
                {this.props.technologies.map((tech, i) => (
                    <button
                        key={`btn-${i}`}
                        onClick={
                            this.props.side === "left"
                                ? () => this.props.callChangeLeft(tech)
                                : () => this.props.callChangeRight(tech)
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
        callChangeLeft: tech => dispatch(changeLeft(tech)),
        callChangeRight: tech => dispatch(changeRight(tech))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ButtonGroup);
