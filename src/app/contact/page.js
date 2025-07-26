"use client";

import { useState } from "react";
import Image from "next/image";
export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [comment, setComment] = useState("");

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!name.trim()) newErrors.name = "Anda harus mengisi bidang ini";
        if (!email.trim()) newErrors.email = "Anda harus mengisi bidang ini";
        if (!phoneNumber.trim()) newErrors.phoneNumber = "Anda harus mengisi bidang ini";
        if (!subject.trim()) newErrors.subject = "Anda harus mengisi bidang ini";
        if (!comment.trim()) newErrors.comment = "Anda harus mengisi bidang ini";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitted(true);
        } else {
            setTimeout(() => {
                setErrors({});
            }, 1500);
        }
    };

    const inputClass = (field) =>
        `w-full bg-transparent text-sm rounded-md px-3 py-2 border transition duration-300 shadow-sm h-13 mb-4
        ${errors[field] ? "border-red-500 placeholder-red-500 text-red-500" : "border-slate-200 text-slate-700 placeholder:text-slate-400"}
        focus:outline-none focus:border-slate-400 hover:border-slate-300`;

    return (
        <>
            <section className="w-full relative h-[600px] overflow-hidden mb-10">
                <Image
                    src="/contact-hero.png"
                    alt="contact hero"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top"}}
                    priority
                />
                {/* Overlay opacity */}
                <div className="absolute inset-0 bg-black/50 z-10" /> 

                <div className="absolute inset-0 flex items-center justify-start pl-20 z-20">
                    <div className="text-right">
                        <h2 className="text-white text-4xl font-bold leading-snug drop-shadow-md">
                            Kontak Kami
                        </h2>
                    </div>
                </div>
            </section>
            <section className="container mx-auto h-min-[760px] px-4 md:px-12 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Kiri: Informasi kantor */}
                    <div className="px-20">
                        <h1 className="font-bold text-2xl mb-4">PT Lingga Jaya Perkasa Line</h1>
                        <p className="mb-4 text-base">
                            Jl. Raya Suralaya No. 09 Link. Pulorida Kel. Lebakgede, Kec. Pulomerak, Kota Cilegon, Banten, Indonesia
                        </p>
                        <p className="text-base mb-1">Phone: 0254-574246</p>
                        <p className="text-base mb-4">Fax: 0254-574542</p>
                    </div>

                    {/* Kanan: Form */}
                    <div className="w-full px-8">
                        {!isSubmitted ? (
                            <>
                                <h1 className="font-bold text-center text-2xl mb-4">Hubungi Kami</h1>

                                <form onSubmit={handleSubmit}>
                                    <label className="pl-2">Name</label>
                                    <input
                                        className={inputClass("name")}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={errors.name || "Masukkan nama Anda"}
                                    />

                                    <label className="pl-2">Email</label>
                                    <input
                                        type="email"
                                        className={inputClass("email")}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={errors.email || "Masukkan email Anda"}
                                    />

                                    <label className="pl-2">No Telepon</label>
                                    <input
                                        type="number"
                                        className={inputClass("phoneNumber")}
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        placeholder={errors.phoneNumber || "Masukkan nomor telepon Anda"}
                                    />

                                    <label className="pl-2">Subjek</label>
                                    <input
                                        className={inputClass("subject")}
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        placeholder={errors.subject || "Masukkan subjek"}
                                    />

                                    <label className="pl-2">Komentar</label>
                                    <textarea
                                        className={`${inputClass("comment")} h-20`}
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder={errors.comment || "Masukkan komentar"}
                                    />

                                    <button
                                        type="submit"
                                        className="mt-6 bg-[#E8C547] text-sm font-semibold text-white px-6 py-2 rounded-md shadow hover:scale-105 transition w-30 block mx-auto md:mx-0"
                                    >
                                    Kirim
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center px-15">
                                <h4 className="text-2xl font-bold mb-2">Get In Touch</h4>
                                <p className="text-base mb-4">
                                    Tim kami akan sangat senang mendengar pendapat anda!
                                </p>
                                <p>
                                    Terima kasih telah menghubungi kami! Kami akan segera menghubungi anda.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}