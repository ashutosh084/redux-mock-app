import React, { Component } from "react";
import "./App.css";
import RightComponent from "./components/RightComponent";
import LeftComponent from "./components/LeftComponent";

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
                    <LeftComponent />
                    <RightComponent />
                </div>
                <div style={{ width: "50%" }}>
                    <div>
                        <h1 style={{ color: "#ffffff", paddingLeft: "30%" }}>
                            With Saga
                        </h1>
                    </div>
                    <LeftComponent />
                    <RightComponent />
                </div>
            </div>
        );
    }
}

export default App;
