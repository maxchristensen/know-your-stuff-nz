import { React } from 'react'


const Home = () => {
  return (
    <div className='master-container'>

     <div className="hero-section">
        <h2 className='hero-tagline'>Do you really know your stuff, New Zealand?</h2>
        <button className='hero-button'>Test your stuff</button>
        <img src="" alt="" />
     </div>

     <div className="drugcheck-section">
        <div className="50-width">
            <h2>What happens when I get my drugs checked?</h2>
            <img src="" alt="" />
        </div>
        <div className="50-width">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
     </div>

    <div className="stats-section">
        <h2>Some stats!</h2>
        <div className="stat1">
        <h3>3 Years Operating Legally</h3>
        </div>
        <div className="stat2">
        <h3>2,100+ dangerous substances found pretending to be other substances</h3>
        </div>
        <div className="stat3">
        <h3>11,000+ samples tested at 120+ events</h3>
        </div>
        <div className="stat4">
        <h3>Over 900 volunteers</h3>
        </div>
    </div>

    <div className="testimonial-section">
        <h3>Don't Believe Us?</h3>
        <div className="33-width">
            <img src="" alt="" />
            <p className='quote'>"Insert Quote Here"</p>
            <h5>Quoted Name</h5>
            <p>Quoted occupation</p>
        </div>
        <div className="33-width">
            <img src="" alt="" />
            <p className='quote'>"Insert Quote Here"</p>
            <h5>Quoted Name</h5>
            <p>Quoted occupation</p>
        </div>
        <div className="33-width">
            <img src="" alt="" />
            <p className='quote'>"Insert Quote Here"</p>
            <h5>Quoted Name</h5>
            <p>Quoted occupation</p>
        </div>
    </div>


    </div>
  )
}

export default Home