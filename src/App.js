
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    fullName: "Najwa Tlili",
    bio: "full stack js developer ",
    imgSrc: "....",
    profession: "student ",
  }
  button = () => {
    this.setState({ display: !this.state.display })
  }
  componentDidMount() {
    console.log("Counter Mounted");
    setInterval(() => {this.setState({timer:this.state.timer+1})}, 1000);
}
  render() {

    return (
      <div className="App">
        <div>
          <button onClick={this.button}>{this.state.display ? "Hide" : "Show"}</button>
        
            <div>
              <h1 className='style'>profile </h1>
              
              <h2 className='style1'>fullName: {this.state.fullName} </h2>
              <h2 className='style1'> bio : {this.state.bio}</h2>
              <h2 className='style1'>photo :{this.state.imgSrc} </h2>
              <h2 className='style1'>profession: {this.state.profession} </h2>
            </div>
           
        </div>
        </div>
        )
  
  }
}
        export default App;