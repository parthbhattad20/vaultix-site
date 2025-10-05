import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Package, 
  Ticket, 
  GitBranch, 
  AlertTriangle, 
  Users, 
  Workflow,
  CheckCircle,
  ArrowRight,
  Zap,
  Lock,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Assets Discovered', value: '10,000+', icon: Package },
    { label: 'Components Tracked', value: '50,000+', icon: GitBranch },
    { label: 'Active Tickets', value: '5,000+', icon: Ticket },
  ];

  const features = [
    {
      icon: Package,
      title: 'Asset Discovery',
      description: 'Automated discovery and management of all IT assets with seamless AD integration and real-time tracking.',
    },
    {
      icon: GitBranch,
      title: 'SBOM Tracking',
      description: 'Generate comprehensive Software Bill of Materials from your repositories and track dependencies effortlessly.',
    },
    {
      icon: Ticket,
      title: 'Ticket Management',
      description: 'Intelligent ticket resolution with customizable SLAs, team assignments, and automated workflows.',
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Scanning',
      description: 'Automated vulnerability detection with instant ticket creation and comprehensive reporting.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Create custom workflows for service requests, incident management, and approval processes.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Organize teams, assign tickets, and streamline communication across your organization.',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Boost Productivity',
      description: 'Automate repetitive tasks and reduce manual effort by up to 70% with intelligent workflows.',
    },
    {
      icon: Lock,
      title: 'Enhanced Security',
      description: 'Stay compliant with industry standards and proactively manage vulnerabilities.',
    },
    {
      icon: TrendingUp,
      title: 'Scale with Confidence',
      description: 'Enterprise-grade platform that grows with your organization\'s needs.',
    },
  ];

  return (
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-pink-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300">Next-Generation ITSM Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Unified IT Service Management
              </span>
              <br />
              <span className="text-white">for Modern Enterprises</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Streamline asset management, SBOM tracking, and intelligent ticket resolution 
              with Vaultix's comprehensive ITSM platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-purple-500/20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-10 w-10 text-purple-400" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Complete ITSM Ecosystem
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Unified platform for all your IT service management needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10">
                Explore All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose Vaultix?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Transform your IT operations with enterprise-grade capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
                  <benefit.icon className="h-12 w-12 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-slate-400 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your IT Operations?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of organizations that trust Vaultix for their IT service management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-100 font-semibold px-8 py-6 text-lg">
                  Start Free Trial
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
