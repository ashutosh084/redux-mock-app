import React ,{Component} from 'react';

class MyScreen extends Component{

    render(){
        
        return(
            <div>{this.props.tech}</div>
        )
    }
}

export default MyScreen;