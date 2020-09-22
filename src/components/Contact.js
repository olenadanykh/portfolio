import React, {Component} from 'react'
import Swal from 'sweetalert2'
import './Contact.scss'

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = { message: '',
                      name: '',
                      email: '' 
                     };
           
      }
      // saves the user's name entered to state
      nameChange = (event) => {
        this.setState({name: event.target.value})
      }
      
      // saves the user's email entered to state
      emailChange = (event) => {
        this.setState({email: event.target.value})
      }

      // saves the user's message entered to state
      messageChange = (event) => {
        this.setState({message: event.target.value})
      }
//onSubmit of email form
handleSubmit = (event) => {
  event.preventDefault();

  const {message, name, email} = this.state;
  
  const templateId = 'basic';

  this.sendMessage(templateId, {
                                  message, 
                                  name, 
                                  email
                                 }
                   )

}

//Custom EmailJS method
sendMessage = (templateId, variables) => {
  window.emailjs.send(
    'olena_d', templateId,
    variables
    ).then(res => {
      // Email successfully sent alert
      Swal.fire({
        title: 'Email Successfully Sent',
        icon: 'success'
      })
    })
    // Email Failed to send Error alert
    .catch(err => {
      Swal.fire({
        title: 'Email Failed to Send',
        icon: 'error'
            })
            console.error('Email Error:', err)
          })
      }
    
      render() {
        const {nameChange, emailChange, messageChange, handleSubmit} = this;
        return (
          
          //Form layout that requires a Name, Email, and message
          <div class="container-2">
          <form className="test-mailing" onSubmit={handleSubmit}>
            <br/>
            <div>
              <h6> Get in Touch </h6>
              <div>
                  <input className="form-control"placeholder="Name" name="user_name" type="text" 
                    id="name" onChange={nameChange} required/>
              </div>

              <div>
                  <input className="form-control"placeholder="Email" name="user_email" type="text"
                    id="email" onChange={emailChange} required/>
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  onChange={messageChange}
                  placeholder="Message"
                  required
                  className="email-text-area form-control"
                />
              </div>

            </div>

            <input type="submit" value="SEND MESSAGE" className="btn btn-outline-light" />
          </form>
          </div>
        )
      }
}

export default Contact;