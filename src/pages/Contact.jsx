import { useState } from "react";
import Container from "../components/Container";
import { IoMdSend, IoLogoLinkedin } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Download from "../components/Download";
import ContactUs from "../components/ContactTest";


const Contact = () => {
    // State variables to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // send email
    const sendEmail = () => {
        const userId = 'Ox-gv4Mep4IU68eya'; // Replace with your User ID
        const templateId = '1rrn•••••••••••••••••'; // Replace with your Template ID

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

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for form submission here
        console.log('Form submitted:', formData);

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
                <h3 className='text-red-500 text-2xl  font-semibold text-center mx-auto border-b-2 border-red-500 w-40'>Contact Me</h3>

                <ContactUs></ContactUs>
            </Container>

        </div>
    );
};

export default Contact;