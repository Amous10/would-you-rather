import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import Tweet from './Tweet'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
        dashboard
        </ul>
      </div>
    )
  }
}

// function mapStateToProps ({ tweets }) {
//   return {
//     tweetIds: Object.keys(tweets)
//       .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
//   }
// }

// export default connect(Dashboard)
export default Dashboard