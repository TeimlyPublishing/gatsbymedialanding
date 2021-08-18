import * as React from 'react'
import {
    container,
  } from './layout.module.css'


const VideosPage = () => {
    return (
            <main>
                <div className={container}>
                <iframe width="auto" height="auto" src="https://www.youtube.com/embed/wr8rbaHUM6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={container}>
                <iframe width="auto" height="auto" src="https://www.youtube.com/embed/wr8rbaHUM6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={container}>
                <iframe width="auto" height="auto" src="https://www.youtube.com/embed/wr8rbaHUM6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </main>
    )
}

export default VideosPage