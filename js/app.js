
const form1 = document.querySelector("#form1")
const input = document.querySelector("#dict")
const new1 = document.querySelector("#new")
const imgs = document.querySelector("#imgs")
const divImg = document.querySelector("#foundImg")
const heading = document.querySelector('#heading')
let foundLink = document.createElement('a')

form1.addEventListener("submit", async (e) => {
    e.preventDefault()
    imgs.src = ""

   const word = input
   const define1 = await searchWord(word.value);
   const wordValue = `${word.value.toUpperCase()}`
   heading.innerText = wordValue
   new1.innerText = `${define1}`
   const data = await searchPhoto(word.value)
   let imgUrl = data.results[0].urls.small
   
   foundLink.textContent = "Download"
   foundLink.href =  data.results[0].links.download
   divImg.append(foundLink)

   imgs.src = imgUrl
   word.value = ""

})

const searchWord = async (word) =>{
   
   const res =  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
   const found = await res.json() 
   console.log(found)
   return found[0].meanings[0].definitions[0].definition

}

const searchPhoto = async (word) => {
   const res =  await fetch(`https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=GVY_UUMfHmH3Gyh0YaLrDJMfXuskKIta_4xa-I8a7UU`)
   const data = await res.json() 
   console.log(data)
   return data

}
