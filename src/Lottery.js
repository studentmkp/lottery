import React, {Component} from 'react';
import Ball from './Ball'

class Lottery extends Component {
  static defaultProps = {
    title: '樂透',
    numBall: 7,
    maxNum: 49
  }
  constructor(props){
    super(props);
    this.state = { nums: Array.from({length: this.props.numBall })};
    this.handleClick = this.handleClick.bind(this);
  }

  generate(){
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) +1
      )
    }));
  }

  handleClick(){
    this.generate()
  }

  render(){
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => <Ball num={n}/>)}
        </div>
        <button onClick={this.handleClick}>來一組樂透號碼！</button>
      </section>
    )
  }
}

export default Lottery;