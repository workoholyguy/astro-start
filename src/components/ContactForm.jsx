import { useState } from "preact/hooks";
// import { GradientText } from "astro-boilerplate-components";

const ContactForm = ({ redirectUrl = "/" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErr("");

    try {
      const form = e.target;
      const formData = new FormData(form);

      const response = await fetch("https://formsubmit.co/el/kiyiwe", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        window.location.href = redirectUrl;
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setErr("Failed to send message. Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      action="https://formsubmit.co/el/kiyiwe"
      method="POST"
      target="_blank"
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6"
    >
      <h2 className="text-center text-3xl font-bold">
        Let's Build You <br />
        <>an Awesome Web-Site!</>
      </h2>

      <input type="hidden" name="_next" value={redirectUrl} />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_subject"
        value="New Contact Form Submission!"
      />
      <input type="hidden" name="_cc" value="your@email.com" />
      <input
        type="hidden"
        name="_autoresponse"
        value="Thank you for reaching out! We will get back to you soon."
      />

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-500"
        >
          Name (required)
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-500"
        >
          Phone (required)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm"
          placeholder="(123) 456-7890"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-500"
        >
          Email (required)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-500"
        >
          Message (required)
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm"
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="attachment"
          className="block text-sm font-medium text-gray-500"
        >
          Attach a file (optional)
        </label>
        <input
          type="file"
          id="attachment"
          name="attachment"
          accept="image/png, image/jpeg, application/pdf"
          className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm"
        />
      </div>

      {err && <p className="text-sm text-red-600">{err}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export { ContactForm };
