import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.props.counters.filter(c => c.value > 0).length}
        />
        <Counters />
      </React.Fragment>
    );
  }
}

const mapStoreToProps = state => {
  return {
    counters: state.counters
  };
};

export default connect(mapStoreToProps)(App);
