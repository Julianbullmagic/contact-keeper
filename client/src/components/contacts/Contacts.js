import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from "../layout/Spinner";

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered, filterContactsCategory, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>;
    }

    return (
        <Fragment>
        <div>
        <div className="tab">
  <button className="tablinks" onClick={(e)=>{filterContactsCategory('all')}}>All</button>
  <button className="tablinks" onClick={(e)=>{filterContactsCategory('personal')}}>Personal</button>
  <button className="tablinks" onClick={(e)=>{filterContactsCategory('professional')}}>Professional</button>
  <button className="tablinks" onClick={(e)=>{filterContactsCategory('friend')}}>Friend</button>
  <button className="tablinks" onClick={(e)=>{filterContactsCategory('family')}}>Family</button>
  <button className="tablinks" onClick={(e)=>{filterContactsCategory('enemy')}}>Enemy</button>
  </div>
            { contacts !== null && !loading ? (
                <TransitionGroup>
                    { filtered !== null
                        ? filtered.map(contact =>
                            (<CSSTransition
                                key={contact._id}
                                timeout={500}
                                classNames="item"
                            >
                                <ContactItem contact={contact} />
                            </CSSTransition>))
                        : contacts.map(contact => (
                            <CSSTransition
                                key={contact._id}
                                timeout={500}
                                classNames="item"
                            >
                                <ContactItem contact={contact} />
                            </CSSTransition>))
                    }
                </TransitionGroup>
            ) : <Spinner /> }
              </div>
        </Fragment>
    );
};

export default Contacts;
