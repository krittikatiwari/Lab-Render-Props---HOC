import React,{Component} from "react";
import UpdatedComponent from "./withCounter";

class LikePost extends Component{
  render(){
    const {count, incrementCount}=this.props
    return(
      <button onClick={incrementCount}>
        Like Post {count}
      </button>

    )
  }
}

export default UpdatedComponent(LikePost)