import React from 'react';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoCall, IoLocation } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import Container from '../components/Container';
import logo from '../assets/img/young-bearded-man-with-striped-shirt_273609-5677.avif'

const Footer = () => {
    return (
        <div className='mt-16'>
            <Container>
                <footer className="grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:space-y-0 p-10 bg-base-200 text-base-content">
                    <aside>
                        <div className="w-24 rounded-full">
                            <img className='rounded-full' src={logo} alt="" />
                        </div>
                        <h4 className="text-2xl font-semibold mt-3">Anik Ghosh</h4>
                    </aside>

                    <nav>
                        <header className="footer-title ">Contact</header>
                        <div className="flex items-center  gap-3">
                            <IoLocation className="text-3xl" />
                            <p className="text-xl font-semibold">
                                Address : Dighalia, Khulna
                            </p>

                        </div>
                        <div className="flex items-center  my-3 gap-3">
                            <IoCall className="text-3xl" />
                            <p className="text-xl font-semibold">
                                01910-697853
                            </p>

                        </div>
                        <div className="flex items-center gap-3">
                            <SiGmail className="text-3xl" />
                            <p className="text-xl font-semibold">
                                ridoygh51@gmail.com
                            </p>

                        </div>

                    </nav>
                    <nav>
                        <header className="footer-title">Flow</header>
                        <a href="https://www.linkedin.com/in/anik-ghosh-15a389299/"
                            className="link link-hover flex gap-1">

                            <IoLogoLinkedin className="text-3xl" />
                            <p className="text-xl font-semibold text-purple-600 underline">
                                Linkedin
                            </p>

                        </a>
                        <a href="https://github.com/akanik3376"
                            className="link link-hover flex gap-1 my-3">

                            <FaGithub className="text-3xl" />
                            <p className="text-xl font-semibold text-purple-600 underline">
                                Github
                            </p>

                        </a>
                        <a href="https://www.facebook.com/Anik3376"
                            className="link link-hover flex gap-1 my-3">

                            <FaFacebook className="text-3xl" />
                            <p className="text-xl font-semibold text-purple-600 underline">
                                FaceBook
                            </p>

                        </a>

                    </nav>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;
