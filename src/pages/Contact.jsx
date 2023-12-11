import { useState } from "react";
import Container from "../components/Container";
import { IoMdSend, IoLogoLinkedin } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Download from "../components/Download";


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

                {/* contact me form */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold  ">
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
                        <label htmlFor="email" className="block font-semibold  ">
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
                        <label htmlFor="subject" className=" block font-semibold  ">
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
                        <label htmlFor="message" className=" block font-semibold  ">
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
            {/* <Container>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-4 md:space-y-4 lg:space-y-0">
                    <div className="flex items-center justify-center gap-3">
                        <IoCall className="text-3xl" />
                        <p className="text-xl font-semibold">
                            01910-697853
                        </p>

                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <SiGmail className="text-3xl" />
                        <p className="text-xl font-semibold">
                            ridoygh51@gmail.com
                        </p>

                    </div>
                    <a href="https://www.linkedin.com/in/anik-ghosh-15a389299/">
                        <div className="flex items-center justify-center gap-3">
                            <IoLogoLinkedin className="text-3xl" />
                            <p className="text-xl font-semibold text-purple-600 underline">
                                Linkedin
                            </p>
                        </div>
                    </a>
                    <a href="https://github.com/akanik3376">
                        <div className="flex items-center justify-center gap-3">
                            <FaGithub className="text-3xl" />
                            <p className="text-xl font-semibold text-purple-600 underline">
                                Github
                            </p>
                        </div>
                    </a>
                </div>
            </Container> */}
        </div>
    );
};

export default Contact;