import { RouteConfig, RoutePropsFunction } from "vue-router/types/router"

export interface RouteConfigAdv extends RouteConfig {
  messageKeys?: any
  login?: boolean
}

export const r = ({
  name,
  path,
  component,
  login,
  props,
  messageKeys,
  meta,
}: RouteConfigAdv) => {
  meta = meta || {}
  if (login) {
    meta.authenticateRequired = true
  }

  if (!messageKeys) {
    let title = path
      .replace(/^\//, "title.")
      .replace(/\//, ".")
      .replace(/:(.*)ID/, "modify")
    const number = title.lastIndexOf(".")
    if (number < 6) {
      title = title + ".list"
    }
    messageKeys = { title: title, submit: "submit.default" }
  }
  meta.messageKeys = messageKeys

  // params는 props에 다 넣는다
  const propsType = typeof props
  if (!props) {
    props = route => ({ messageKeys, ...route.params })
  } else if (propsType === "function") {
    const p = props as RoutePropsFunction
    props = route => ({
      messageKeys,
      ...route.params,
      ...p(route),
    })
  } else if (propsType === "object") {
    props = route => ({
      messageKeys,
      ...route.params,
      ...Object(props),
    })
  } else if (propsType === "string") {
    const idValue = String(props)
    switch (idValue) {
      case "me":
        props = route => ({
          messageKeys,
          ...route.params,
          id: "me",
        })
        break
      case "new":
        props = route => ({
          messageKeys,
          ...route.params,
          id: "new",
        })
        break
      default:
        props = route => {
          const id = route.params[idValue]
          return {
            messageKeys,
            ...route.params,
            id: id,
          }
        }
        break
    }
  }

  return {
    name: name,
    meta: meta,
    props: props,
    path: path,
    component: component,
  }
}

export const rr = (list: RouteConfig[], props?: Record<string, any>) => {
  return list.map(elem => {
    if (props) {
      elem = {
        ...elem,
        ...props,
      }
    }
    return r(elem)
  })
}
