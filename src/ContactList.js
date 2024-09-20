import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactList.css"; // CSS file for styling

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contact list from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/contact/list"
        ); // API URL to get contacts
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contact list", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="contact-list-container">
      <h1 className="list-title">Contact Submissions</h1>
      <table className="contact-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.subject}</td>
              <td>{contact.message}</td>
              <td>{new Date(contact.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
