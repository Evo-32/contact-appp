import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactDetail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
        <div className="flex justify-between mt-3 p-3">
          <p>Welcome to your contact</p>
          <a href='/Createcontact'><button className="bg-pink-500 border border-gray-200 p-2 rounded">
            Add contact
          </button></a>
        </div>
  )
}

export default ContactDetail