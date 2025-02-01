import styles from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/actions";

const ContactsList = () => {
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  console.log(contacts);

  const handleDeleteContact = (evt) => {
    const idContactToDelete = evt.target.getAttribute("data-id");
    dispatch(deleteContact(idContactToDelete));
  };

  return (
    <ul>
      {filter.length !== 0
        ? contacts
            .filter((contact) =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((contact) => (
              <li key={contact.id} className={styles.contactItem}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button
                  type="button"
                  data-id={contact.id}
                  onClick={(evt) => deleteContact(evt)}
                >
                  Delete
                </button>
              </li>
            ))
        : contacts.map((contact) => (
            <li key={contact.id} className={styles.contactItem}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                data-id={contact.id}
                onClick={(evt) => handleDeleteContact(evt)}
              >
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
};

export default ContactsList;
