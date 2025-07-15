import Link from "next/link";
import Image from "next/image";
import { FiCode, FiUser, FiMail, FiExternalLink } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1665674613803-be933fd4cd1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTI1Nzc0MTZ8&ixlib=rb-4.1.0&q=80&w=1080"
                alt="professional web developer working on portfolio projects in modern workspace"
                width={200}
                height={200}
                className="rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Welcome to My Portfolio
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl leading-relaxed">
                A minimalist showcase of my work, skills, and passion for creating digital experiences
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What I Offer
            </h2>
            <p className="max-w-[85%] text-gray-600 md:text-xl/relaxed">
              Simple, focused solutions for your digital needs
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-indigo-200 hover:-translate-y-1">
              <div className="p-4 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                <FiCode className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Development</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Clean, efficient code for web applications and responsive designs
              </p>
            </div>
            <div className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-indigo-200 hover:-translate-y-1">
              <div className="p-4 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                <FiUser className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Consultation</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Strategic guidance for your digital projects and technical decisions
              </p>
            </div>
            <div className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-indigo-200 hover:-translate-y-1">
              <div className="p-4 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                <FiMail className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Support</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Ongoing maintenance and support for your digital solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Featured Work
              </h2>
              <p className="text-gray-600 md:text-xl">
                A selection of my recent projects
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1561043379-98d0e978418f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTI1Nzc0MjF8&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="modern web application dashboard with clean interface design"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Web Application</h3>
                  <p className="text-sm text-gray-200">Modern dashboard design</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1570841512628-a93d7bc5aaf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTI1Nzc0MjN8&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="responsive mobile app interface showcasing user experience design"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Mobile Design</h3>
                  <p className="text-sm text-gray-200">Responsive user interface</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200"
              >
                View All Projects
                <FiExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                About Me
              </h2>
              <p className="text-gray-600 md:text-xl">
                Passionate about creating meaningful digital experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1720969835740-49346b3fb9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTI1Nzc0MjZ8&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="professional developer portrait in modern office environment"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  I'm a dedicated developer with a passion for creating clean, efficient solutions. 
                  My approach focuses on understanding your needs and delivering results that exceed expectations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    <span className="text-gray-700">Web Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    <span className="text-gray-700">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    <span className="text-gray-700">Technical Consulting</span>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200"
                >
                  Learn More About Me
                  <FiExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[58rem] flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Let's Work Together
            </h2>
            <p className="max-w-[85%] text-indigo-100 md:text-xl/relaxed">
              Ready to bring your ideas to life? I'd love to hear about your project.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-indigo-600 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Start a Conversation
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}