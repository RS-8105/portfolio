import React from 'react'
import './GetInTouch.css'
const GetInTouch = () => {
  return (
    <div className='outer-container'>
        <h1 className='reachout'>Reach Out</h1>
        <p className='para'>Get in Touch or shoot me an email directly at <a href="mailto:rushikeshsomani08@gmail.com">rushikeshsomani08@gmail.com</a></p>
        <br />
        <br />
        <div className="form-container">
            <form action="">
                <label htmlFor="input">Name</label>
                <input type="text"placeholder="Your Name" required />
                <br />
                <label htmlFor="input">Email</label>
                <input type="text"placeholder="youremail@example.com " required />
                <br />
                <label>Message</label>
                <textarea
                  className="message"
                  placeholder="How can I help?"
                  required
                ></textarea>
                <br />
                <button className='btn'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default GetInTouch