import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  startEvent = () => {
    //TODO:
    //call api function
  }

  restartEvent = () => {

  }


  render() {
    //console.log('yo', this.props)
    return (
      <div>
        <div> 
          Home
        </div>
        <div> 
          {this.props.startTime !== null
            ? null
            : <button className='start-race-button'>
                Start Race
              </button>
          }

          <button className='select-checkpoint-button'>
            Select Checkpoint
          </button>
          
          {this.props.startTime !== null
            ? null
            : <button className='edit-event-button'>
                Edit Event
              </button>
          }
          
          {this.props.startTime === null
            ? null
            : <button className='restart-race-button'>
                Restart Race  
              </button>
          }
          
        </div>
      </div>
    )
  }
}

/* Needs access to store.event and store.authedUser*/
function mapStateToProps ({ event }) {
  /*
  return {
    ...event,
    startTime: null
  }*/
  return event
}

export default connect(mapStateToProps)(Home);