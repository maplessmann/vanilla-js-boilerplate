import Link from 'components/Link'

const Header = () => {
  return `
    <header className="header">
      <ul className="nav">
        <li className="item">
          ${Link('Home', '/')}
        </li>
        <li className="item">
          ${Link('About', '/about')}
        </li>
      </ul>
    </header>
  `
}

export default Header
