import React from 'react'

const Contactlist = () => {
  return (
    <div className="mt-8">
        <a href='/ContactDetails'><h2 className="text-2xl font-semibold mb-4">Contacts</h2></a>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <strong>Name:</strong> {contact.name}<br />
              <strong>Email:</strong> {contact.email}<br />
              <strong>Telephone:</strong> {contact.message}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Contactlist