import React from 'react'
import Header from '../components/header/header'
import { Post } from "../components/Post/layout1/Post";
import PageTemplate from '../components/common/PageTemplate';
import posts from "../data/posts.json"
const Home = (props) => {
  const saveUpdates = (post) => {
    const index = posts.findIndex((p) => p.id = post.id)
    posts[index] = post
  }
  const showAllPosts = posts.map((post) => <Post post={post} key={post.id} saveUpdates={saveUpdates} />) 

  return (
    <>
    <Header toggleDarkMode={props.toggleDarkMode}/>
    <PageTemplate>
      {showAllPosts}
    </PageTemplate>
    </>
  )
}


export default Home