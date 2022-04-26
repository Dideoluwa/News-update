//https://gnews.io/api/v4/search?q=wizkid&token=6ad4161893ca83bd5bb69478a1ef9f0c&lang=enlet form = document.querySelector('.form')
let input = document.querySelector('input')
let form = document.querySelector('.form')
let card = document.querySelector('.card')
let card2 = document.querySelector('.card-2')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    let userInput = input.value
    let news = await axios.get(`https://gnews.io/api/v4/search?q=${userInput}&token=6ad4161893ca83bd5bb69478a1ef9f0c&lang=en`)
    // console.log(news)
    card.innerHTML = ''
    card2.innerHTML = ''
    fetchedNews(news.data.articles)
    let all = news.data.articles
    if (all.length === 0) {
        card.append('Search not found')
    }
    input.value = ''
})

let fetchedNews = (source) => {
    for (let result of source) {
        let img = document.createElement('img')
        img.classList.add('img-edit')
        let para = document.createElement('p')
        para.innerText = result.content
        para.classList.add('heading3')
        let para3 = document.createElement('p')
        para3.innerText = `Published: ${result.publishedAt}`
        para3.classList.add('heading3')
        let para2 = document.createElement('p')
        para2.innerText = result.description
        para2.classList.add('heading2')
        let para1 = document.createElement('p')
        para1.classList.add('heading')
        para1.innerText = result.title
        img.src = result.image
        let button = document.createElement('p')
        let link = document.createElement('a')
        link.href = result.url
        link.innerText = 'Read more'
        link.target = '_blank'
        card2.classList.add('card2-edit')
        card2.append(para1)
        card2.append(para3)
        card2.append(img)
        card2.append(para2)
        card2.append(para)
        button.append(link)
        card2.append(button)
        card.append(card2)
    }
}