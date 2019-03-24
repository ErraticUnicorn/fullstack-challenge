import CssBaseline from '@material-ui/core/CssBaseline';
import Link from 'next/link'
import Head from 'next/head';
import ContactCard from '../components/contact_card';
import Button from '@material-ui/core/Button';
import fetch from 'isomorphic-unfetch'

const Projects = (props) => {
  return (
    <div>
      <CssBaseline />
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <style jsx global>{`
        body { 
          background: #e0e0e0;
          width: 100%;
          height: 100%;
          font-family: Roboto, sans-serif;
        }
    `}</style>
      <div style={{margin: '24px 84px 0', fontWeight: 'bold', fontSize: 20}}>
        Contacts <Link href='/new_contact'>+ New</Link>
      </div>
      <div style={{margin: '0 72px', display: 'flex', flexFlow: 'row wrap'}}>
        {props.contacts.map(contact => (
            <ContactCard key={contact._id} first_name={contact.first_name} last_name={contact.last_name} phone_number={contact.phone_number} email={contact.email}></ContactCard>
        ))}
      </div>
    </div>
  );
};

Projects.getInitialProps = async function() {
    const res = await fetch('http://localhost:5000/contacts/')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data}`)
  
    return {
      contacts: data
    }
}
  

export default Projects;