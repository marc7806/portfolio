import React from "react"
import Navigation from "./global/navigation"
import { graphql, StaticQuery } from "gatsby"
import Helmet from "react-helmet"
import favicon from "../../static/favicon.ico"

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
          title={"Marc S Portfolio"}
          meta={[
            { name: "description", content: "Portfolio website from Marc" },
            {
              name: "keywords",
              content: "portfolio, software, engineering, code, projects",
            },
          ]}
        >
          <link rel="icon" href={favicon} />
        </Helmet>

        <div className="container">
          <Navigation
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          <main className="container--main">{children}</main>
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout
