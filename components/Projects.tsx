"use client";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    title: "Website Tester",
    company: "UPT-TIK ITENAS",
    category: "Work Experience",
    description: "Menguji fungsionalitas dan performa website SISTA, menyusun laporan hasil uji, serta membuat dokumentasi BRD untuk kebutuhan sistem.",
    tags: ["SISTA", "BRD", "Testing"],
    icon: <FiCheckCircle />,
    images: ["/images/projects/test2.jpg", "/images/projects/test3.jpg"],
  },
  {
    title: "Website Al Mubarokah",
    category: "Web Development",
    description: "Membangun platform informasi sekolah menggunakan framework Laravel serta mendesain antarmuka menggunakan Figma dan Draw.io.",
    tags: ["PHP", "Laravel", "Figma"],
    icon: <FiExternalLink />,
    images: ["/images/projects/SIP-7.jpg", "/images/projects/SIP-2.jpg"],
  },
  {
    title: "Drakor Recommendation System",
    category: "Data Science",
    description: "Mengembangkan sistem rekomendasi berdasarkan pola rating pengguna menggunakan Python dan metode Collaborative Filtering.",
    tags: ["Python", "ML", "Pearson"],
    icon: <FiGithub />,
    images: ["/images/projects/4.jpg", "/images/projects/2.jpg"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-30 bg-[#05070A] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="container mx-auto">
        <div className="mb-24">
          <h2 className="text-yellow-500 font-medium tracking-[0.2em] mb-4 uppercase text-xs">Selected Works</h2>
          <h1 className="text-6xl md:text-8xl font-bold italic tracking-tighter uppercase text-white leading-none">
            MY <span className="text-gray-500 font-normal">PROJECTS</span>
          </h1>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, index) => (
            <div key={index} className="py-20 border-b border-white/10 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Bagian Kiri: Nomor & Judul (Style Experience) */}
                <div className="lg:col-span-5">
                  <div className="flex items-baseline gap-6 mb-6">
                    <span className="text-gray-600 font-bold text-xl uppercase tracking-tighter">0{index + 1}</span>
                    <h3 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight italic group-hover:text-yellow-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="pl-12">
                    <p className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-sm mb-2">
                      {project.category}
                    </p>
                    {project.company && (
                      <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">@ {project.company}</p>
                    )}
                  </div>
                </div>

                {/* Bagian Tengah: Deskripsi & Tags */}
                <div className="lg:col-span-3">
                  <span className="text-white/20 font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">
                    Overview
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-500 uppercase font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bagian Kanan: 2 Foto Grid (Style Experience) */}
                <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                    <Image 
                      src={project.images[0]} 
                      alt={project.title} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-2xl mt-8">
                    <Image 
                      src={project.images[1]} 
                      alt={project.title} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
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