class Time extends Compo {
    constructor(text) {
        super(document.createElement('time'))

        this.container.innerText = text
    }

    getText = function () {
        return this.container.innerText
    }

    setText = function (text) {
        this.container.innerText = text
    }
}
