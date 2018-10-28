import React, { Component } from 'react'

class Split extends Component {
  state = {
    runnerID: this.props.runnerID,
    split: this.props.split ? this.props.split : ''
  }
  render() {
    return (
      <div>
        <div>
          {this.state.runnerID} <span>{this.state.split}</span>
        </div>
      </div>  
    )
  }
}

export default Split;