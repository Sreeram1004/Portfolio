import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const Contact = () => (
  <section id="contact" className="py-10">
    <h1 className="text-5xl font-bold text-center mb-8">Contact Me</h1>
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-wrap justify-center gap-6">
      <a href="mailto:sreeramangina@gmail.com" className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md">
        <FaEnvelope className="text-2xl" />sreeramangina@gmail.com
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md">
        <FaLinkedin className="text-2xl" /> LinkedIn
      </a>
      <a href="https://github.com/Sreeram1004" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md">
        <FaGithub className="text-2xl" /> GitHub
      </a>
      <a href="https://wa.me/9160956210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md">
        <FaWhatsapp className="text-2xl" /> WhatsApp
      </a>
    </div>
  </section>
);
  export default Contact;