const Contact = () => {
  return (
    <div className="max-w-lg mx-auto p-8">
      <form className="space-y-6 animate-fadeIn" action="#" method="POST">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-veryDarkBlue"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full border-grayishBlue p-2 rounded-sm shadow-lg focus:ring-veryDarkBlue focus:border-veryDarkBlue"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-veryDarkBlue"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border-grayishBlue p-2 rounded-sm shadow-lg focus:ring-veryDarkBlue focus:border-veryDarkBlue"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-veryDarkBlue"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              name="message"
              id="message"
              required
              className="w-full border-grayishBlue p-2 rounded-sm shadow-lg focus:ring-veryDarkBlue focus:border-veryDarkBlue"
            ></textarea>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-softBlue hover:bg-grayishBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-softBlue"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
