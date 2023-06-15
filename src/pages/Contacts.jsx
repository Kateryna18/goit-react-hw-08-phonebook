import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactsList } from 'components/ContactsList/ContactsList'
import { Filter } from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import React from 'react'

export default function Contacts() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactsList/>
      <Toaster />
    </div>
  )
}
