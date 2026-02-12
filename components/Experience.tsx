"use client";
import { FiAward } from "react-icons/fi";
import Image from "next/image";

const experiences = [
  {
    title: "Kepala Divisi Olahraga dan Esport",
    organization: "HMSI ITENAS",
    period: "2022 – 2023",
    description: [
      "Mengelola kegiatan olahraga dan turnamen e-sport antar mahasiswa Sistem Informasi.",
      "Bertanggung jawab atas koordinasi tim dan pelaksanaan event divisi secara menyeluruh."
    ],
    icon: <FiAward />,
    type: "Organization",
    images: ["/images/experience/hmsi1.JPG", "/images/experience/hmsi2.JPG"],
    color: "bg-blue-600/10"
  },
  {
    title: "Ketua UKM Karate",
    organization: "ITENAS",
    period: "2023 – 2024",
    description: [
      "Mengadakan latihan rutin dan koordinasi kompetisi karate antar universitas.",
      "Mengelola administrasi dan pengembangan anggota UKM Karate ITENAS."
    ],
    icon: <FiAward />,
    type: "Organization",
    images: ["/images/experience/karate1.jpg", "/images/experience/karate2.jpg"],
    color: "bg-red-600/10"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-30 bg-[#05070A] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="container mx-auto">
        <div className="mb-24">
          <h2 className="text-yellow-500 font-medium tracking-[0.2em] mb-4 uppercase text-xs">Career Journey</h2>
          <h1 className="text-6xl md:text-8xl font-bold italic tracking-tighter uppercase text-white leading-none">
            EXPERI<span className="text-gray-500 font-normal">ENCE</span>
          </h1>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {experiences.map((exp, index) => (
            <div key={index} className="py-20 border-b border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Bagian Kiri: Nomor & Judul (Span 5) */}
                <div className="lg:col-span-5">
                  <div className="flex items-baseline gap-6 mb-6">
                    <span className="text-gray-600 font-bold text-xl uppercase tracking-tighter">0{index + 1}</span>
                    <h3 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight italic">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="pl-12">
                    <p className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-sm mb-2">{exp.organization}</p>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">{exp.period}</p>
                  </div>
                </div>

                {/* Bagian Tengah: Deskripsi (Span 3) */}
                <div className="lg:col-span-3">
                  <span className="text-white/20 font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">
                    Responsibility
                  </span>
                  <ul className="space-y-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-4 text-gray-400 text-sm leading-relaxed">
                        <span className="text-yellow-500 font-bold">/</span> {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bagian Kanan: 2 Foto Grid (Span 4) */}
                <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                    <Image 
                      src={exp.images[0]} 
                      alt={`${exp.title} 1`} 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-2xl mt-8">
                    <Image 
                      src={exp.images[1]} 
                      alt={`${exp.title} 2`} 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}