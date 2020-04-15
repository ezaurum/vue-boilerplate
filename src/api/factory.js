import HTTP from "@/api/default"
import qs from "querystring"

export function APISet(featureURL) {
  const get = async acID => {
    const { data } = await HTTP.get(`/${featureURL}/${acID}`)
    return data
  }

  const create = async create => {
    const { data } = await HTTP.post(`/${featureURL}`, create)
    return data
  }

  const remove = async acID => {
    const { data } = await HTTP.delete(`/${featureURL}/${acID}`)
    return data
  }

  const update = async update => {
    const { data } = await HTTP.put(`/${featureURL}/${update.id}`, update)
    return data
  }

  const list = async query => {
    // id.asc or id.desc,created_at.asc
    //OrderBy     string `json:"order_by" query:"o"`
    //QueryString string `json:"query_string" query:"q"`
    // qt=name,position
    //QueryTarget string `json:"query_target" query:"qt"`
    //Start       int    `json:"start" query:"s"`
    //Limit       int    `json:"limit" query:"l"`
    const q = qs.encode(query)
    const { data } = await HTTP.get(
      q ? `/${featureURL}?${q}` : `/${featureURL}`,
    )
    return data
  }

  const bulkAction = async bulk => {
    const { data } = await HTTP.patch(`/${featureURL}`, bulk)
    return data
  }

  return { bulkAction, create, get, remove, update, list }
}

export const EventRequiredAPISet = featureURL => {
  const list = async eventID => {
    const { data } = await HTTP.get(`/${featureURL}?event_id=${eventID}`)
    return data
  }

  const listByPageSlug = async eventID => {
    const { data } = await HTTP.get(`/${featureURL}?page_slug=${eventID}`)
    return data
  }

  const create = async create => {
    const { data } = await HTTP.post(
      `/${featureURL}?event_id=${create.event_id}`,
      create,
    )
    return data
  }

  const createWithSlug = async (create, slug) => {
    const { data } = await HTTP.post(`/${featureURL}?page_slug=${slug}`, create)
    return data
  }

  const upload = async (eventID, file) => {
    const d = new FormData()
    d.append("file", file)
    const { data } = await HTTP.put(
      `/${featureURL}.xlsx?event_id=${eventID}`,
      d,
    )
    return data
  }

  const download = eventID => {
    const url = `${process.env.VUE_APP_API_SERVER_HOST}/v2/${featureURL}.xlsx?event_id=${eventID}`
    window.open(url, "_blank")
  }
  return {
    ...APISet(featureURL),
    download,
    upload,
    list,
    create,
    listByPageSlug,
    createWithSlug,
  }
}
