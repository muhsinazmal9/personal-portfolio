import React, { useState } from 'react';
import { Layout } from "../layouts";
import { Transition } from '@headlessui/react';

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000); // Auto-hide message after 3 seconds
    };

    return (
        <Layout title="Contact">
            <section className="min-h-[60vh] max-w-4xl mx-auto rounded-lg space-y-8 lg:px-0 px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        Have a question or want to work together? Drop me a message below.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-emerald-500 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Transition for Success Message */}
                <Transition
                    show={formSubmitted}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="mt-4 p-4 text-center bg-green-100 border border-green-300 rounded-md text-green-700">
                        Thank you for your message! I'll get back to you soon.
                    </div>
                </Transition>
            </section>
        </Layout>
    );
};

export default Contact;