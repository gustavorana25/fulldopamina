export const saveLocalStorage = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val))
}

export const getFromLocalStorage = (key, defaultValue=null) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue;
}

