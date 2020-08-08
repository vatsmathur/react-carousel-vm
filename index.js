import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imagePath: 0,
      imageArr:[
      'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'
   ]
    };
  }

changeImage=()=>{
  if(this.state.imagePath<=1){
    this.setState({imagePath: this.state.imagePath+1})
  }
  else{
    this.setState({imagePath: 0});
  }
}
  render() {
    return (
      <div>
        <h2>Image Carousel</h2>
        <p>
          Image {this.state.imagePath+1}
        </p>
        <img src={this.state.imageArr[this.state.imagePath]} onClick={this.changeImage}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
