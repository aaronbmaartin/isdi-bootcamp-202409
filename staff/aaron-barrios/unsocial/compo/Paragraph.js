class Paragraph extends Compo {
    constructor(text) {
        super(document.createElement('p'))

        this.container.innerText = text
    }

    getText = function () {
        return this.container.innerText
    }

    setText = function (text) {
        this.container.innerText = text
    }
}