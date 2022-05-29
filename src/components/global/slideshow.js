import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

const SlideShow = ({ images }) => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const slideshowFunction = () => {
      // round robin
      setIndex((index + 1) % images.length)
    }
    const currentInterval = setInterval(slideshowFunction, 8000)

    return () => clearInterval(currentInterval)
  }, [index, images])

  const nav = []

  let circle = isFilled => (
    <svg height="20" width="20">
      <circle
        cx="10"
        cy="11"
        r="3.5"
        stroke="var(--color-black-700)"
        fill={isFilled ? "var(--color-black-700)" : "none"}
      />
    </svg>
  )

  const setImage = idx => {
    setIndex(idx)
  }

  for (let [idx] of images.entries()) {
    nav.push(
      <div
        key={idx}
        onClick={() => setImage(idx)}
        className="cursor-pointer"
        aria-hidden="true"
      >
        {circle(idx === index)}
      </div>
    )
  }

  return (
    <React.Fragment>
      <div className="slideshow">
        <GatsbyImage
          image={images[index].node.childImageSharp.gatsbyImageData}
          alt={images[index].node.base.split(".")[0]}
          className="rounded-md center" />
        <div className="position-absolute slideshow__nav">
          <div className="slideshow__nav--flex">{nav}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SlideShow
