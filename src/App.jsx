import { motion as Motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaXTwitter,
  FaEnvelope,
  FaSpotify
} from "react-icons/fa6";

export default function Home() {
  return (
    <Motion.main role="main"
      className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center px-4 sm:px-6 py-12 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Motion.h1
        className="text-3xl sm:text-5xl font-bold text-center mb-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hey, I'm Demetre
      </Motion.h1>

      <Motion.p
        className="text-sm sm:text-base text-neutral-500 tracking-wide italic text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Frontend enthusiast • Debugger of chaos • Pixel perfectionist
      </Motion.p>

      <Motion.p
        className="text-neutral-400 text-lg sm:text-xl text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm just making things. Find me here:
      </Motion.p>

      <Motion.div
        className="grid grid-cols-3 sm:flex gap-6 text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="https://www.linkedin.com/in/demetre-gatchava-861447378/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-transform transform hover:scale-110 duration-200 cursor-pointer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/dziem.3e"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-transform transform hover:scale-110 duration-200 cursor-pointer"
          aria-label="Instagram profile"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/Namunamu23"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-transform transform hover:scale-110 duration-200 cursor-pointer"
          aria-label="GitHub profile"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Dgatchava"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-transform transform hover:scale-110 duration-200 cursor-pointer"
          aria-label="Twitter profile"
          title="X"
        >
          <FaXTwitter />
        </a>
        <a
          href="mailto:gachavademetre1@gmail.com"
          className="hover:text-red-400 transition-transform transform hover:scale-110 duration-200 cursor-pointer"
          aria-label="Email Namu Nami"
          target="_blank" rel="noopener noreferrer"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://open.spotify.com/user/31hc6yprcgvwn32uybgrap6rwvqi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-transform transform hover:scale-110 duration-200 cursor-pointer"
          aria-label="Spotify profile"
          title="Spotify"
        >
          <FaSpotify />
        </a>

      </Motion.div>
    </Motion.main>
  );
}