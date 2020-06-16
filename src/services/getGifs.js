const apiKey = 'XLJpuabV4LYDFiyXixAnLkMnBmZFjlIr'


export default function getGifs({keyword = 'morty'} = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=G&lang=en`
    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if (Array.isArray(data)) {
          const gifs = data.map(image => {
              const {images, title, id} = image
              const { url } = images.downsized_medium
            //   console.log(images.downsized_medium)
              return { title, id, url}
          })
          return gifs
      }
    })
}