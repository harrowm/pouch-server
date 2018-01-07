import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

import Posts from '../components/Posts'

class AsyncApp extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }

  render() {
    const { posts, isFetching } = this.props
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log(posts)
    console.log(isFetching)
    // if (posts == null) return null
    return (
      <div>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 && <Posts posts={posts} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  posts: state.items
});


// function mapStateToProps(state) {
//   const { selectedSubreddit, postsBySubreddit } = state
//   const {
//     isFetching,
//     lastUpdated,
//     items: posts
//   } = postsBySubreddit[selectedSubreddit] || {
//     isFetching: true,
//     items: []
//   }
//
//   return {
//     posts,
//     isFetching
//   }
// }

export default connect(mapStateToProps)(AsyncApp)
