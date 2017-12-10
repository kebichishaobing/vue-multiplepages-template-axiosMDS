import axios from 'axios'

export const getAxiosPicture = () => {
  let testUrl = '/static/test/hello.json'
  if (process.env.NODE_ENV === 'production') {
    testUrl = '/vueMultiplePages' + testUrl
  }
  return axios.get(testUrl).then(res => {
    return res.data
  })
}
