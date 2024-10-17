let loggedInUser = null

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const { Component } = React

class PasswordInput extends Component {
    constructor(props) {
        console.log('PassInput -> Constructor')

        super(props) //this.props = props 

        //PROPIEDAD ESTADO PARA CAMBIAR EL TIPO DE TEXTO Y EL EMOJI
        this.state = { status: '😌', type: 'password' }
    }

    render() {

        return <div style={{ display: 'flex' }}>
            <input
                type={this.state.type} id={this.props.id}
                style={{ width: '100%', boxSizing: 'border - box', paddingRight: '18px' }} />

            <span
                style={{ cursor: 'pointer', position: 'absolute', right: '10px' }}
                onClick={() => this.setState({
                    status: this.state.status === '😌' ? '😳' : '😌',
                    type: this.state.type === 'password' ? 'text' : 'password'
                })}
            >{this.state.status}
            </span>
        </div >
    }
}

function Login(props) {

    return <section>
        <h2>Login</h2>

        <form onSubmit={event => {

            event.preventDefault()

            //CAPTURO LOS VALORES DEL USERNAME Y PASSWORD DEL TARGET DEL EVENTO (FORMULARIO)
            //LOS NOMBRES QUE CAPTURAS ES IMPORTANTE QUE COINCIDAN CON EL ID DEL INPUT
            const { target: { username: { value: username }, password: { value: password } } } = event

            try {
                loggedInUser = authenticateUser(username, password)

                //RESETEO DEL FORMULARIO
                event.target.reset() // => form.reset()

                //LE PASO LA FUNCIÓN ONLOGGEDIN DEL PARAMERTRO PROPS PARA DECIRLE A APP QUE ME HE LOGGEADO
                props.onLoggedIn()

            } catch (error) {
                //passwordInput.setValue('')

                alert(error.message)

                console.error(error)
            }

        }}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" style={{ width: '100%', boxSizing: 'border-box' }} />

            <label htmlFor="password">Password</label>
            <PasswordInput id="password" />

            <button type="submit">Login</button>
        </form>

        <a href=""
            onClick={event => {
                event.preventDefault()

                props.onRegisterLink()
            }}>
            Register</a>
    </section>
}

function Register(props) {

    return <section>
        <h2>Register</h2>

        <form onSubmit={event => {

            event.preventDefault()

            //CAPTURO LOS VALORES DEL REGISTER (FORMULARIO)
            //LOS NOMBRES QUE CAPTURAS ES IMPORTANTE QUE COINCIDAN CON EL ID DEL INPUT
            const { target: { name: { value: name }, email: { value: email }, username: { value: username }, password: { value: password }, ['password-repeat']: { value: passwordRepeat } } } = event


            try {

                //LLAMO A LA FUNCION REGISTER USER CON LOS PARAMETROS CAPTURADOS
                registerUser(name, email, username, password, passwordRepeat)

                //RESETEO DEL FORMULARIO
                event.target.reset() // => form.reset()

                //LE PASO LA FUNCIÓN "registered" DEL PARAMERTRO PROPS PARA DECIRLE A APP QUE ME HE LOGGEADO
                props.registered()


            } catch (error) {
                alert(error.message)

                console.error(error)
            }

        }}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" style={{ width: '100%', boxSizing: 'border-box' }} />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" style={{ width: '100%', boxSizing: 'border-box' }} />

            <label htmlFor="username">Username</label>
            <input type="text" id="username" style={{ width: '100%', boxSizing: 'border-box' }} />

            <label htmlFor="password">Password</label>
            <PasswordInput id="password" />

            <label htmlFor="passwordRepeat">Repeat Password</label>
            <PasswordInput id="password-repeat" />

            <button type="submit">Register</button>
        </form>

        <a href=""
            onClick={event => {
                event.preventDefault()

                props.registered()
            }}>Login</a>
    </section>
}

function Home(props) {
    return <section>
        <h2>Home</h2>

        <h3>Hello, Aaron!</h3>

        <button type="button"
            onClick={event => {
                event.preventDefault()

                loggedInUser = null

                props.logout()
            }}>Logout</button>

        <button type="button">+</button>

        <div>
            <h3>Posts</h3>

            <article>
                <h4>aaron</h4>
                <img src="https://pm1.aminoapps.com/8360/ad07e2d2cdf6e1733328d6e7b7848b87db38a2bbr1-1536-2048v2_hq.jpg"
                    style={{ width: '100%' }} />
                <p>AARON</p>
                <time>Thu Oct 17 2024 14:36:39 GMT+0200 (hora de verano de Europa central)</time>
            </article>

            <article>
                <h4>juanpablo</h4>
                <img src="https://i.pinimg.com/originals/8c/60/1a/8c601a25311a1a5098896f751a784b54.jpg"
                    style={{ width: '100%' }} />
                <p>JUANPA</p>
                <time>Thu Oct 17 2024 14:36:39 GMT+0200 (hora de verano de Europa central)</time>
            </article>
        </div>
    </section>
}

//CLASE QUE AGRUPA TODAS LAS FUNCIONES/VIEWS Y NOS VA A CAMBIAR ENTRE ELLAS
class App extends Component {
    constructor(props) {
        super(props)

        //PROPIEDAD ESTADO QUE NOS CHIVA LA QUE SE VE DE ENTRADA
        this.state = { view: 'login' }
    }

    //RENDER DE LAS DIFERENTES PÁGINAS
    render() {
        return <div>

            <h1>Unsocial</h1>

            {this.state.view === 'login'
                && <Login
                    onLoggedIn={() => this.setState({ view: 'home' })}
                    onRegisterLink={() => this.setState({ view: 'register' })} />}
            {this.state.view === 'register'
                && <Register
                    registered={() => this.setState({ view: 'login' })} />}
            {this.state.view === 'home'
                && <Home
                    logout={() => this.setState({ view: 'login' })} />}

        </div>
    }
}

//LE PASAMOS EL RENDER DEL APP
root.render(<App />)
