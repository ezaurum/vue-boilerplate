import axios from "axios"
import { Service } from "axios-middleware"
import { currentTime } from "@/lib/time"
import route from "@/route"

const HTTP = axios.create({
  baseURL: `${process.env.VUE_APP_API_SERVER_HOST}/${process.env.VUE_APP_API_VERSION}`,
  withCredentials: true,
})

const s = new Service(HTTP)
s.register({
  onResponseError(error) {
    const request = error.response.config
    const response = error.response
    const status = response.status
    if (status < 400) {
      return
    }
    const bugData = {
      error: JSON.stringify(response.data),
      // eslint-disable-next-line @typescript-eslint/camelcase
      request_url: request.url,
      // eslint-disable-next-line @typescript-eslint/camelcase
      request_param: request.data,
      // eslint-disable-next-line @typescript-eslint/camelcase
      happens_at: currentTime(),
    }
    switch (status) {
      case 400:
        console.log("bad request")
        break
      case 401:
        alert("need login")
        console.log("need login")
        route.push("/login")
        break
      case 403:
        alert("need authority")
        console.log("authority required")
        break
      case 404:
        // 각 페이지에서 처리
        console.error("not found")
        break
      case 409: // 각 페이지에서 처리
        console.log("duplicated")
        break
      default:
        HTTP.post(`/bugs`, bugData).then(({ data }) => {
          console.log(data)
        })
        alert("error")
        break
    }
    throw error
  },
})

export default HTTP
