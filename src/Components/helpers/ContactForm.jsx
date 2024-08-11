import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ContactForm = () => {
  const [sendMsg, setSendMsg] = useState(false);
  const Contactform = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSendMsg(true);
    emailjs
      .sendForm("service_92r77k7", "template_8g4f7fr", Contactform.current, {
        publicKey: "ahUscYn9GEt-t62Mr",
      })
      .then(
        () => {
          toast.success("Message Sent!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
            transition: Bounce,
          });
          setSendMsg(false);
          form.reset();
        },
        (error) => {
          toast.error(error.text, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
            transition: Bounce,
          });
          setSendMsg(false);
        }
      );
  };
  return (
    <form
      action=""
      className="contact-form flex flex-1 flex-col gap-3 w-full  "
      onSubmit={sendEmail}
      ref={Contactform}
      name="form"
    >
      <div className="input-field">
        <input
          type="name"
          placeholder="Name"
          className="p-4 bg-lightestnavy text-white font-primary w-full h-full outline-none border-none rounded-md"
          name="from_name"
          required
        />
      </div>
      <div className="input-field">
        <input
          type="email"
          placeholder="Email"
          className="p-4 bg-lightestnavy text-white  font-primary w-full h-full outline-none border-none rounded-md"
          name="reply_to"
          required
        />
      </div>
      <div className="input-field">
        <input
          type="alphanumeric"
          placeholder="Phone"
          className="p-4 bg-lightestnavy text-white font-primary w-full h-full outline-none border-none rounded-md"
          name="phone"
          required
        />
      </div>
      <div className="input-field">
        <textarea
          type="text"
          placeholder="Message"
          className="p-4 bg-lightestnavy text-white font-primary w-full h-full outline-none border-none rounded-md"
          name="message"
          required
        />
      </div>
      <div className="input-field">
        <button
          type="submit"
          disabled={sendMsg}
          className="p-2 cursor-pointer bg-green font-primary w-full h-full  rounded-md text-navy font-medium"
        >
          {sendMsg ? (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-5 h-5  text-green animate-spin"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#2A2A2A"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
