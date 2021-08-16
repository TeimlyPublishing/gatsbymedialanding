import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
        return ( < div > < div className = { container } >
            <
            title > { pageTitle } < /title>  <
            nav >
            <
            ul >
            <
            li > < Link to = "/" > Home < /Link> </li > , <
            li > < Link to = "/about" > About < /Link> </li > , <
            /ul>  <
            /nav>, <
            main >
            <
            h1 > { pageTitle } < /h1>  <
            br > < /br> <
            p > { children } < /p>  <
            /main> <
            /div> </div >
        ),
    },

    export default Layout