import React, { useState } from 'react';

function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

//    props.onSubmit({
//      id: Math.random(Math.floor() * 1000),
//      text: name,
//      email: email,
//      comment: comment,
//    });

    setName('');
    setEmail('');
    setComment('');
  };

  const handleChange = (e) => {
    if(e.target.name==="name"){
      setName(e.target.value);
    }
    if(e.target.name==="email"){
      setEmail(e.target.value);
    }
    if(e.target.name==="comment"){
      setComment(e.target.value);
    }
    
  };


  return (
    <div>
      Contact Me
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          name="name"
          className="row bucket-input m-3"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          name="email"
          className=" row bucket-input m-3"
          onChange={handleChange}
        ></input>
        <textarea
          type="text"
          rows="15"
          cols="300"
          placeholder="Enter your Comment"
          value={comment}
          name="comment"
          className="row bucket-input m-3"
          onChange={handleChange}
        ></textarea>
        <button className="bucket-button">Add your comment</button>
      </form>
    </div>
  );
}

export default Contact;