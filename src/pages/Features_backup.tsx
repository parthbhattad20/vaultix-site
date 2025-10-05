import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Package,
  Ticket,
  GitBranch,
  AlertTriangle,
  Workflow,
  Users,
  Clock,
  Database,
  Shield,
  Settings,
  FileText,
  CheckCircle,
  GitPullRequest,
  UserPlus,
  Bell,
  BarChart3,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const featureSections = [
    {
      icon: Package,
      title: 'Asset Management',
      subtitle: 'Complete visibility and control over your IT infrastructure',
      features: [
        {
          icon: Database,
          title: 'Automated Asset Discovery',
          description: 'Automatically discover and catalog all IT assets across your organization, including hardware, software, and cloud resources.',
        },
        {
          icon: UserPlus,
          title: 'AD Integration & Onboarding',
          description: 'Seamlessly onboard employees and assets from Active Directory.',
        },
        {
          icon: Workflow,
          title: 'Service & Incident Request Flow',
          description: 'Automated workflows for service requests and incident management.',
        },
        {
          icon: BarChart3,
          title: 'Lifecycle Management',
          description: 'Track asset lifecycle from procurement to retirement.',
        },
      ],
    },
  ];

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive Features
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Discover how Vaultix provides a complete ITSM solution with powerful features 
            designed to enhance your organization's security and efficiency.
          </p>
        </motion.div>

        {/* Feature Sections */}
        {featureSections.map((section, sectionIndex) => (
          <motion.section 
            key={sectionIndex} 
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-purple-500/10 rounded-full">
                  <section.icon className="h-12 w-12 text-purple-400" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">{section.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.features.map((feature, featureIndex) => (
                <motion.div key={featureIndex} variants={itemVariants}>
                  <Card className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-purple-500/10 rounded-lg mt-1">
                          <feature.icon className="h-6 w-6 text-purple-400" />
                        </div>
                        <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Customization Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Customizable to Your Needs
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Every organization is unique. Vaultix offers extensive customization options to 
                match your workflows, compliance requirements, and business processes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Settings className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Custom Workflows</h3>
                  <p className="text-slate-400">Design approval processes that match your organization</p>
                </div>
                <div>
                  <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Security Policies</h3>
                  <p className="text-slate-400">Configure security rules and access controls</p>
                </div>
                <div>
                  <BarChart3 className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Custom Reports</h3>
                  <p className="text-slate-400">Generate reports tailored to your metrics</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;