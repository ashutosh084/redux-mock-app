import React,{Component} from 'react';
import './App.css';
import MyScreen from './components/MyScreen';
import ButtonGroup from './components/ButtonGroup';
import {store} from './store';
import { connect } from "react-redux";

class App extends Component {

  state = store.getState();

  render(){
    
    console.log(this.props);
  return (
    <div>
    <MyScreen key={1} tech={this.props.mdata.tech} />
    <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    </div>
    
  );
}
}

const mapStateToProps = state => ({
  mdata: state.datafile,
  mdata1:state
  
});

export default connect(
  mapStateToProps
)((App));

