import React, { Component } from "react";
import "./App.css";
import LeftTopComponent from "./components/LeftTopComponent";
import LeftDownComponent from "./components/LeftDownComponent";
import RightTopComponent from "./components/RightTopComponent";
import RightDownComponent from "./components/RightDownComponent";

class App extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    background: "#435368",
                    width: "100vw",
                    height: "100vh"
                }}
            >
                <div style={{ width: "50%" }}>
                    <div>
                        <h1 style={{ color: "#ffffff", paddingLeft: "30%" }}>
                            Without Saga
                        </h1>
                    </div>
                    <LeftTopComponent />
                    <LeftDownComponent />
                </div>
                <div style={{ width: "50%" }}>
                    <div>
                        <h1 style={{ color: "#ffffff", paddingLeft: "30%" }}>
                            With Saga
                        </h1>
                    </div>
                    <RightTopComponent />
                    <RightDownComponent />
                </div>
            </div>
        );
    }
}

export default App;
