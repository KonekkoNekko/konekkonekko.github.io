import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <div className="flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/muhammad-nabiel-setiawan-b94932259/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/KonekkoNekko">
              <FaGithub />
            </a>
            <a href={`https://wa.me/${CONTACT.phoneNo}`}>
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/nabiel_setiawan/">
              <FaInstagram />
            </a>
          </div>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
