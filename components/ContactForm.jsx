import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Section from "./reuableComponents/Section";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await fetch("https://formspree.io/f/mgvyddzg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        resetForm();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto p-4 min-h-screen" id="contact">
      <Section Title={"Contact"} />

      <div className="flex justify-center items-center px-4">
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="py-4 w-full">
              {/* Name & Email */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00d2b5] text-gray-600 placeholder-gray-500"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex-1">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00d2b5] text-gray-600 placeholder-gray-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-4">
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00d2b5] text-gray-600 placeholder-gray-500"
                />
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Message */}
              <div className="mb-6">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d2b5] text-gray-600 placeholder-gray-500"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-transparent border-2 border-[#00d2b5] text-[#00d2b5] rounded-full hover:bg-[#00d2b5] hover:text-white transition duration-300 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
