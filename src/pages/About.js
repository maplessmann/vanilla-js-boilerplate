import Header from 'components/Header'

const About = () => {
  return `
    ${Header()}
    <div className="page about">
      <h1>About</h1>
      <p>
        You can find more information on
        <a href="https://github.com/maplessmann/vanilla-js-boilerplate" target="_blank" className="link">GitHub</a>.
      </p>
    </div>
  `
}

export default About
