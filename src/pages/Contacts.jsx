import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactsList } from 'components/ContactsList/ContactsList'
import { Filter } from 'components/Filter/Filter';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Error } from 'components/Error/Error';
import { BallTriangle } from 'react-loader-spinner';

export default function Contacts() {
  const {items, isLoading, error} = useSelector(state => state.contacts.contacts)
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
      {isLoading && (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      )}
      {error && <Error/>}
      {!error && items.length > 0 && <ContactsList />}
      
    </div>
  )
}
