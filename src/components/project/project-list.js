import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProjectPreview from "./project-preview"

const ProjectList = () => (
  <StaticQuery
    query={graphql`
      query AllProjects {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "Project" } } }
        ) {
          totalCount
          edges {
            node {
              html
              frontmatter {
                type
                title
                technologies
                previewImage {
                  childImageSharp {
                    fluid(maxWidth: 750, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                      ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                  }
                }
                date
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div className="project__wrapper">
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <ProjectPreview key={index} project={node} />
          ))}
        </div>
      </React.Fragment>
    )}
  />
)

export default ProjectList
