//ELEMENTOS QUE ACCEDE AL DIV DE INDEX
const rootElement = document.getElementById('root')

//Variable ROOT QUE ME CREA EL ELEMENTO ROOT
const root = ReactDOM.createRoot(rootElement)

const { Component } = React

//1A PARTE: ENCUENTRO CON EL PROFESOR 
function ProfesorPhase(props) {
    return <section>
        <button type="button"
            onClick={event => {
                event.preventDefault()

                props.chooseStarter()
            }}>Follow me!</button>

        <p></p>

        <img
            src="https://i.pinimg.com/originals/e6/cf/7a/e6cf7ac28a1ab88aa04108c22fd11fd9.png"
            id="oak" />
    </section>
}

//2A PARTE: ESCOGE TU POKEMON INICIAL
function Starters(props) {
    return <section>

        <div class="starters">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png" />
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png" />
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png" />
        </div>

        <p></p>

        <div class="chooseStart">

            <button type="button"
                onClick={event => {
                    event.preventDefault()

                    props.charm()
                }}>Choose Charmander!</button>

            <button type="button"
                onClick={event => {
                    event.preventDefault()

                    props.squir()
                }}>Choose Squirtle!</button>

            <button type="button"
                onClick={event => {
                    event.preventDefault()

                    props.bulb()
                }}>Choose Bulbasaur!</button>

        </div>

    </section>
}

//3A PARTE: ESCOGES A CHARMANDER
function Charmander(props) {
    return <section>

        <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
            id="starter" />
        <label htmlFor="char">Has escogido a Charmander!</label>
        <input type="text" id="char" placeholder="Ponle un nombre..." />

        <button type="button"
            onClick={event => {
                event.preventDefault()

                props.init()
            }}>Vuelve al Inicio!</button>

    </section>
}

//3A PARTE: ESCOGES A SQUIRTLE
function Squirtle(props) {
    return <section>

        <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
            id="starter" />
        <label htmlFor="squir">Has escogido a Squirtle!</label>
        <input type="text" id="squir" placeholder="Ponle un nombre..." />

        <button type="button"
            onClick={event => {
                event.preventDefault()

                props.init()
            }}>Vuelve al Inicio!</button>

    </section>
}

//3A PARTE: ESCOGES A BULBASAUR
function Bulbasaur(props) {
    return <section>

        <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
            id="starter" />
        <label htmlFor="bulb">Has escogido a Bulbasaur!</label>
        <input type="text" id="bulb" placeholder="Ponle un nombre..." />

        <button type="button"
            onClick={event => {
                event.preventDefault()

                props.init()
            }}>Vuelve al Inicio!</button>

    </section>
}

//CLASE QUE AGRUPA TODAS LAS FUNCIONES/VIEWS Y NOS VA A CAMBIAR ENTRE ELLAS
class App extends Component {
    constructor(props) {
        super(props)

        //PROPIEDAD ESTADO QUE NOS CHIVA LA QUE SE VE DE ENTRADA
        this.state = { view: 'profEncounter' }
    }

    //RENDER DE LAS DIFERENTES PÁGINAS
    render() {
        return <div>

            <h1>A wild new adventure!</h1>

            {this.state.view === 'profEncounter'
                && <ProfesorPhase
                    chooseStarter={() => this.setState({ view: 'starters' })} />}
            {this.state.view === 'starters'
                && <Starters
                    charm={() => this.setState({ view: 'charm' })}
                    squir={() => this.setState({ view: 'squirt' })}
                    bulb={() => this.setState({ view: 'bulba' })} />}
            {this.state.view === 'charm'
                && <Charmander
                    init={() => this.setState({ view: 'profEncounter' })} />}
            {this.state.view === 'squirt'
                && <Squirtle
                    init={() => this.setState({ view: 'profEncounter' })} />}
            {this.state.view === 'bulba'
                && <Bulbasaur
                    init={() => this.setState({ view: 'profEncounter' })} />}
        </div>
    }
}

//LE PASAMOS EL RENDER DEL APP
root.render(<App />)