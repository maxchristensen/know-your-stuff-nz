import { useState } from 'react'
import axios from 'axios';
const formEndpoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT;


const ContactForm = () => {
    // ---------state-----------
    // setup state for contact form submission
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    // state for input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // handle a submit function
    const handleSubmit = (event) => {
        // stop page refreshing
        event.preventDefault();

        // ----Create a FormData object, and append each field to the object
        // form data is necessary to meet the criteria of post requests in contact form 7
        const testForm = new FormData();
        testForm.append('your-name', name)
        testForm.append('your-email', email)
        testForm.append('your-message', message)

        // ----post the form, using axios.post
        // first argument is the formEndpoint, second is the data
        axios.post(formEndpoint, testForm, {
            // include headers to tell the mail service we're sending a form
            // headers tell the server what to expect
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
            .then(function (response) {
                console.log(response);
                // update state to show submitted
                setSubmitted(true);
            })
            .catch(function (error) {
                console.log(error);
                // update state to show error
                setError(true);
            });
    };
    if (submitted) {
        // return success message
        return (
            <>
                <h3>Thank you!</h3>
                <p>We'll be in touch soon.</p>
            </>
        );
    }
    if (error) {
        return (
            <>
                <h3>Error!</h3>
                <p>Sorry, we were unable to send your message.</p>
            </>
        );
    }
    return (
      <div className="form-container">
        <form
            onSubmit={handleSubmit}
            method="POST"
        >
            <h2 className='contact-heading'>Get in touch!</h2>
            <div>
                <input
                    className='short-field'
                    placeholder='Name'
                    type="text"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    required
                />
            </div>
            <div>
                <input
                    className='short-field'
                    placeholder='Email'
                    type="email"
                    name="email"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    required
                />
            </div>
            <div>
                <textarea
                    className='long-field'
                    placeholder='Message'
                    name="message"
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                    required
                />
            </div>
            <div className='button-box'>
                <button
                    className="contact-submit"
                    type="submit"
                >
                    SUBMIT
                </button>
            </div>
        </form>
        </div>
    );
}

const Footer = () => {
    return (
        <div id="contact-container" className="container">
            <div>
                <ContactForm />
                <div className="socials-container">
                  <h4 className='socials-heading'>Check out our socials!</h4>
                  <div className="social-icons">
                    <img className='socials' src="/facebook.png" alt="FaceBook Logo" />
                    <img className='socials' src="/instagram.png" alt="Instagram Logo" />
                    <img className='socials' src="/Twitter.png" alt="Twitter Logo" />
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Footer