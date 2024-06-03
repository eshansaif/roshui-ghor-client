import React from 'react';

const ContactUs = () => {
    return (
        <div className="py-8 px-4 md:px-12 lg:px-24">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-8">
                We would love to hear from you! If you have any questions or feedback about our recipes, or if you just want to say hello, please fill out the form below and we will get back to you as soon as possible.
            </p>
            <form className="flex flex-col">
                <label htmlFor="name" className="font-bold mb-2">Name:</label>
                <input type="text" name="name" id="name" className="border border-gray-400 px-2 py-1 mb-4" required />
                <label htmlFor="email" className="font-bold mb-2">Email:</label>
                <input type="email" name="email" id="email" className="border border-gray-400 px-2 py-1 mb-4" required />
                <label htmlFor="message" className="font-bold mb-2">Message:</label>
                <textarea name="message" id="message" rows="5" className="border border-gray-400 px-2 py-1 mb-4" required></textarea>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Send</button>
            </form>
        </div>
    );
};

export default ContactUs;
