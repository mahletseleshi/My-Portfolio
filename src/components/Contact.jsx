







const Contact = () => {
  return (
    <div className="relative flex-col items-center justify-center mt-[200px] h-screen ">
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

        <div className="flex items-start justify-between px-32 mb-[1000px] gap-10">
          <div className="w-[50%] space-y-8 text-white">
            <h2 className="text-7xl font-Signature text-Yellow">Lets Talk</h2>
            <p>
              Ready to turn ideas into reality or have a project in mind? I would
              love to hear from you. Lets collaborate and create something
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

          <div className="text-white bg-white/10 px-6 py-8 rounded-md w-[35%]">
            <form>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold">Name</label>
                <input
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
      </div>
    </div>
  );
};

export default Contact;
