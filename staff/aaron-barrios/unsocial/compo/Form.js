//FORMULARIOS
class Form extends Compo {
    constructor(container) {
        super(document.createElement('form'))
    }


    reset = function () {
        this.container.reset()
    }
}
