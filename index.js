


document.getElementById('fetchButton').addEventListener('click', async () => {

    try {
        const res = await fetch('http://localhost:3000/items')

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json()

        const names = data.map(item => item.name).join('\n')
        const image = data.map(item => item.reference_image_id).join('\n')
        const temperament = data.map(item => item.temperament).join('\n')

        const arrNames = names.split("\n")
        const arrImage = image.split("\n")
        const arrTemperament = temperament.split("\n")

        const arrDogs = []

        for (let i = 0; i < arrNames.length; i++) {
            arrDogs.push(new DogsClass(arrNames[i], arrImage[i], arrTemperament[i]))
        }

        arrDogs.forEach(url => {
            const cardContainer = document.createElement("div")
            cardContainer.classList.add("card")

            // cardContainer.style.margin = "10%"

            const imgElement = document.createElement("img")
            imgElement.src = `https://cdn2.thedogapi.com/images/${url.image}.jpg`
            imgElement.alt = 'svg image'
            imgElement.width = 700
            imgElement.height = 500

            const h3Name = document.createElement("h2")
            h3Name.innerText = `Name: ${url.name}`

            const h3Temperament = document.createElement("h4")
            h3Temperament.innerText = `Temperament: ${url.temperament}`

            cardContainer.appendChild(imgElement)
            cardContainer.appendChild(h3Name)
            cardContainer.appendChild(h3Temperament)
            document.getElementById('svgcontainer').appendChild(cardContainer)



        })
    } catch (error) {
        console.log('fetch error', error)
    }

});