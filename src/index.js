
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
    imgEl.src = element.sprites.front_default
    imgEl.alt = 'Pokèmon'
    imgEl.style.width = '256px'
    element.stats.forEach(stat => {
        const liEl = document.createElement('li')
        card.append(liEl)
        liEl.setAttribute('class', 'card--text')
        liEl.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
    })

    

});
// console.log(data[0]);
