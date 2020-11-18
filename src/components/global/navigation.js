import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Navigation({ siteTitle, menuLinks }) {
  return (
    <header>
      <div className="header">
        <div className="header__desc">Portfolio</div>

        <div className="header__logo">{siteTitle}</div>

        <nav className="header__nav">
          <ul>
            {menuLinks.map(link => (
              <li key={link.name}>
                <AniLink paintDrip to={link.link} hex="#316fea">
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
