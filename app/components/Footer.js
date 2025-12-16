export default function Footer() {
  return (
<footer id="contact" className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white">
  <div className="max-w-7xl mx-auto px-6 py-16">
    
    <div className="grid md:grid-cols-3 gap-12">
    
      <div>
        <h2 className="text-3xl font-extrabold tracking-wide">
          Tabish Ali
        </h2>
        <p className="mt-3 text-indigo-100 text-lg">
          MERN Stack Developer
        </p>

        <p className="mt-6 text-indigo-200 max-w-sm leading-relaxed">
          Passionate about building modern, scalable web applications using
          MongoDB, Express, React & Node.js.
        </p>
      </div>

     
      <div>
        <h3 className="uppercase tracking-widest text-sm font-semibold text-indigo-200 mb-5">
          Socials
        </h3>

        <ul className="space-y-3">
          <li>
            <a
              href="https://www.linkedin.com/in/tabish-ali-6922a13a0/"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Tabish07-dev"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

    
      <div>
        <h3 className="uppercase tracking-widest text-sm font-semibold text-indigo-200 mb-5">
          Contact
        </h3>

        <ul className="space-y-3 text-indigo-100">
          <li>
            <a
              href="mailto:tabisoomro7861@gmail.com"
              className="hover:text-white transition"
            >
              tabisoomro7861@gmail.com
            </a>
          </li>
          <li>
            <a
              href="tel:03133196759"
              className="hover:text-white transition"
            >
              0313-3196759
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div className="border-t border-white/20 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-indigo-200">
      <p>© {new Date().getFullYear()} Tabish Ali. All rights reserved.</p>

      <p className="mt-3 md:mt-0">
        Built with ❤️ using MERN Stack
      </p>
    </div>

  </div>
</footer>
  );
}
