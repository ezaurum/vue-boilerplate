import store from "@/store"
import { Base64 } from "js-base64"

// 로그인 되어 있는지 체크한다
export const checkAuthenticated = (to, from, next) => {
  try {
    const authenticateRequired = to.meta?.authenticateRequired
    if (!authenticateRequired) {
      next()
      return
    }
    const type = store.state.session?.type || store.state.session?.account?.type
    if (type && type !== "session.type.Anonymous") {
      next()
    } else {
      if (from.name === "Login") {
        console.error("login to self?")
      }
      let nextRoute = {
        name: "Login",
      }
      if (to.path !== "/") {
        nextRoute = {
          ...nextRoute,
          query: { redirect: to.path },
        }
      }
      try {
        next(nextRoute)
      } catch (e) {
        console.error("next", JSON.stringify(nextRoute), e)
      }
    }
  } catch (e) {
    console.error("check auth", e)
  }
}

// 쿠키에서 세션값을 불러온다
// 해당 쿠키값은 클라에만 노출되는 값
export const loadSession = (to, from, next) => {
  try {
    if (!store.state.session && document.cookie) {
      const allCookie = document.cookie
      const ckList = allCookie.split(";")
      const mapped = ckList.reduce((previousValue, currentValue) => {
        const strings = currentValue.split("=")
        previousValue[strings[0].trim()] = strings[1].trim()
        return previousValue
      }, {})
      const mappedElement = mapped["ckc"]
      if (mappedElement) {
        const s = Base64.decode(mappedElement)
        const session = JSON.parse(s)
        store.commit("login", session)
      }
    }
    next()
  } catch (e) {
    console.error("load session", e)
  }
}
