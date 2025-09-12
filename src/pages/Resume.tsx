  const keyProjects = [
    {
      title: "Secure VPC Setup with EC2 Instances",
      description: (
        <>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Designed a custom VPC with public/private subnets, route tables, and secure network access.</li>
            <li>Provisioned EC2 instances with IAM roles, Internet/NAT Gateways, and enforced access controls.</li>
            <li>Validated connectivity and security compliance across the environment.</li>
          </ul>
          <div className="text-xs text-indigo-300 font-semibold">Tools: <span className="text-gray-300 ml-1">AWS VPC, EC2, IAM, Security Groups, NACLs, Internet Gateway, NAT Gateway, SSH</span></div>
        </>
      )
    },
    { title: "Hosting a Web Application on Amazon EC2 with Secure Internet Access", description: "" },
    { title: "Azure CI/CD Deployment for .NET Core Application", description: "" }
  ];

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Resume = () => {
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

  const experiences = [
    {
      title: "Software Engineer",
      company: "NJS Infotech | Chennai",
      period: "Jun 2023 – Sep 2025",
      description: (
        <ul className="list-disc ml-5 text-gray-300">
          <li>Automated deployments using Azure DevOps pipelines for .NET Core applications, improving release consistency.</li>
          <li>Configured and deployed workloads to Azure Web Apps, supporting cloud-based deployment.</li>
          <li>Built REST APIs using .NET Core/Entity Framework with MySQL, streamlining backend operations.</li>
          <li>Integrated Swagger and Postman to enhance API testing and client handoff.</li>
          <li>Automated workflows (emails, print services) with Azure Web Jobs, reducing manual production effort by 50%.</li>
          <li>Developed dashboards with jQuery DataTables for real-time production insights.</li>
        </ul>
      )
    },
    {
      title: "Design Lead",
      company: "AIROSSPACE R&D | Chennai",
      period: "Nov 2023 – Jan 2024",
      description: (
        <ul className="list-disc ml-5 text-gray-300">
          <li>Led social media strategy and content creation to enhance brand visibility and engagement.</li>
          <li>Participated in field demonstrations showcasing drone capabilities to clients.</li>
        </ul>
      )
    }
  ];

  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Chennai Institute of Technology",
      period: "2019 - 2023",
      gpa: "8.1/10"
    }
  ];

  const coreSkills = [
    "Cloud Platforms: AWS (VPC, EC2, IAM, S3, RDS, ALB, CloudFormation), Azure (Web Apps, Pipelines)",
    "Infrastructure as Code: Terraform, AWS CLI, CloudFormation",
    "Networking & Security: VPC, Subnets, NAT Gateway, Security Groups, IAM Policies",
    "Monitoring & Logging: CloudWatch, Grafana (basic)",
    "Automation & Scripting: Python (OOP), Bash, Shell",
    "Containers & OS: Docker (basics), Linux (Ubuntu proficiency)",
    "Version Control: Git, GitHub, Bitbucket",
    "Dev Background: .NET Core, C#, MySQL, SQL Server, Angular",
    "CI/CD Tools: Jenkins, GitHub Actions, Azure Pipelines"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 pb-16 px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Resume</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Download my complete resume or view my qualifications below
            </p>
            
            <div className="flex justify-center">
              <a
                href="/resume.pdf"
                download
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                style={{ minWidth: 'fit-content' }}
              >
                <span className="flex items-center justify-center w-full">Download Resume <Download size={20} className="ml-2" /></span>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-indigo-400" size={20} />
                    <span className="text-gray-300">govardhan.p.work@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-indigo-400" size={20} />
                    <span className="text-gray-300">+91 8925092002</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-indigo-400" size={20} />
                    <span className="text-gray-300">Chennai, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="text-indigo-400" size={20} />
                    <a href="https://www.linkedin.com/in/govardhan-p/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Professional Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                AWS Cloud/DevOps Engineer (self-paced learning & project experience) with practical exposure to designing and deploying secure, scalable cloud environments using AWS services (VPC, EC2, IAM, S3, RDS, CloudFormation, Terraform). Skilled in automating infrastructure provisioning, managing cloud operations, and supporting application deployments through hands-on labs and self-initiated projects. Backed by 2+ years of .NET Core development, I bring strong problem-solving, scripting, and system integration skills to streamline cloud adoption and infrastructure reliability.
              </p>
            </motion.div>

            {/* Core Skills */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Core Skills</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-lg border border-indigo-400/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-indigo-400 pl-6">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-indigo-400 mb-2">{exp.company} • {exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-indigo-400 pl-6">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-indigo-400 mb-2">{edu.institution} • {edu.period}</p>
                    <p className="text-gray-300">GPA: {edu.gpa}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Key Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-indigo-500/20 text-indigo-300 px-6 py-4 rounded-lg border border-indigo-400/30 flex items-center justify-center text-center min-w-[220px] break-words"
                  >
                    <h4 className="text-base font-semibold text-indigo-400 m-0">{project.title}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
