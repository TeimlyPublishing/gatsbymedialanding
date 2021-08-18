import * as React from 'react'
import Layout from '../components/layout'

const GalleryPage = () => {
  return (
    <Layout pageTitle="Video Page" pageHeading='Videos'>
      <iframe width="420" height="345" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/656837876&color=%23292929&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

    </Layout>
  )
}

export default GalleryPage