import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

export default function ProjectPreview({ project }) {
  const {
    frontmatter: {
      previewImage: {
        childImageSharp: { fluid: previewImage },
      },
      mainColor,
    },
  } = project

  return (
    <div className="project__preview">
      <AniLink
        paintDrip
        to={project.fields.slug}
        hex={mainColor}
        activeClassName="header__nav--active"
      >
        <Img
          fluid={previewImage}
          alt={project.frontmatter.title}
          className="project__preview--img"
        />
      </AniLink>
    </div>
  )
}
