//HOME INSTANCES
class Home extends Compo {
    constructor() {
        super(document.createElement('section'))

        const title = new Heading('Home', 2)
        this.add(title)

        const userTitle = new Heading(`Hello, ${loggedInUser.name}!`, 3)
        this.add(userTitle)

        const logoutButton = new Button('Logout', 'button')
        this.add(logoutButton)

        logoutButton.addBehavior('click', event => {
            event.preventDefault()

            loggedInUser = null

            this.remove()

            page.add(login)
        })


        const addPostButton = new Button('+', 'button')
        this.add(addPostButton)

        addPostButton.addBehavior('click', event => {
            const createPost = new CreatePost()

            this.children[this.children.length - 1].remove()

            this.add(createPost)
        })

        const postList = new PostList()
        this.add(postList)
    }
}