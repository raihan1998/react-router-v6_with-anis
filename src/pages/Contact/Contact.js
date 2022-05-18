import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    // react hook useNavigate diya btn ar shajje ak page theke onno page niye jai
    const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
        commodi. Repudiandae voluptatem aut ipsam illo fugiat! Ea perspiciatis,
        ipsum id dolore, quibusdam esse obcaecati quia nostrum doloremque
        aliquid sit voluptas!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque neque
        dolorem ipsum quam distinctio rerum totam, accusantium voluptates animi
        ea.
      </p>
      <button onClick={() => {navigate('/')}}>Go to Home page</button>
    </div>
  );
};

export default Contact;
