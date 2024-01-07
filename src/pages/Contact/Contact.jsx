
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ktexr9w',
            'template_33npnkp',
            form.current,
            'B8T8yiI5aCfiQrANA'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <form ref={form} onClick={sendEmail} className="space-y-8">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" name='form_name' placeholder="Gul Gappa" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@gmail.com" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                            <textarea name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300" required placeholder="Leave a comment..."></textarea>
                        </div>
                        <div className="w-full">
                            <button type="submit" className="text-white btn btn-success w-full">Send message</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;