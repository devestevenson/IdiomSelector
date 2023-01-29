import Link from 'next/link';
import React from 'react'
import IdiomSelector from '../components/idiomSelector'

export default function Contact(props) {

    const { contact } = props;

  return (
    
    <div>
        <p><Link href='/'>Home</Link></p>
        <IdiomSelector/>
      <h2>{contact.title}</h2>
    </div>
  )
}


export async function getStaticProps({ locale }) {
    // const response = await fetch('URL');  //Esto si fuese con un apiRest
    // const result = await response.json();

    const response = await import(`../idioms/${locale}.json`)

    return {
        props: {
            contact: response.default.contact
        }
    }
}
