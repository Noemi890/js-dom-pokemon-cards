
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
    const pokeName = `${element.name.substring(0, 1).toUpperCase()}${element.name.substring(1)}`
    h2El.innerText = pokeName
    
    let images = [element.sprites.other["official-artwork"].front_default, element.sprites.other.dream_world.front_default]
    let currentImageIndex = 0
    console.log(images)

    const imgEl = document.createElement('img')
    card.append(imgEl)
    imgEl.setAttribute('class', 'card--img')
    imgEl.src = images[0]
    imgEl.alt = 'Pokèmon'
    
    imgEl.addEventListener('click', () => {
        if (currentImageIndex < (images.length-1)) {
            currentImageIndex++
        }
        else {
            currentImageIndex = 0
        }
        imgEl.src = images[currentImageIndex]
    })
    
    element.stats.forEach(stat => {
        const liEl = document.createElement('li')
        card.append(liEl)
        liEl.setAttribute('class', 'card--text')
        const statsName = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        liEl.innerText = statsName
    })
    
    const pEl = document.createElement('p')
    pEl.setAttribute('class', 'card--text')
    card.append(pEl)
    pEl.style.display = 'block'
    pEl.innerText = 'GAMES APPEARANCE:'
    
    element.game_indices.forEach(game => {
        const p2El = document.createElement('p')
        p2El.setAttribute('class', 'card--text')
        card.append(p2El)
        p2El.style.display = 'inline-block'
        let gameName = `${game.version.name.substring(0, 1).toUpperCase()}${game.version.name.substring(1)}`
        p2El.innerText = gameName
    })
})


// console.log(data[0]);
