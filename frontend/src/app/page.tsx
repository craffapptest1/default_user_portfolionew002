import Link from "next/link";
import Image from "next/image";
import { FaUser, FaCode, FaRocket, FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 text-center relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="relative mb-8">
              <Image 
                src="https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAyNDMyNjB8&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Professional portfolio hero" 
                width={200} 
                height={200} 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105" 
                priority 
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
                Welcome to My Portfolio
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-lg leading-relaxed animate-fade-in-delay">
                Crafting digital experiences through innovative design and development. 
                Let's bring your ideas to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <FaRocket className="mr-2" />
                View My Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
              >
                <FaEnvelope className="mr-2" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
              What I Do Best
            </h2>
            <p className="max-w-[85%] text-gray-600 md:text-xl/relaxed">
              Combining creativity with technical expertise to deliver exceptional results
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-200 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1">
              <div className="p-4 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                <FaCode className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Development</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Building responsive, performant web applications with modern technologies 
                and best practices
              </p>
            </div>
            <div className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-200 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-purple-300 hover:-translate-y-1">
              <div className="p-4 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300">
                <FaUser className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">UI/UX Design</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Creating intuitive user experiences through thoughtful design 
                and user-centered approach
              </p>
            </div>
            <div className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-200 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-green-300 hover:-translate-y-1">
              <div className="p-4 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
                <FaRocket className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Strategy</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Transforming ideas into successful digital solutions through 
                strategic planning and execution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
              Featured Projects
            </h2>
            <p className="max-w-[85%] text-gray-600 md:text-xl/relaxed">
              A showcase of my recent work and creative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <Image 
                src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAyNDMyNjJ8&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Featured project 1" 
                width={500} 
                height={300} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold mb-1">Project One</h3>
                <p className="text-sm text-gray-200">Modern web application</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <Image 
                src="https://images.unsplash.com/photo-1728722740555-9c523d21bccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAyNDMyNjN8&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Featured project 2" 
                width={500} 
                height={300} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold mb-1">Project Two</h3>
                <p className="text-sm text-gray-200">Creative design solution</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gray-900 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  About Me
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm a passionate developer and designer who loves creating digital experiences 
                  that make a difference. With expertise in modern web technologies and a keen 
                  eye for design, I help bring ideas to life.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge with the developer community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:scale-105"
                  >
                    Learn More About Me
                  </Link>
                  <Link
                    href="/resume"
                    className="inline-flex h-12 items-center justify-center rounded-full border-2 border-gray-300 bg-white px-6 text-sm font-medium text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:scale-105"
                  >
                    <FaDownload className="mr-2" />
                    Download Resume
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1501349800519-48093d60bde0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAyNDMyNjR8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="About me" 
                  width={400} 
                  height={500} 
                  className="w-full rounded-xl shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[58rem] flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Let's Work Together
            </h2>
            <p className="max-w-[85%] text-blue-100 md:text-xl/relaxed">
              Ready to bring your next project to life? I'd love to hear about your ideas 
              and discuss how we can make them reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-blue-600 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105"
              >
                <FaEnvelope className="mr-2" />
                Start a Conversation
              </Link>
              <div className="flex gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 hover:bg-white/30 hover:scale-110"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 hover:bg-white/30 hover:scale-110"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}