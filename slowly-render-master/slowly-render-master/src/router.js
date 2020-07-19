import { render } from './render.js'

let currentRouterView = () => ''
let base = ''

export const createHashRouter = (baseUrl, routes) => {
  base = baseUrl
  const routesMap = new Map() // JS 中 Map 可以实现 LRU 算法
  console.log(routes);
  routes.forEach((route) => {
    routesMap.set(route.path, route.component)//值对值/->home,/about->about
  })

  const go = (path) => {
    if (routesMap.has(path)) {
      window.location.hash = path
    } else throw new Error('url is not exist.')//判断路径是否存在
  }

  const handleHashChange = e => {
    const path = window.location.hash.slice(1) // #/about => /about
    console.log(path)//主页没有/
    currentRouterView = routesMap.get(path ? path : '/') // 处理 url 没有 hash 时当作首页处理，127.0.0.1/ => 127.0.0.1/#/
    render()
  }

  window.addEventListener('load', handleHashChange)
  window.addEventListener('hashchange', () => {
    console.log('hashchange');
    handleHashChange();
  })

  return { go }
}

export const createHistoryRouter = (baseUrl, routes) => {
  // TODO: homework
  base = baseUrl;
  const routesMap = new Map()
  console.log(routes);
  routes.forEach((route) => {
    routesMap.set(route.path, route.component)//值对值/->home,/about->about
  })

  const go = (path) => {
    if (routesMap.has(path)) {
      let state = { about: 'about' }
      history.pushState(state, 'about', window.location.href + path);
      handleHistoryChange();
    } else throw new Error('url is not exist.')//判断路径是否存在
  }

  const handleHistoryChange = e => {
    const path = history.state // #/about => /about
    console.log(path)//主页没有/
    currentRouterView = routesMap.get(path ? `/${path.about}` : '/') // 处理 url 没有 hash 时当作首页处理，127.0.0.1/ => 127.0.0.1/#/
    render()
  }

  window.addEventListener('load', handleHistoryChange)
  window.addEventListener('popstate', handleHistoryChange)
  // window.onpopstate = function () {
  //   console.log('historychange');
  //   handleHistoryChange();
  // }

  return { go }
}

export const RouterView = (props) => currentRouterView(props)
export const RouterLink = (props) => `<a href="${base}${props.url}">${props.text}</a>`
