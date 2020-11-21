const Link = (text, href) => {
  return `
    <a href="#${href}" className="link">${text}</a>
  `
}

export default Link
