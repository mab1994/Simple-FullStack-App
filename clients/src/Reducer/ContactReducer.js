import { GET_CONTACT } from '../Actions/Types';

let initState = [
    {
        FirstName : 'fn',
        LastName : 'ln',
        Age : 'a'
    }
]

const ContactReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CONTACT:
            return action.payload
        default:
            return state
    }
};

export default ContactReducer;