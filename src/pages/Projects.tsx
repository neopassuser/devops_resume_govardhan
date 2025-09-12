
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Cloud, Server, Database, Code, CloudCog, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Deployed Jenkins on Amazon EC2 with Secure Internet Access",
      description: "Created and set up an EC2 instance in AWS to run a web application. Configured security settings to allow safe access from the internet and successfully tested the application from outside AWS.",
      tech: ["AWS EC2", "Security Groups", "IAM", "SSH", "HTTP/HTTPS", "Ubuntu", "Putty","Jenkins"],
  icon: Server,
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Secure VPC Setup with EC2 Instances",
      description: "Designed a custom VPC with public and private subnets, route tables, and secure network access. Provisioned EC2 instances with IAM roles, Internet/NAT Gateways, and enforced access controls. Validated connectivity and security compliance across the environment.",
      tech: ["AWS VPC", "EC2", "IAM", "Security Groups", "NACLs", "Internet Gateway", "NAT Gateway", "SSH"],
      icon: Shield,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "MOMKit Reporting Tool",
      description: "Developed a comprehensive reporting tool using .NET Core Web API and MySQL for manufacturing operations management with real-time data visualization.",
      tech: [".NET Core", "Web API", "MySQL", "Swagger UI", "Bootstrap"],
      icon: Database,
      color: "from-green-400 to-green-600"
    },
     {
      title: "Azure CI/CD Deployment for .NET Core Application (Company Project)",
      description: "Built YAML-based Azure DevOps pipelines for automated build, test, and deployment of ASP.NET Core API. Integrated Xunit testing for automated validation. Deployed workloads to Azure Web Apps for scalability.",
      tech: ["Azure DevOps", "YAML Pipelines", ".NET Core", "ASP.NET Core API", "Xunit", "CI/CD"],
      icon: Cloud,
      color: "from-indigo-400 to-indigo-600"
    },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing my DevOps journey through hands-on projects and real-world implementations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
