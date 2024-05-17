
class DogsClass {


    #name
    #image
    #temperament

    constructor(name, image, temperament) {
        this.name = name;
        this.image = image;
        this.temperament = temperament;
    }

    get temperament() {
        return this.#temperament
    }
    get name() {
        return this.#name
    }
    get image() {
        return this.#image
    }

    set name(newName) {
        this.#name = newName
    }
    set temperament(newTemperament) {
        this.#temperament = newTemperament
    }
    set image(newImage) {
        this.#image = newImage
    }





}