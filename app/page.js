import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />

      
      <section className="min-h-screen bg-gray-50 flex items-center py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I am <span className="text-red-500">Tabish</span>, <br />
              a Full Stack Developer
            </h1>

            <p className="mt-5 text-gray-600 max-w-lg">
              I build modern, confirm job-ready web applications using
              MERN Stack, Next.js, and scalable backend architectures.
            </p>

            <a
              href="mailto:tabisoomro7861@gmail.com"
              className="inline-block mt-6 bg-red-500 text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition"
            >
              Email Me
            </a>

            <div className="mt-8 text-sm text-gray-600 space-y-2">
              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/tabish-ali-6922a13a0/"
                  target="_blank"
                  className="text-red-500 hover:underline"
                >
                  View Profile
                </a>
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                <a
                  href="https://github.com/Tabish07-dev"
                  target="_blank"
                  className="text-red-500 hover:underline"
                >
                  github.com/Tabish07-dev
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                tabisoomro7861@gmail.com
              </p>
              <p>
                <span className="font-semibold">Contact:</span> 0313-3196759
              </p>
            </div>
          </div>

       
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 sm:w-72 md:w-[320px] h-80 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/tabi07.jpeg"
                alt="Tabish Ali - Full Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

     
      <section id="about" className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        
          <div className="relative">
            <span className="absolute left-0 top-0 h-12 w-1 bg-red-500"></span>
            <p className="pl-5 text-sm uppercase tracking-widest text-gray-400 mb-4">
              — My Background
            </p>
            <p className="pl-5 text-gray-700 leading-relaxed text-base">
              I am a passionate{" "}
              <span className="font-semibold text-gray-900">
                MERN Stack Developer
              </span>{" "}
              focused on building modern, scalable, and high-performance web
              applications using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript,
              MongoDB, Express.js, React.js, Node.js, and Next.js.
            </p>
            <p className="pl-5 mt-4 text-gray-700 leading-relaxed text-base">
              I specialize in creating complete full-stack solutions — from clean,
              responsive frontends to secure and scalable backend architectures.
            </p>
            <p className="pl-5 mt-4 text-gray-700 leading-relaxed text-base">
              My GitHub showcases hands-on projects where I consistently apply
              modern tools and best practices to build production-ready web
              applications.
            </p>
          </div>

        
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
              — Skills
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-base">
              <li className="skill-item hover:bg-red-600 px-2 py-1 rounded-md">HTML & CSS</li>
              <li className="skill-item hover:bg-red-600 px-2 py-1 rounded-md">Bootstrap</li>
              <li className="skill-item hover:bg-red-600 px-2 py-1 rounded-md">Tailwind CSS</li>
              <li className="skill-item hover:bg-red-600 px-2 py-1 rounded-md">JavaScript (ES6+)</li>
              <li className="skill-item hover:bg-red-600 px-2 py-1 rounded-md">React.js</li>
              <li className="skill-item hover:bg-red-600 px-2 py-1 rounded-md">Next.js</li>
              <li className="skill-item hover:bg-red-600 px-2 py-1 rounded-md">Node.js</li>
              <li className="skill-item hover:bg-red-600 px-2 py-1 rounded-md">Express.js</li>
              <li className="skill-item hover:bg-red-600 px-2 py-1 rounded-md">MongoDB</li>
              <li className="skill-item hover:bg-red-600 px-2 py-1 rounded-md">Git & GitHub</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="bg-slate-50 flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 px-6 py-12">
        {[ "/tabi07.jpeg", "/tabi08.png", "/tabi09.jpeg"].map((src, i) => (
          <div key={i} className="flex-1 max-w-[340px] rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <Image
              src={src}
              alt={`Image ${i+1}`}
              width={340}
              height={420}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>

      <section id="experience" className="bg-neutral-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Work Experience
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
            Full Stack Developer
          </h2>
          <p className="text-gray-500 mb-6">Freelance / Remote</p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            I am a Full Stack Developer with hands-on experience in designing, developing,
            and deploying modern web applications. I work across both frontend and backend,
            building scalable, secure, and performance-focused solutions tailored to real
            business needs.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            My expertise includes creating responsive user interfaces using React.js
            and Next.js, developing robust backend APIs with Node.js and Express.js, and
            managing data with MongoDB.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            To maintain transparency and showcase my work, I have made several of my
            projects and code repositories publicly available. Check my GitHub:
            <a
              href="https://github.com/Tabish07-dev"
              target="_blank"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              github.com/Tabish07-dev
            </a>
          </p>
        </div>
      </section>

      
      <section className="relative h-[420px] flex items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/tabi10.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl text-center text-white px-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed mb-6">
            “I believe every problem already carries its own solution.
            The challenge is not fear, but focus — once you commit to solving it,
            the path always reveals itself.”
          </p>
          <span className="block text-sm uppercase tracking-widest text-gray-300">
            — Full Stack Developer Mindset
          </span>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
