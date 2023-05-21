import httpService, {
    setDeafaultCommonHeader
} from './httpService'
import {
    apiUrl
} from '../config.json'
import jwtDecode from 'jwt-decode'

const TOKEN_KEY = 'token'

setDeafaultCommonHeader('x-auth-token', getJWT())


export function getJWT() {
    return localStorage.getItem(TOKEN_KEY)
}

export function createUser(user) {
    return httpService.post(`${apiUrl}/users`, user)
}

export async function login(email, password) {
    const {
        data: {
            token
        }
    } = await httpService.post(`${apiUrl}/auth`, {
        email,
        password
    })
    localStorage.setItem(TOKEN_KEY, token)
}


export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(TOKEN_KEY)
        return jwtDecode(jwt)
    } catch {
        return null
    }
}

export function logout() {
    localStorage.removeItem(TOKEN_KEY)
    setDeafaultCommonHeader('x-auth-token', null)
}

export async function addToFav(id) {
    let user = await httpService.get(`${apiUrl}/users/me`);
    let cards = [...user.data.cards, id];
    return httpService.patch(`${apiUrl}/users/cards`, {
        cards: cards
    })
}

const usersService = {
    createUser,
    login,
    getCurrentUser,
    logout,
    addToFav,
}


export default usersService;