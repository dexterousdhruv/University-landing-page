import React from 'react'
import './Contact.css'
import msgIcon from "../../assets/msg-icon.png";
import whiteArr from "../../assets/white-arrow.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a879dcac-700b-4eca-aa48-12be5b84c5dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msgIcon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li>
            <img src={mailIcon} alt="" />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={phoneIcon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={locationIcon} alt="" />
            77 Massachusetts Ave, Cambridge <br />
            MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
          <label>Your name</label>
          <input type="text" placeholder='Enter your name' />

          <label>Phone Number</label>
          <input type="text" placeholder='Enter your mobile number' />

          <label>Your Email</label>
          <input type="text" placeholder='Enter your email id' />

          <label>Write your messages here</label>
          <textarea name="" id="" cols="70" rows="6" placeholder='Enter your message' ></textarea>

          <button className="btn dark-btn">Submit now <img src={whiteArr} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact