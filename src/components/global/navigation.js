import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Navigation({ siteTitle, menuLinks }) {
  return (
    <header>
      <div className="header">
        <div className="header__desc">Portfolio</div>

        <div className="header__logo">
          <AniLink paintDrip duration={0.7} to="/" hex="#316fea">
            {siteTitle}
          </AniLink>
        </div>

        <nav className="header__nav">
          <ul>
            {menuLinks.map(link => (
              <li key={link.name}>
                <AniLink
                  paintDrip
                  duration={0.7}
                  to={link.link}
                  hex="#316fea"
                  activeClassName="header__nav--active"
                >
                  {link.name}
                </AniLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
