import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import GithubLogo from "../images/svg/github_logo.svg"

export default function About({ data }) {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
      name,
    },
  } = data

  return (
    <Layout>
      <div className="about">
        <h3>About me</h3>
        <GatsbyImage image={gatsbyImageData} alt={name} className="about__img" />
        <div>
          <p className="heading-md">
            My name is Marc and I am currently studying Computer Science at the
            Technical University Ingolstadt. My interests are programming and
            software architecture design. My goal is to create software that
            inspires and supports people in their daily life.
          </p>
        </div>
        <div className="about__links">
          <div className="about__links--icon">
            <a
              href="https://github.com/marc7806"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`{
  file(name: {regex: "/about/"}, extension: {regex: "/(jpg)|(png)|(jpeg)/"}) {
    childImageSharp {
      gatsbyImageData(width: 200, height: 200, layout: CONSTRAINED)
    }
    name
  }
}
`
