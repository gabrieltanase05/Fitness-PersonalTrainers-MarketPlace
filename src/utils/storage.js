//This function get from user storage the token-key
export function getFromStorage(key) {
    if(!key){
        return null;
    }
    try {
        const valueStr = localStorage.getItem(key);
        if(valueStr) {
            return JSON.parse(valueStr);
        } else {
            return null;
        }
    } catch (err) {
        return null;
    }
}

export function setInStorage(key, obj) {
    if(!key) {
        console.error('ERROR: Key is Missing');
    }
    try {
        localStorage.setItem(key, obj);
    } catch (err) {
        console.error(err);
    }
}