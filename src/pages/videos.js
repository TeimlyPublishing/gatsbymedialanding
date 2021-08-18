        // Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Videos from '../components/videos'


// Step 2: Define your component
const VideosPage = () => {
    return (
        <main>
            <h1><Layout pageTitle="HomePage" PageHeading='Videos'></Layout></h1>
                    
            <Videos VideosPage='Videos'></Videos>
                    
        </main>
      
      
    )
  }

// Step 3: Export your component
export default VideosPage