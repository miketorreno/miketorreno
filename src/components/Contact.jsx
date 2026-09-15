import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honey: "",
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const sanitize = (value) => value.replace(/[<>]/g, "").trim();

  const validate = () => {
    const nextErrors = {};
    const name = sanitize(formData.name);
    const email = sanitize(formData.email);
    const message = formData.message.trim();

    if (!name) {
      nextErrors.name = "Name is required.";
    } else if (name.length > 50) {
      nextErrors.name = "Name must be 50 characters or fewer.";
    }

    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      nextErrors.message = "Message is required.";
    } else if (message.length > 1000) {
      nextErrors.message = "Message must be 1000 characters or fewer.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatusMessage("");

    if (formData.honey) {
      setStatusMessage("Spam detected. Submission blocked.");
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage("Please fix the errors and try again.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio contact from ${sanitize(formData.name)}`,
    );
    const body = encodeURIComponent(
      `${sanitize(formData.message)}\n\n${sanitize(formData.name)}\n${sanitize(formData.email)}`,
    );

    window.location.href = `mailto:miketorreno7@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      id="contact"
      className="w-full mb-16 scroll-mt-16 md:mb-24s lg:mb-36s lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-bold uppercase tracking-widest text-sky-300 lg:sr-only">
          Get in Touch
        </h2>
      </div>

      <form className="p-6 max-w-md mx-auto" noValidate onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            maxLength={50}
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="border-1 border-sky-300 px-4 py-2 outline-none transition-all duration-200 focus:ring-sky-500"
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-rose-400">
              {errors.name}
            </p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            maxLength={254}
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="border-1 border-sky-300 px-4 py-2 outline-none transition-all duration-200 focus:ring-sky-500"
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-rose-400">
              {errors.email}
            </p>
          )}

          <textarea
            name="message"
            placeholder="Message"
            maxLength={1000}
            rows={6}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="border-1 border-sky-300 px-4 py-2 outline-none transition-all duration-200 focus:ring-sky-500"
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-rose-400">
              {errors.message}
            </p>
          )}

          <input
            type="text"
            name="honey"
            value={formData.honey}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <button
            type="submit"
            className="rounded-lg border-none bg-sky-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-sky-600 hover:cursor-pointer"
          >
            Send
          </button>

          {statusMessage && (
            <p className="text-sm text-slate-200" aria-live="polite">
              {statusMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
