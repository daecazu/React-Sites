import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
	render(){
		return(
			<ul>
				{this.props.contacts.map((individualContact)=>{
					return <Contact contact ={individualContact} key={individualContact.id}/>
					})
				}
			</ul>
		)
	}
}
export default ContactsList;