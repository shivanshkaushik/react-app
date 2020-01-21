import React, {Component} from 'react';


class NameComponent extends Component {
    
    componentDidMount()
    {
        console.log("NameComponent mounted");
    }
render(){
    const {un}=this.props;
  return (
    <div>
     <p style={{fontSize:'20px'}}>{un}</p>
    </div>
  );
}
}
export default NameComponent;
