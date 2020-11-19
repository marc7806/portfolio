import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

export default function ProjectPost({ data }) {
  const project = data.markdownRemark
  let previewImgFluid = project.frontmatter.previewImage.childImageSharp.fluid

  return (
    <Layout>
      <div className="project-post__wrapper">
        <div className="project-post__top-bar">
          <AniLink paintDrip to="/" hex="#316fea">
            &#8249; Back to home
          </AniLink>
          <p className="font-semibold">{project.frontmatter.date}</p>
        </div>
        <div className="mb-3 text-center">
          <h3>{project.frontmatter.title}</h3>
          <br />
          <p className="heading-md">
            {project.frontmatter.technologies.map((technology, index) => (
              <span>
                {" "}
                {index > 0 && <label>&#8226;</label>} {technology}
              </span>
            ))}
          </p>
        </div>
        <Img
          fluid={previewImgFluid}
          alt={project.frontmatter.title}
          className="project__preview--img"
        />

        <div className="mt-3">
          <p dangerouslySetInnerHTML={{ __html: project.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        technologies
        date
        previewImage {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 450) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`
