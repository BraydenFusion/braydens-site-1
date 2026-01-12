"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "US",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("https://hook.us1.make.com/ky7lo8srgbhqhj0z29gyfrx8w4kjpsiw", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    countryCode: "US",
                    phone: "",
                    message: "",
                });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto text-gray-600">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-black font-semibold">
                        Contact
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Get in touch
                    </p>
                    <p>
                        We&apos;d love to hear from you! Please fill out the form below.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div className="flex flex-col gap-y-5 gap-x-6 sm:flex-row [&>*]:w-full">
                            <div>
                                <label htmlFor="firstName" className="font-medium">
                                    First name
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="font-medium">
                                    Last name
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="font-medium">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2 z-10">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="text-sm bg-transparent outline-none rounded-lg h-full"
                                    >
                                        <option value="US">US</option>
                                        <option value="ES">ES</option>
                                        <option value="MR">MR</option>
                                    </select>
                                </div>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+1 (555) 000-000"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                            ></textarea>
                        </div>
                        {submitStatus === "success" && (
                            <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
                                Something went wrong. Please try again later.
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-4 py-2 text-white font-medium bg-black hover:bg-gray-800 active:bg-black rounded-lg duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

