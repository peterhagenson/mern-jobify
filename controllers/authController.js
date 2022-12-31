import User from '../models/user.js'

const register = async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create(req.body)
        console.log(req.body)
        res.status(201).json({ user })
    } catch (error) {
        res.status(500).json({ msg: 'there was an error' })
    }
}


const login = (req, res) => {
    res.send('login user')
}

const updateUser = (req, res) => {
    res.send('updateUser')
}

export { register, login, updateUser } 