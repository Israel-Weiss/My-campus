// import { httpService } from "./http.service"
import { query, saveToStorage } from "./storage.service"

export {
    getDefaultUser,
    logInUser,
    checkUser
}

const STORAGE_KEY = 'HMI_users'
const usersList = [
    { name: 'View', authorization: 0, password: '1111', default: true },
    { name: 'Operator', authorization: 1, password: '2222', default: false },
    { name: 'Admin', authorization: 2, password: '3333', default: false },
]

async function getUsers() {
    // let users = await httpService.get('users')
    let users = await query(STORAGE_KEY)
    if (!users || users.length < 3) {
        // users = await httpService.post('users', usersList)
        users = await saveToStorage(STORAGE_KEY, usersList)
    }
    return users
}

async function checkUser(name, password) {
    if (!name) return
    // const users = await httpService.get('users')
    const users = await query(STORAGE_KEY)
    const user = users.find(curUser => {
        return (curUser.name.toLowerCase() === name.toLowerCase())
            && (curUser.password === password)
    })
    return user
}

async function getDefaultUser() {
    let defaultUser = await query('HMI_loggedIn')
    if (!defaultUser) {
        const users = await getUsers()
        defaultUser = users.find(user => user.default = true)
    }
    return defaultUser
}

function logInUser(user) {
    saveToStorage('HMI_loggedIn', user)
}


