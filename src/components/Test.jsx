import React, { useState } from "react";
import Container from "../components/Container";
import emailjs from 'emailjs-com';

import { IoMdSend } from "react-icons/io";

const Test = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = () => {
        const userId = 'Ox-gv4Mep4IU68eya'; // Replace with your User ID
        const templateId = '1rrnTvGFsEbZafHkKyRcF'; // Replace with your Template ID

        const templateParams = {
            to_name: formData.name,
            from_name: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs.send('default_service', templateId, templateParams, userId)
            .then((response) => {
                console.log('Email sent successfully:', response);
                // Add any additional logic or UI changes after successful submission
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                // Handle errors or display a message to the user
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        // Call the sendEmail function to send the email
        sendEmail();

        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div>
            <Container>
                <h3 className='text-red-500 text-2xl font-semibold text-center mx-auto border-b-2 border-red-500 w-40'>Contact Me</h3>

                {/* Contact form */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter Your Name"
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block font-semibold">
                            Subject:
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-semibold">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows="4"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex justify-center items-center font-semibold gap-x-2"
                        >
                            Send <IoMdSend />
                        </button>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Test;
