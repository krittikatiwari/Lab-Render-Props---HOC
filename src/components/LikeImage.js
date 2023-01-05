import React,{Component} from "react";
import UpdatedComponent from "./withCounter";

class LikeImage extends Component{
  render(){
    const {count, incrementCount}=this.props
    return(
      <button onClick={incrementCount}>
        Like Image {count}
      </button>

    )
  }
}

export default UpdatedComponent(LikeImage)