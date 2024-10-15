const authenticateUser = (username, password) => {
    if (username.length < 4 || username.length > 12)
        throw new Error('Invalid username')

    const user = users.find(user => user.username === username && user.password === password)


    if (user === undefined)
        throw new Error('Wrong credentials')

    return user
}
