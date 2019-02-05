import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./../styles/global.css"

const Header = ({ siteTitle }) => (

  <div className="header-block">
    <div className="left">
      <a href="/">
        <img src="logo_top.svg" alt="TimeGuard logo" className="logoPrivacy" />
      </a>
    </div>
    <div className="right">
      <ul id="linksPrivacy" className="links_top">
        <li className="dashboard"><Link href="https://web.duefocus.com/login" target="_blank" rel="nofollow noopener">Open dashboard</Link></li>
        <li className="sign_up"><Link href="#">Sign up</Link></li>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
