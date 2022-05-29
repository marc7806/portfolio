import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image";

export default function ProjectPreview({ project }) {
  const {
    frontmatter: {
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
        <GatsbyImage
          image={project.frontmatter.previewImage.childImageSharp.gatsbyImageData}
          alt={project.frontmatter.title}
          className="project__preview--img" />
      </AniLink>
    </div>
  );
}
