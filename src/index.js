
// console.log(data);
const cards = document.querySelector('.cards')


data.forEach(element => {
    const card = document.createElement('li')
    card.style.listStyle = 'none'
    card.setAttribute('class', 'card')
    cards.append(card)
    const h2El = document.createElement('h2')
    card.append(h2El)
    h2El.setAttribute('class', 'card--title')
    const imgEl = document.createElement('img')
    card.append(imgEl)
    imgEl.setAttribute('class', 'card--img')
    h2El.innerText = element.name
    imgEl.src = element.sprites.other["official-artwork"].front_default
    imgEl.alt = 'Pokèmon'
    element.stats.forEach(stat => {
        const liEl = document.createElement('li')
        card.append(liEl)
        liEl.setAttribute('class', 'card--text')
        liEl.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
    })
    const pEl = document.createElement('p')
        pEl.setAttribute('class', 'card--text')
        card.append(pEl)
        pEl.style.display = 'block'
        pEl.innerText = 'GAMES APPEREANCE:'
    element.game_indices.forEach(game => {
        pEl.style.width = 'auto'
        const p2El = document.createElement('p')
        p2El.setAttribute('class', 'card--text')
        card.append(p2El)
        p2El.style.display = 'inline-block'
        p2El.innerText = `${game.version.name}`
    })
})


// console.log(data[0]);
