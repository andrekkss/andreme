const axios = require("axios").default

const arrayOfObjects = []

async function fetchApi() {
  const response = await axios.get(
    "https://api.github.com/repos/andrekkss/andreme/contents/content/index/articles/"
  )
  response.data.forEach(element => {
    arrayOfObjects.push(element.download_url)
  })
  fetch()
}

const listOfGets = []
function allFetch() {
  console.log("allFecth")
  arrayOfObjects.forEach(element => {
    listOfGets.push(axios.get(element))
  })
}

function fetch() {
  allFetch()
  axios
    .all(listOfGets)
    .then(
      axios.spread((...responses) => {
        responses.forEach(element => {
          console.log(JSON.stringify(element.data, null, 2))
        })
      })
    )
    .catch(errors => {
      // react on errors.
    })
}

fetchApi()
