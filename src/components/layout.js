import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const HomePage = ({ pageTitle, pageHeading, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/videos" className={navLinkText}>
              VIDEOS
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={pageHeading}>{pageTitle}</h1>
        <p>LIsten To these new</p>
        {children}
      </main>

    </div>
  )
}

export default HomePage