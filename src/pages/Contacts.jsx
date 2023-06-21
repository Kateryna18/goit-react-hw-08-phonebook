import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactsList } from 'components/ContactsList/ContactsList'
import { Filter } from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export default function Contacts() {
  const {items} = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      {items.length > 0 && <ContactsList/>}
      <Toaster />
    </div>
  )
}
