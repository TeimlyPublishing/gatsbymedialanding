        // Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'



// Step 2: Define your component
const VideosPage = () => {
    return (
      <Layout pageTitle="Videos" PageHeading='YouTube'>
        <div className={container2}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wr8rbaHUM6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={container3}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wr8rbaHUM6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={container4}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wr8rbaHUM6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Layout>
    )
  }

// Step 3: Export your component
export default VideosPage