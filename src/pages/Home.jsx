import { React } from 'react'
import { Link } from "react-router-dom"



const Home = () => {
  return (
    <div className='master-container'>
     <div className="hero-section">
        <div className="tagline-cta">
            <h2 className='hero-tagline'>Do you <span id="fw-700"><i>really</i></span> know your stuff, New Zealand?</h2>
            <Link to='/stories'><button className='hero-button'>Test your stuff</button></Link>
        </div>
     </div>

     <div className="drugcheck-section">
        <div className="width-50">
            <h2 className='drugcheck-heading'>What happens when I get my drugs checked?</h2>
            <img className='drugcheck-image' src="/drugcheck-image.jpeg" alt="" />
        </div>
        <div className="drugcheck-steps width-50">
            <ul>
                <li>You come and see us at either an event or a static testing clinic in our private testing area. Only people you feel comfortable with are allowed in the checking area with you. Nobody is allowed to take photos inside the checking area.</li>
                <li>You give us a sample of what you need checked. We only need a wee pile the size of a match head for the reagents, and another slightly bigger pile for the FTIR spectrometer.</li>
                <li>Depending on your substance we will do either one or two tests to find out what your substance has in it: And FTIR infrared spectrometer test, and/or a reagent test.</li>
                <li>Once we know what’s in your substance, we give you harm reduction advice about what we’ve found. You can make an informed decision about what you want to do from there.</li>
            </ul>
        </div>
     </div>

    <div className="stats-section">

    </div>

    <div className="testimonial-section">
        <h3 className='testimonial-header'>Don't Believe Us?</h3>
        <div className="testimonials">
            <div className="width-33">
                <div className='jacinda-photo'></div>
                <p className='quote'>“I think there are good grounds for it, as I say, I support it”</p>
                <h5>Jacinda Ardern</h5>
                <p>Former Prime Minister of New Zealand</p>
            </div>
            <div className="width-33">
                <div className='chloe-photo' />
                <p className='quote'>“People – like Wendy and the dozens of incred volunteers, and festival organisers who want to protect their punters – no longer risk arrest for offering this life saving service.”</p>
                <h5>Chlöe Swarbrick</h5>
                <p>MP of The Green Party</p>
            </div>
            <div className="width-33">
                <div className='helen-photo' />
                <p className='quote'>“This service saves lives”</p>
                <h5>Helen Clark</h5>
                <p>Former Prime Minister of New Zealand<br />Former UNDP Administrator</p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Home