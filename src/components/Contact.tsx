import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_zj7nto8";
    const templateID = "template_9p6h6ol"; // Your actual template ID
    const publicKey = "ggNEBPaq6Iggy3nRZ";

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email, // For setting Reply-To header to sender's email
    };

    emailjs
      .send(serviceID, templateID, emailParams, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setSubmitMessage("Thank you for your message! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSubmitMessage("");
        }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setIsSubmitting(false);
        setSubmitMessage("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                I'm currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <a
                    href="mailto:manishkumar80819@gmail.com"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    manishkumar80819@gmail.com
                  </a>
                </div>

                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-blue-600 mr-3" />
                  <a
                    href="https://linkedin.com/in/manishsingh0418"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    linkedin.com/in/manishsingh0418
                  </a>
                </div>

                <div className="flex items-center">
                  <Github className="h-5 w-5 text-blue-600 mr-3" />
                  <a
                    href="https://github.com/manishsingh0418"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    github.com/manishsingh0418
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitMessage && (
                  <p className="text-green-600 text-center">{submitMessage}</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
