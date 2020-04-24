import { GET_CONTACT } from './Types'
import axios from 'axios';

export const getContact = () => dispatch => {
    axios.get('/allcontacts')
        .then(res => dispatch({
            type: GET_CONTACT,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const addContact = newContact => dispatch => {
    axios.post('/newcontact', newContact)
    .then(() => dispatch(getContact()))
    .catch(err => console.log(err))
}
