import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SlideShow from "../components/global/slideshow"

export default function ProjectPost({ data }) {
  const {
    markdownRemark: {
      frontmatter: { date, title, technologies, website, mainColor },
      html,
    },
    allFile: { edges: images },
  } = data

  return (
    <Layout>
      <div className="project-post__wrapper">
        <div className="project-post__top-bar">
          <AniLink paintDrip to="/" hex={mainColor}>
            &#8249; Back to home
          </AniLink>
          <p className="font-semibold">{date}</p>
        </div>
        <div className="mb-3 text-center">
          <h3>{title}</h3>
          <br />
          <p className="project-post__technologies">
            {technologies.map((technology, index) => (
              <span key={index}>
                {" "}
                {index > 0 && <em>&#8226;</em>} {technology}
              </span>
            ))}
          </p>
          <br />
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          )}
        </div>
        {images.length > 0 && <SlideShow images={images} />}

        <div className="mt-3 text-block">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $showcaseRegex: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        technologies
        date
        website
        mainColor
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
    allFile(
      filter: {
        absolutePath: { regex: $showcaseRegex }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
      sort: { order: ASC, fields: name }
    ) {
      totalCount
      edges {
        node {
          base
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
