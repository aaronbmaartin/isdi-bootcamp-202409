// ----- POSTS STUFF ------
const createPost = (username, image, text) => {

    if (username.length < 4 || username.length > 12)
        throw new Error('Invalid username')

    //TO DO: input validation (and throw error)

    const post = {
        image: image,
        text: text,
        username: username,
        date: new Date
    }

    posts.push(post)
}