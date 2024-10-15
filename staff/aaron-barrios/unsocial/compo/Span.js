//SPAN INSTANCES
class Span extends Compo {
    constructor(text) {
        super(document.createElement('span'))

        this.container.innerText = text
    }

    getText = function () {
        return this.container.innerText
    }

    setText = function (text) {
        this.container.innerText = text
    }
}