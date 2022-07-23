import React from 'react'
import Header from '../components/header/header'
import { Post } from "../components/Post/layout1/Post";
import PageTemplate from '../components/common/PageTemplate';

const Home = (props) => {
  return (
    
    <>
    <Header toggleDarkMode={props.toggleDarkMode}/>
    <PageTemplate>
      <Post />
    </PageTemplate>
    </>
  )
}

export default Home