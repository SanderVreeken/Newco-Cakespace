export const initialState = {
    isChatting: false,
    isMenuBarActive: false,
    isMessengerActive: false,
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'UPDATE_IS_CHATTING':
            return { 
                ...state,
                isChatting: action.item
            }
        case 'UPDATE_IS_MENUBAR_ACTIVE':
            return { 
                ...state,
                isMenuBarActive: action.item
            }
        case 'UPDATE_IS_MESSENGER_ACTIVE':
            // Logic for changing the state of the boolean of whether the messenger component is active.
            return { 
                ...state,
                isMessengerActive: action.item
            }
        default:
            return state  
    }
}

export default reducer