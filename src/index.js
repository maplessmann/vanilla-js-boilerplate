import routes from './routes'
import { getCurrentRoute } from 'modules/router'

const renderRoute = () => {
  const root = document.querySelector('#root')
  const route = getCurrentRoute(routes)

  root.innerHTML = route.component()
}

window.addEventListener('hashchange', renderRoute)
window.addEventListener('load', renderRoute)
