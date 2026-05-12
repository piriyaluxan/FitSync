"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess("Message sent successfully!");
      e.currentTarget.reset();
    } else {
      setSuccess("Something went wrong!");
    }
  }

  return (
    <main className="container mx-auto px-4 py-24 max-w-2xl">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-muted-foreground mt-3">
        Have questions? We’re here to help.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-4 border rounded-2xl p-6"
      >
        <input
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded-xl"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-xl"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-3 rounded-xl h-32"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground py-3 rounded-xl"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-center text-sm mt-3 text-muted-foreground">
            {success}
          </p>
        )}
      </form>
    </main>
  );
}
