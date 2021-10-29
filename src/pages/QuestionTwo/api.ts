import axios from 'axios'

export const getCardDetails = async (): Promise<any> => {
  const newPromise = new Promise((resolve: any, reject) => {
    axios
      .get('http://localhost:3001/example')
      .then(result => {
        const { title, body, imgSrc } = result.data

        resolve({ title, body, imgSrc })
      })
      .catch(error => reject(error))
  })
  return newPromise
}
