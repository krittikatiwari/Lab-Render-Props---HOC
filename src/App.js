import './App.css';
import React,{Component} from "react";
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';


class App extends Component {
  render(){
    return (
      <div>
        <h3>Some Blog</h3>
        <div className='buttons'>
          <LikePost/>
          <LikeImage/>
        </div>
      </div>
    );
  }
  
}

export default App;
