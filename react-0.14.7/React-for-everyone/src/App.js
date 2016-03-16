import React from 'react';
import ContactsList from './ContactsList';

let contacts= [{
	id: 1,
	name: 'Daniel',
	phone: '555551'
},{
	id: 2,
	name: 'Crispy',
	phone: '555552'
},{
	id: 3,
	name: 'Violeta',
	phone: '555553'
},{
	id: 4,
	name: 'Axel',
	phone: '5555534'
}]

class App extends React.Component {
	render(){
		return(
		<div>
			<h1>Contacts List</h1>
			<ContactsList contacts={this.props.contacts}/>
		</div>
		)
	}
}

React.render(<App contacts={contacts} />, document.getElementById('app'));