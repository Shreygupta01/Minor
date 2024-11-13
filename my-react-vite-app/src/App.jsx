import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, Briefcase, Search, Users, Calendar as CalendarIcon, MessageSquare, Sparkles, LogOut, Mail, Phone, MapPin as LocationIcon, GraduationCap, BookOpen, Users as UsersIcon, ChartBar, Globe, Linkedin, Github, Twitter } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import shreyImage from "/public/WhatsApp Image 2024-10-03 at 23.35.31_e48d3cc3.jpg"
import JobStatistics from './components/ui/jobstatistics'
import CareerGuidance from './components/careerguidance'

const mockAlumni = [
  { id: 1, name: "Priyansh Gupta", batch: 2020, job: "Software Engineer", company: "Tech Corp", location: "Indore", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alumni1-Zy9Ej5.jpg", skills: ["JavaScript", "React", "Node.js"] },
  { id: 2, name: "Devansh Goyal", batch: 2021, job: "Software Engineer", company: "Hypweb Solution", location: "Gurugram", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alumni2-Zy9Ej5.jpg", skills: ["Python", "Django", "AWS"] },
  { id: 3, name: "Shrey Gupta", batch: 2020, job: "Marketing Manager", company: "Marketing Pro", location: "Chicago, IL", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alumni3-Zy9Ej5.jpg", skills: ["Digital Marketing", "SEO", "Content Strategy"] },
  { id: 4, name: "David Brown", batch: 2019, job: "Product Manager", company: "Startup X", location: "Austin, TX", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alumni4-Zy9Ej5.jpg", skills: ["Agile", "User Research", "Wireframing"] },
]

const mockEvents = [
  { id: 1, name: "Annual Alumni Meetup", date: "2024-07-15", location: "University Campus", image: "https://lmcollege.wordpress.com/wp-content/uploads/2021/01/sonali-12333.jpg?w=395" },
  { id: 2, name: "Career Fair", date: "2024-09-22", location: "City Convention Center", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event2-Zy9Ej5.jpg" },
  { id: 3, name: "Homecoming Game", date: "2024-10-05", location: "University Stadium", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event3-Zy9Ej5.jpg" },
]


function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <style>{`
        .animated-3d-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          background: black;
          transform-style: preserve-3d;
          perspective: 1500px;
          animation: rotateGalaxy 60s linear infinite;
          z-index: -1; /* Ensure this is behind the stars and nebula */
        }

        @keyframes rotateGalaxy {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(45deg) rotateY(45deg); }
          50% { transform: rotateX(90deg) rotateY(90deg); }
          75% { transform: rotateX(135deg) rotateY(135deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        /* Stars effect with a twinkling animation */
        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 80%);
          animation: twinkleStars 3s infinite ease-in-out alternate;
          opacity: 0.8;
          z-index: -1; /* Ensure the stars appear behind the text */
        }

        @keyframes twinkleStars {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }

        /* Nebula effect with a slow moving animation */
        .nebula {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.7));
          animation: moveNebula 60s ease-in-out infinite;
          opacity: 0.7;
          z-index: -2; /* Ensure the nebula is in the background */
        }

        @keyframes moveNebula {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(5%) translateY(5%); }
          100% { transform: translateX(0) translateY(0); }
        }

        /* Marquee Text animations */
        .animate-marquee, .animate-marquee2 {
          display: inline-block;
          animation: marquee 15s linear infinite;
          color: #FFFFFF;
          font-weight: bold;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        /* Adding gradient color for text for a colorful marquee */
        .marquee-text {
          color: white;
          background-image: linear-gradient(90deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1);
          background-clip: text;
          -webkit-background-clip: text;
          font-size: 2rem;
          font-weight: bold;
          opacity: 0.7;
        }
      `}</style>

      {/* Galaxy Layer with 3D Rotation */}
      <div className="animated-3d-layer">
        <div className="stars"></div>
        <div className="nebula"></div>
      </div>

      {/* Dark overlay to enhance text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

      {/* Marquee Text with Color Animation */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden whitespace-nowrap z-10">
        <div className="inline-block animate-marquee">
          <span className="marquee-text">
            Welcome to AlumniConnect • Stay Connected • Grow Together •
          </span>
        </div>
        <div className="inline-block animate-marquee2">
          <span className="marquee-text">
            Welcome to AlumniConnect • Stay Connected • Grow Together •
          </span>
        </div>
      </div>
    </div>
  );
}

function ScrollAnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      {children}
    </motion.div>
  );
}



function Welcome3D() {
  return (
    <div className="relative h-64 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl perspective-1000">
      {/* Moving Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white transform transition-transform duration-1000 ease-out animate-move">
          Welcome to <span className="text-yellow-300">AlumniConnect</span>
        </h1>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-retro-time-recalling-the-year-of-the-alumni-association-image_194183.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-900 opacity-50"></div>

      {/* Additional Animation CSS */}
      <style jsx>{`
        .animate-move {
          animation: move 3s ease-in-out infinite alternate;
        }

        @keyframes move {
          0% {
            transform: rotateX(45deg) rotateY(45deg) scale(1);
          }
          50% {
            transform: rotateX(20deg) rotateY(-20deg) scale(1.1);
          }
          100% {
            transform: rotateX(0deg) rotateY(0deg) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}


function About() {
  const developers = [
    {
      name: <h1>SHREY GUPTA</h1>,
      image: shreyImage, // Use imported image for the local developer image
      year: "Batch of 2026",
    },
    {
      name: "SHREYANSH SHARMA",
      image: "https://example.com/jane.jpg",
      year: "Batch of 2026",
    },
    {
      name: "SHRADDHA SHARMA",
      image: "https://example.com/alice.jpg",
      year: "Batch of 2026",
    },
    {
      name: "SHREYA CHATURVEDI",
      image: "https://example.com/bob.jpg",
      year: "Batch of 2026",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white p-4">
      <ScrollAnimatedSection>
        {/* Add extra padding to move the content slightly downward */}
        <div className="pt-20 text-center">
          <h1 className="text-3xl font-bold mb-7 text-green-200">About Us</h1>
          <p className="text-lg text-black-200 max-w-2xl mx-auto mb-4">
            We are dedicated to fostering connections between current students and alumni. Our platform allows alumni to share their experiences, offer guidance.
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Join us to build a strong community that empowers every member to reach their goals and succeed in their respective fields.
          </p>
        </div>

        {/* Developer Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((developer, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-40 h-40 mb-4">
                {/* Developer Image */}
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
                {/* Overlay circle animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 rounded-full"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-xl font-bold text-blue-200">{developer.name}</h3>
              <p className="text-blue-400">{developer.year}</p>
            </motion.div>
          ))}
        </div>
      </ScrollAnimatedSection>
    </div>
  );
}








function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Contact Us</h3>
            <p className="flex items-center mb-2 text-blue-200"><Mail className="mr-2" /> info@alumniconnect.com</p>
            <p className="flex items-center mb-2 text-blue-200"><Phone className="mr-2" /> +1 (123) 456-7890</p>
            <p className="flex items-center text-blue-200"><LocationIcon className="mr-2" /> 123 University Ave, City, State 12345</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link to="/about" className="text-purple-200 hover:text-purple-100 transition-colors duration-300">About Us</Link></li>
              <li className="mb-2"><Link to="/alumni-connect" className="text-purple-200 hover:text-purple-100 transition-colors duration-300">Alumni Network</Link></li>
              <li className="mb-2"><Link to="/forum" className="text-purple-200 hover:text-purple-100 transition-colors duration-300">Discussion Forum</Link></li>
              <li><Link to="/mentorship" className="text-purple-200 hover:text-purple-100 transition-colors duration-300">Mentorship Program</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Stay Connected</h3>
            <p className="mb-4 text-pink-200">Subscribe to our newsletter for updates</p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="mr-2 bg-gray-800 text-white border-gray-700" />
              <Button type="submit" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 transition-all duration-300">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 AlumniConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function Navbar({ user, setUser }) {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-gradient-to-r from-gray-900 to-black shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold text-blue-300">AlumniConnect</Link>
        {user && (
          <div className="flex items-center space-x-4">
            <NavLink to="/alumni-connect" active={location.pathname === '/alumni-connect'}>Home</NavLink>
            <NavLink to="/forum" active={location.pathname === '/forum'}>Forum</NavLink>
            <NavLink to="/mentorship" active={location.pathname === '/mentorship'}>Mentorship</NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>About Us</NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="w-10 h-10">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to={`/alumni/${user.id}`} className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    View Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setUser(null)}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

function NavLink({ to, children, active }) {
  return (
    <Link to={to} className={`relative px-3 py-2 ${active ? 'text-blue-300' : 'text-white'}`}>
      {children}
      {active && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-300"
          layoutId="underline"
        />
      )}
    </Link>
  )
}



function AlumniCard({ alumni }) {
  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Avatar Section */}
      <Avatar className="w-20 h-20 mb-4 border-4 border-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 shadow-xl">
        <AvatarImage src={alumni.image} alt={alumni.name} />
        <AvatarFallback className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 text-white font-bold">
          {alumni.name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>

      {/* Name and Job Title */}
      <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
        {alumni.name}
      </h3>
      <p className="text-sm text-blue-200">{alumni.job} at {alumni.company}</p>

      {/* Skills Section */}
      <p className="text-sm text-blue-300 mt-2">
        Skills: 
        <span className="font-semibold text-pink-300"> {alumni.skills.join(', ')}</span>
      </p>

      {/* View Details Link */}
      <Link
        to={`/alumni/${alumni.id}`}
        className="text-blue-200 hover:text-pink-500 hover:underline mt-3 inline-block transition-all duration-300"
      >
        View Details
      </Link>
    </motion.div>
  );
}



function AlumniMap() {
  return (
    <Card className="bg-gradient-to-br from-blue-800 to-purple-900 border-none">
      <CardHeader>
        <CardTitle className="text-blue-200 flex items-center">
          <Globe className="mr-2" />
          Alumni Around the World
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-blue-700 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full h-full">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29432.45781974167!2d75.91148249999999!3d22.763257399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1729528690829!5m2!1sen!2sin"
    className="absolute inset-0 w-full h-full object-cover opacity-30"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-4 h-4 bg-yellow-400 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function AlumniConnect({ user }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("alumni");

  const filteredAlumni = mockAlumni.filter(alumni =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-4 pt-20"
    >
      <ScrollAnimatedSection>
        <div className="mb-8">
          <Welcome3D />
        </div>
        <motion.h1 
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-500 mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome, {user.name}!
        </motion.h1>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-teal-700 to-blue-800">
            <TabsTrigger value="alumni" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300">Alumni</TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all duration-300">Events</TabsTrigger>
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300">Dashboard</TabsTrigger>
          </TabsList>
          <TabsContent value="alumni">
            <Card className="bg-gradient-to-br from-teal-800 to-blue-900 border-none">
              <CardHeader>
                <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">Search Alumni</CardTitle>
                <Input 
                  placeholder="Search by name, company, or job title" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="mt-2 bg-teal-700 text-white placeholder-teal-300 border-teal-600"
                />
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence>
                  {filteredAlumni.map(alumni => (
                    <AlumniCard key={alumni.id} alumni={alumni} />
                  ))}
                </AnimatePresence>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="events">
            <Card className="bg-gradient-to-br from-orange-800 to-red-900 border-none">
              <CardHeader>
                <CardTitle className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                  <CalendarIcon className="mr-2" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockEvents.map(event => (
                  <motion.div 
                    key={event.id} 
                    className="p-4 bg-gradient-to-br from-blue-700 to-red-800 rounded-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={event.image} alt={event.name} className="w-full h-32 object-cover rounded-md mb-4" />
                    <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300">{event.name}</h3>
                    <p className="text-sm text-orange-200">
                      <span className="font-bold">{event.date}</span>
                      <span className="flex items-center mt-1">
                        <MapPin className="mr-2 h-4 w-4" />
                        {event.location}
                      </span>
                    </p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AlumniMap />
              <JobStatistics />
            </div>
          </TabsContent>
        </Tabs>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <div className="mt-12 mb-8">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">Featured Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockAlumni.slice(0, 3).map(alumni => (
              <Card key={alumni.id} className="bg-gradient-to-br from-green-700 to-teal-800 border-none transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-teal-300">
                    <AvatarImage src={alumni.image} alt={alumni.name} />
                    <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-green-300">{alumni.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-teal-300">{alumni.job} at {alumni.company}</p>
                  <p className="text-teal-400 mt-2">{alumni.location}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {alumni.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-gradient-to-r from-teal-500 to-green-500 text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      <CareerGuidance />
    </motion.div>
  );
}




function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating API call
    if (email === "test@example.com" && password === "password") {
      setUser({
        id: 1,
        name: "SHREY GUPTA",
        class: 2022,
        job: "Student",
        college: "Acropolis",
        location: "INDORE",
        image: shreyImage,
      });
    } else {
      alert("Invalid credentials");
    }
    setIsLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/media/images/671_1617097728_5a2945530ac7c51621c6f5d8535c3152.jpg')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md bg-gradient-to-br from-blue-800 to-purple-900 border-none">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-blue-200">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 text-blue-200">Email</label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-blue-700 border-blue-600 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-1 text-blue-200">Password</label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-blue-700 border-blue-600 text-white"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600" disabled={isLoading}>
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                  </motion.div>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}





function AlumniDetails() {
  const { id } = useParams()
  const alumni = mockAlumni.find(a => a.id === parseInt(id))

  if (!alumni) {
    return <div>Alumni not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white pt-20 px-4">
      <ScrollAnimatedSection>
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-blue-800 to-purple-900 border-none">
          <CardHeader>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-32 h-32 border-4 border-blue-300">
                <AvatarImage src={shreyImage} alt={alumni.name} />
                <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <CardTitle className="text-3xl font-bold text-blue-200">SHREY GUPTA</CardTitle>
                <p className="text-xl text-blue-300">{alumni.job} at {alumni.company}</p>
                <p className="text-blue-400">{alumni.location}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-200">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {alumni.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-600 text-blue-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-200">Education</h3>
                <p className="text-blue-300">Batch of {alumni.batch}</p>
                <p className="text-blue-300">Acropolis Institute of Technology and Research</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">About</h3>
              <p className="text-blue-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button className="bg-gray-700 hover:bg-gray-800">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </ScrollAnimatedSection>
    </div>
  )
}

function DiscussionForum({ user }) {
  const [posts, setPosts] = useState([
    { id: 1, author: "Alice Johnson", content: "Has anyone interned at Tech Corp recently? I'd love to hear about your experience!", timestamp: "2024-03-15T10:30:00Z", likes: 5, comments: 2 },
    { id: 2, author: "Bob Smith", content: "I'm organizing a tech meetup next month. Who's interested in joining?", timestamp: "2024-03-14T15:45:00Z", likes: 8, comments: 4 },
  ])
  const [newPost, setNewPost] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPost.trim()) {
      setPosts([
        { id: posts.length + 1, author: user.name, content: newPost, timestamp: new Date().toISOString(), likes: 0, comments: 0 },
        ...posts
      ])
      setNewPost("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white pt-20 px-4">
      <ScrollAnimatedSection>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-300">Discussion Forum</h1>
          <Card className="mb-6 bg-gradient-to-br from-blue-800 to-purple-900 border-none">
            <CardHeader>
              <CardTitle className="text-blue-200">Create a New Post</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="What's on your mind?"
                  className="mb-4 bg-blue-700 border-blue-600 text-white"
                />
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600">Post</Button>
              </form>
            </CardContent>
          </Card>
          {posts.map(post => (
            <Card key={post.id} className="mb-4 bg-gradient-to-br from-blue-800 to-purple-900 border-none">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-blue-200">{post.author}</CardTitle>
                  <span className="text-sm text-blue-400">{new Date(post.timestamp).toLocaleString()}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-300 mb-4">{post.content}</p>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" className="text-blue-300 hover:text-blue-100">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {post.comments} Comments
                  </Button>
                  <Button variant="ghost" className="text-blue-300 hover:text-blue-100">
                    <Sparkles className="mr-2 h-4 w-4" />
                    {post.likes} Likes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollAnimatedSection>
    </div>
  )
}

function MentorshipProgram({ user }) {
  const mentors = [
    { id: 1, name: "Dr. Emily Chen", expertise: "Machine Learning", availability: "Mondays and Wednesdays", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mentor1-Zy9Ej5.jpg" },
    { id: 2, name: "John Doe", expertise: "Web Development", availability: "Tuesdays and Thursdays", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mentor2-Zy9Ej5.jpg" },
    { id: 3, name: "Sarah Johnson", expertise: "Data Science", availability: "Fridays", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mentor3-Zy9Ej5.jpg" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white pt-20 px-4">
      <ScrollAnimatedSection>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-300">Mentorship Program</h1>
          <p className="text-lg text-blue-200 mb-8">Connect with experienced alumni mentors to guide you in your career journey.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map(mentor => (
              <Card key={mentor.id} className="bg-gradient-to-br from-blue-800 to-purple-900 border-none">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-blue-300">
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center text-blue-200">{mentor.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-300 mb-2">Expertise: {mentor.expertise}</p>
                  <p className="text-blue-400 mb-4">Available: {mentor.availability}</p>
                  <Button className="bg-blue-500 hover:bg-blue-600">Request Mentorship</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>
    </div>
  )
}

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar user={user} setUser={setUser} />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={user ? <Navigate to="/alumni-connect" /> : <Login setUser={setUser} />} />
              <Route path="/alumni-connect" element={user ? <AlumniConnect user={user} /> : <Navigate to="/" />} />
              <Route path="/about" element={<About />} />
              <Route path="/alumni/:id" element={<AlumniDetails />} />
              <Route path="/forum" element={<DiscussionForum user={user} />} />
              <Route path="/mentorship" element={<MentorshipProgram user={user} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </Router>
  )
}