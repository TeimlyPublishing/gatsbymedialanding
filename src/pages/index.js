// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'



    // Step 2: Define your component
    const HomePage = () => {
        return (
            <main>
                    <Layout pageTitle="HomePage" pageHeading='Heading'>
                        <p>I'm making this by following the Gatsby Tutorial.</p>
                    </Layout>
                    <h1>
                        <Link to='/videos'>Go to Videos</Link>
                        <Link to='/about'>Downloads</Link>
                    </h1>
            </main>

        )
      }
      



// Step 3: Export your component

export default HomePage