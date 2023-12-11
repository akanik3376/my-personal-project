import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { IoMdSend } from 'react-icons/io';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n7osnki', 'template_rrn2y1g', form.current, 'Ox-gv4Mep4IU68eya')
            .then((result) => {
                if (result.text) {
                    swal("Email send success fully!");

                };
            }, (error) => {
                if (error.text) {
                    swal("Soothing is roang please try again!");
                };
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto mt-8">
            <label className="block font-semibold">Name</label>
            <input type="text" name="user_name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />

            <label className="block font-semibold mt-4">Email</label>
            <input type="email" name="user_email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />

            <label className="block font-semibold mt-4">Message</label>
            <textarea name="message" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />

            <div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex justify-center items-center font-semibold mt-3 gap-x-2"
                >
                    Send <IoMdSend />
                </button>
            </div>


        </form>
    );
};
export default ContactUs;