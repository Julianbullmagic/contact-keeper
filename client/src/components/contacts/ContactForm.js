import React, { useState, useContext, useEffect } from 'react';

import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, current, clearCurrent, updateContact } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
               name: '',
               email: '',
               phone: '',
               category:'',
               type: 'personal'
            });
        }
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        category:'',
        type: 'personal'
    });

    const { name, email, phone,category, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
      e.preventDefault();

      if (current === null) {
          // Add New Contact
          addContact(contact);
      } else {
          // Update Contact
          updateContact(contact);
      }
      // Clear Form
      clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{ current ? 'Edit Contact' : 'Add Contact' }</h2>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={onChange}
            />
            <h5>Contact Type</h5>
            <div>
            <><label class="container">Personal
              <input type="radio"
              value="personal"
              checked="checked"
              name="type"
              onChange={onChange}
              checked={type === 'personal'}/>
              <span class="checkmark"></span>
            </label></>
            <><label class="container">Professional
              <input type="radio"
              value="professional"
              checked="checked"
              name="type"
              onChange={onChange}
              checked={type === 'professional'}/>
              <span class="checkmark"></span>
            </label></>

            <><label class="container">Friend
              <input type="radio"
              value="friend"
              checked="checked"
              name="type"
              onChange={onChange}
              checked={type === 'friend'}/>
              <span class="checkmark"></span>
            </label></>
            <><label class="container">Family
              <input type="radio"
              value="family"
              checked="checked"
              name="type"
              onChange={onChange}
              checked={type === 'family'}/>
              <span class="checkmark"></span>
            </label></>
            <><label class="container">Enemy
              <input type="radio"
              value="enemy"
              checked="checked"
              name="type"
              onChange={onChange}
              checked={type === 'enemy'}/>
              <span class="checkmark"></span>
            </label></>


              <><label>  <input
                    type="submit"
                    value={ current ? 'Update Contact' : 'Add Contact' }
                    className="btn btn-primary"
                /> </label>
                </>
            </div>

            { current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
            </div> }
        </form>
    );
};

/*
ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};
*/

export default ContactForm;
