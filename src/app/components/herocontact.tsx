// components/ContactForm.tsx
"use client"; // Use this directive if you're using hooks in the component

const ContactForm: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md animate-slide-in-bottom">
                <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-900 dark:text-gray-400 sm:text-xl p-3">
                    Got a technical issue? Want to send feedback about my portfolio? Need details about me? Please let me know. Thank you! 🤞
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Your email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="name@mail.com" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Subject
                        </label>
                        <input 
                            type="text" 
                            id="subject" 
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Let us know how I can help you" 
                            required 
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Your message
                        </label>
                        <textarea 
                            id="message" 
                            rows={6} 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="py-3 px-5 text-sm font-medium text-white bg-blue-600 rounded-lg sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
