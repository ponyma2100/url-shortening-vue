// GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html

import { ref } from "vue"

const base = 'https://api.shrtco.de/v2/shorten?url='
let shortUrl = ref('')

const getLink = () => {

  const shortenUrl = async (url) => {
    let originUrl = `${base + url}`

    try {
      let res = await fetch(originUrl)
      let data = await res.json()

      shortUrl.value = data.result.short_link

    } catch (error) {
      console.log(error)
    }
    return shortUrl
  }

  return { shortenUrl, shortUrl }
}

export default getLink