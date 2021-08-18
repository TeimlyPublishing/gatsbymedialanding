        // Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Videos from '../components/videos'


// Step 2: Define your component
const VideosPage = () => {
    return (
      <Layout pageTitle="Videos" PageHeading='YouTube'></Layout>,
      <Videos></Videos>
    )
  }

// Step 3: Export your component
export default VideosPage