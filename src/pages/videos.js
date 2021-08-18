        // Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Videos from '../components/videos'


// Step 2: Define your component
const VideosPage = () => {
    return (
        <main>
        <h1><Layout pageTitle="videos" PageHeading='YouTube'></Layout></h1>
            <p>
                <Link to='/videos'>Go to Videos</Link>
                <Link to='/about'>Downloads</Link>
            </p>
                <div>
                    <Videos VideosPage='Videos'></Videos>
                </div>
        </main>
      
      
    )
  }

// Step 3: Export your component
export default VideosPage