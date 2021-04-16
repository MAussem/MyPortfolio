import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../Components/Hero';
import Content from '../Components/Content';

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }


  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form name="Contact" netlify>
            <Form.Group>
              <Form.Label htmlFor="full-name"><strong>Full Name</strong></Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>


            <Form.Group>
              <Form.Label htmlFor="email"><strong>Email</strong></Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>


            <Form.Group>
              <Form.Label htmlFor="message"><strong>Message</strong></Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
            </Form.Group>

            <Button className="d-inline-block" variant="primary" type="sumbit" disabled={this.state.disabled}>
              Send
             </Button>
          </Form>
        </Content>
      </div>
    );
  }

}

export default ContactPage;