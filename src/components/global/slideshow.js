import React from "react"
import Img from "gatsby-image"

const SlideShow = ({ images }) => {
  const [index, setIndex] = React.useState(0)
  const slideshowFunction = () => {
    // round robin
    setIndex((index + 1) % images.length)
  }

  React.useEffect(() => {
    const currentInterval = setInterval(slideshowFunction, 8000)

    return () => clearInterval(currentInterval)
  }, [index])

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

  for (let [idx, value] of images.entries()) {
    nav.push(
      <div key={idx} onClick={() => setImage(idx)} className="cursor-pointer">
        {circle(idx === index)}
      </div>
    )
  }

  return (
    <React.Fragment>
      <div className="slideshow">
        <Img
          fluid={images[index].node.childImageSharp.fluid}
          alt={images[index].node.base.split(".")[0]}
          className="rounded-md center"
          fadeIn={true}
        />
        <div className="position-absolute slideshow__nav">
          <div className="slideshow__nav--flex">{nav}</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SlideShow
