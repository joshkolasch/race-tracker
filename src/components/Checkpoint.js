import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSelectCheckpoint } from '../actions/checkpoint'


class Checkpoint extends Component {
  state = {
    checkpointInput: ''
  }

  handleInputChange = (e) => {
    const { value, name } = e.target
    this.setState(() => ({
      [name]: value
    }))
  }

  isValidCheckpoint = () => {
    const { checkpointInput } = this.state
    console.log('valid?', checkpointInput)

    if(checkpointInput >= 1 && checkpointInput <= this.props.numCheckpoints){
      return true
    }
    return false
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const checkpointID = this.state.checkpointInput;
    console.log('checkpointID', checkpointID);
    //Redirect to Splits Table
    this.props.dispatch(handleSelectCheckpoint(checkpointID))
  }

  render() {
    const { checkpointInput } = this.state

    return (
      <div>
        {console.log('props yo', this.props)}
        <div className='page-header'>
          Select Checkpoint
        </div>
        <form className='checkpoint-form' onSubmit={this.handleSubmit}>
          <input 
            value={this.checkpointInput}
            onChange={this.handleInputChange}
            name='checkpointInput'
            type='text' 
            className='input' />
          <button className='btn' type='submit' disabled={!this.isValidCheckpoint()}>
            Select
          </button>
        </form>
        
      </div>
    )
  }
}


//TODO: this might not be necessary because I can pass the event portion of the store to the api 
//inside of dispatch in the /actions folder
function mapStateToProps({ event }) {
  return {...event}
}

export default connect(mapStateToProps)(Checkpoint);