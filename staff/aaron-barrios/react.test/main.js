//variable que te almacena datos del usuario loggeado
let loggedInUser = null

//ELEMENTOS QUE ACCEDE AL DIV DE INDEX
const rootElement = document.getElementById('root')

//Variable ROOT QUE ME CREA EL ELEMENTO ROOT
const root = ReactDOM.createRoot(rootElement)

const title = React.createElement('h1', null, 'YEPAAAA!')


//1A PARTE: REGISTER PART
const nameLabel = React.createElement('label', { for: 'name' }, 'Name')
const nameInput = React.createElement('input', { type: 'text', id: 'name', placeholder: 'Naaaame' })

const emailLabel = React.createElement('label', { for: 'email' }, 'E-mail')
const emailInput = React.createElement('input', { type: 'email', id: 'email', placeholder: 'pepito@gmail.com' })

const userNameameLabel = React.createElement('label', { for: 'username' }, 'Username')
const userNameInput = React.createElement('input', { type: 'text', id: 'username', placeholder: 'Username' })

const passwordLabel = React.createElement('label', { for: 'password' }, 'Password')
const passwordInput = React.createElement('input', { type: 'password', id: 'password', placeholder: 'Password' })

const registerSubmitButton = React.createElement('button', { type: 'submit', id: 'butOak' }, 'Register')
const form = React.createElement('form', {
    onSubmit: event => {
        event.preventDefault()

        alert('Captured data!')
    }
}, [nameLabel, nameInput, emailLabel, emailInput, userNameameLabel, userNameInput, passwordLabel, passwordInput, registerSubmitButton])





root.render([
    title,
    form
]);