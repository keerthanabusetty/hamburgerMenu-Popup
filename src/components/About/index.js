// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-image-container">
      <img
        className="mobile-about-image"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img"
        alt="about"
      />
      <img
        className="desktop-about-image"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img"
        alt="about"
      />
    </div>
  </div>
)
export default About
