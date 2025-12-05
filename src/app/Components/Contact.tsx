"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  message: Yup.string().required("Message required"),
});

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => setStatus("Message sent successfully! "),
        (error) => setStatus("Failed to send : " + error.text)
      );
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold text-center"
        >
          Contact Me
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 text-center mt-2"
        >
          Have a project or inquiry? Let’s talk!
        </motion.p>

        {/* Formik Form */}
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={(values, { resetForm }) => {
            sendEmail();
            resetForm();
          }}
        >
          {() => (
            <Form
              ref={formRef}
              className="space-y-6 mt-10 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl"
            >
              {/* Name */}
              <div>
                <Field
                  name="name"
                  placeholder="Your name"
                  className="w-full p-3 rounded-lg bg-bg border border-white/10 
                             focus:outline-none focus:border-primary transition"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-400 mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <Field
                  name="email"
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg bg-bg border border-white/10 
                             focus:outline-none focus:border-primary transition"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-400 mt-1"
                />
              </div>

              {/* Message */}
              <div>
                <Field
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full p-3 rounded-lg bg-bg border border-white/10 
                             focus:outline-none focus:border-primary transition"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-sm text-red-400 mt-1"
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-black 
                           font-semibold shadow-lg hover:bg-primary/90 transition cursor-pointer"
              >
                Send Message
              </motion.button>
            </Form>
          )}
        </Formik>

        {/* Status Message */}
        {status && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center mt-5 font-medium ${status.includes("successfully")
                ? "text-green-400"
                : "text-red-400"
              }`}
          >
            {status}
          </motion.p>
        )}
      </div>
    </section>
  );
}
