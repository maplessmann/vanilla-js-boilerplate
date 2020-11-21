export const navigate = (path) => {
  if (path) {
    document.location.hash = path
  }
}

export const getCurrentRoute = (routes) => {
  const urlPath = document.location.hash.slice(1).toLowerCase() || '/'
  const currentRoute = ({ path }) => path === urlPath

  return Object.values(routes).find(currentRoute)
}
