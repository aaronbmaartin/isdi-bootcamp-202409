//HOME INSTANCES
class Home extends Compo {
    constructor() {
        super(document.createElement('section'))

        var title = new Heading('Home', 2)
        this.add(title)

        var userTitle = new Heading('Hello, ' + loggedInUser.name + '!', 3)
        this.add(userTitle)

        var logoutButton = new Button('Logout', 'button')
        this.add(logoutButton)

        logoutButton.addBehavior('click', function (event) {
            event.preventDefault()

            loggedInUser = null

            this.remove()

            page.add(login)

        }.bind(this))


        var addPostButton = new Button('+', 'button')
        this.add(addPostButton)

        addPostButton.addBehavior('click', function (event) {
            var createPost = new CreatePost()

            this.children[this.children.length - 1].remove()

            this.add(createPost)
        }.bind(this))

        var postList = new PostList()
        this.add(postList)
    }
}