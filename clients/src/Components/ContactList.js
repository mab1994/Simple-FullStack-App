import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact } from '../Actions/Actions'
import OneContact from './OneContact';

class ContactList extends Component {

    componentDidMount() {
        this.props.getContact()
    }

    render() {
        return (
            <div>
                <div>
                    This is contact list
                </div>
                <div>
                    {
                        this.props.contacts.map(el => <OneContact info={el}/>)
                    }
                </div>
            </div>
        )
    }

};

const mapStateToProps = state => {
    return {
        contacts: state.ContactReducer
    }
}

export default connect(mapStateToProps, { getContact })(ContactList);