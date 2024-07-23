import contacts from '../api/contacts'

const Contacts = () => contacts.map(el => <a href={el.url}><img src={el.icon}></img></a>)

export default Contacts