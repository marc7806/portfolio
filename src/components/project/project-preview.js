import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

export default function ProjectPreview({ project }) {
  let featuredImgFluid = project.frontmatter.previewImage.childImageSharp.fluid

  return (
    <div className="project__preview">
      <AniLink
        paintDrip
        to={project.fields.slug}
        hex="#316fea"
        activeClassName="header__nav--active"
      >
        <Img
          fluid={featuredImgFluid}
          alt={project.frontmatter.title}
          className="project__preview--img"
        />
      </AniLink>
    </div>
  )
}
