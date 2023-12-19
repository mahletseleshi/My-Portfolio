import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_is07k8l",
        "template_myufr2e",
        form.current,
        "4xM7U3FFHE8wW9EQC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Thank you, Message Sent")
          e.target.reset
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Contact" className="relative flex-col items-center justify-center  overflow-hidden mt-[200px] h-screen ">
      <div className="absolute inset-0 bg-[#0F2A3D] skew-y-6 w-full h-screen"></div>
      <div className="relative flex flex-col items-center space-y-24 justify-center">
        <div className="pt-[50px]">
          <h1 className="text-[32px]  flex items-center justify-center text-Yellow mt-10 z-10">
            CONTACT
          </h1>
          <h1 className="text-[70px] pt-[50px] group flex items-center justify-center absolute ml-[-100px]   text-Yellow/20 -top-7 mt-10 text-Yellow z-10">
            CONTACT
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-32  gap-10">
          <div className="w-[80%] md:w-[50%] space-y-8 text-white">
            <h2 className="text-7xl font-Signature text-Yellow">Lets Talk</h2>
            <p>
              Ready to turn ideas into reality or have a project in mind? I
              would love to hear from you. Lets collaborate and create something
              extraordinary together.
            </p>
            <p className="text-Yellow">🚀 Start Your Project Now!</p>
            <p>
              Whether you have questions, ideas, or just want to say hello, I am
              here.
            </p>
            <p>Lets make your vision come to life!</p>

            <div></div>
          </div>

          <div className="text-white bg-white/10 px-6 py-8 rounded-md w-[70%] md:w-[35%]">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold">Name</label>
                <input
                 name= "from_name"
                  type="text"
                  className="w-full p-2 border  bg-white/10 border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border  bg-white/10 border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold">Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message"
                  className="w-full p-2 border bg-white/10 border-gray-300 rounded-md resize-none"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-Yellow duration-300 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="text-white/30 font-normal">
          <p>Mahlet Seleshi💛©2023 All Rights Reserved.</p>
        </div>
      </div>
      <div className="bg-[#0F2A3D] mt-[-550px] md:mt-[-300px] w-full md:h-[60%] h-[80%]"></div>
    </div>
  );
};

export default Contact;
