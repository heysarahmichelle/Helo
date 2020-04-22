const initialState = {
    username: '',
    id: 0
}

const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_USER:
            return {username: payload.username, id: payload.id}
        default:
            return state;
    }
}