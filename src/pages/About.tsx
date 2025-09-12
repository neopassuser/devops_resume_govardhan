import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Code, Cloud, Database, Server, GitBranch, Container } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const skills = [
    { name: "AWS", icon: Cloud, level: 85, color: "from-orange-400 to-orange-600" },
    { name: "Docker", icon: Container, level: 80, color: "from-blue-400 to-blue-600" },
    { name: "Terraform", icon: Server, level: 75, color: "from-purple-400 to-purple-600" },
    { name: ".NET Core", icon: Code, level: 90, color: "from-indigo-400 to-indigo-600" },
    { name: "Git/GitHub", icon: GitBranch, level: 85, color: "from-green-400 to-green-600" },
    { name: "MySQL", icon: Database, level: 80, color: "from-yellow-400 to-yellow-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 pb-16 px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate DevOps engineer with a strong foundation in cloud technologies and automation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl opacity-30"></div>
                <Avatar className="relative w-full h-full border-4 border-indigo-400/50">
                  <AvatarImage 
                    src="/uploads/profile.jpg" 
                    alt="Govardhan P"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-8xl bg-gradient-to-br from-gray-800 to-gray-900">
                    👨‍💻
                  </AvatarFallback>
                </Avatar>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Hi, I'm Govardhan P</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  I'm an aspiring AWS DevOps Engineer based in Chennai with a passion for 
                  cloud infrastructure, automation, and building scalable solutions.
                </p>
                <p>
                  With 2 years of experience in .NET development and a strong foundation 
                  in cloud technologies, I'm transitioning into the DevOps space to help 
                  organizations streamline their development and deployment processes.
                </p>
                <p>
                  I hold a B.Tech in Information Technology from Chennai Institute of 
                  Technology with a GPA of 8.1/10, and I'm constantly learning new 
                  technologies to stay ahead in this rapidly evolving field.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className="text-indigo-400 font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">Chennai, India</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className="text-indigo-400 font-semibold mb-2">Experience</h3>
                  <p className="text-gray-300">2+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-white text-center mb-12"
            >
              Core Skills & Technologies
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}>
                      <skill.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                  </div>
                     <div className="mb-2">
                       <div className="flex justify-between text-sm text-gray-400 mb-1">
                         <span>Proficiency</span>
                         <span>{skill.level}%</span>
                       </div>
                       <div className="w-full bg-gray-700 rounded-full h-2">
                         <motion.div
                           className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                           initial={{ width: 0 }}
                           animate={{ width: `${skill.level}%` }}
                           transition={{ duration: 1, delay: index * 0.1 }}
                         />
                       </div>
                     </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                  B.Tech in Information Technology
                </h3>
                <p className="text-gray-300 mb-2">Chennai Institute of Technology</p>
                <p className="text-gray-400">GPA: 8.1/10</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">Key Coursework</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Cloud Computing & Distributed Systems</li>
                  <li>• Database Management Systems</li>
                  <li>• Software Engineering</li>
                  <li>• Computer Networks</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
