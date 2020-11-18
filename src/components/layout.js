import React from "react"
import Navigation from "./global/navigation"
import { graphql, StaticQuery } from "gatsby"
import Helmet from "react-helmet"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={"Marc Stm Portfolio"}
          meta={[
            { name: "description", content: "Portfolio website from Marc" },
            {
              name: "keywords",
              content: "portfolio, software, engineering, code, projects",
            },
          ]}
        />

        <div className="container">
          <Navigation
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          {children}
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout
