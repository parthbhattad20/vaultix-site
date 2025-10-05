import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Shield, 
  FileCheck, 
  TrendingUp, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  GitBranch,
  Lock,
  FileText,
  Users,
  Zap,
  Target,
  Award,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const devBenefits = [
    {
      icon: AlertTriangle,
      title: 'Early Vulnerability Detection',
      description: 'Identify security vulnerabilities in dependencies before they reach production. Automated scanning during development reduces risk and prevents costly security incidents.',
    },
    {
      icon: Zap,
      title: 'Streamlined Security Processes',
      description: 'Integrate security into your development workflow without slowing down delivery. Automated ticket creation and remediation tracking keep your team focused on building features.',
    },
    {
      icon: GitBranch,
      title: 'CI/CD Integration',
      description: 'Seamlessly integrate with your existing CI/CD pipelines. Automated SBOM generation and vulnerability scanning as part of your build process ensures continuous security.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Made Easy',
      description: 'Automatically generate compliance reports and maintain audit trails. Meet regulatory requirements without manual documentation and reduce compliance overhead by 80%.',
    },
    {
      icon: Clock,
      title: 'Reduced Manual Effort',
      description: 'Eliminate repetitive security tasks with intelligent automation. Your team can focus on innovation while Vaultix handles security monitoring, reporting, and ticket management.',
    },
    {
      icon: TrendingUp,
      title: 'Faster Time to Market',
      description: 'Accelerate development cycles with automated security checks and streamlined approval workflows. Ship secure software faster with confidence.',
    },
  ];

  const complianceFrameworks = [
    {
      name: 'ISO 27001',
      description: 'Information security management system standard',
      features: ['Asset inventory', 'Risk assessment', 'Access control', 'Incident management'],
    },
    {
      name: 'NIST Framework',
      description: 'Cybersecurity framework for critical infrastructure',
      features: ['Identify assets', 'Protect systems', 'Detect threats', 'Respond to incidents'],
    },
    {
      name: 'SOC 2',
      description: 'Security, availability, and confidentiality controls',
      features: ['Audit trails', 'Access logs', 'Change management', 'Monitoring'],
    },
    {
      name: 'SEBI Guidelines',
      description: 'Securities and Exchange Board of India regulations',
      features: ['Data protection', 'System security', 'Audit compliance', 'Risk management'],
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      features: ['Data inventory', 'Access control', 'Breach notification', 'Audit trails'],
    },
    {
      name: 'HIPAA',
      description: 'Healthcare information security and privacy',
      features: ['Asset tracking', 'Access control', 'Audit logs', 'Risk assessment'],
    },
  ];

  const complianceFeatures = [
    {
      icon: FileText,
      title: 'Automated Audit Trails',
      description: 'Comprehensive logging of all activities, changes, and access events with tamper-proof records for compliance audits.',
    },
    {
      icon: Shield,
      title: 'Risk Assessment & Threat Intelligence',
      description: 'Real-time risk scoring based on vulnerability severity, asset criticality, and threat intelligence feeds.',
    },
    {
      icon: Award,
      title: 'Compliance Reporting',
      description: 'Pre-built reports for major compliance frameworks with automated evidence collection and export capabilities.',
    },
    {
      icon: Lock,
      title: 'Access Control & Governance',
      description: 'Role-based access control with detailed permissions and approval workflows for sensitive operations.',
    },
  ];

  const useCases = [
    {
      title: 'Software Development Companies',
      description: 'Manage open-source dependencies, track vulnerabilities, and maintain compliance across multiple projects and teams.',
      icon: Code,
    },
    {
      title: 'Financial Services',
      description: 'Meet stringent regulatory requirements with automated compliance reporting and comprehensive audit trails.',
      icon: FileCheck,
    },
    {
      title: 'Healthcare Organizations',
      description: 'Ensure HIPAA compliance with secure asset management and detailed access control for sensitive systems.',
      icon: Shield,
    },
    {
      title: 'Enterprise IT Teams',
      description: 'Streamline IT operations with unified asset management, automated workflows, and intelligent ticket resolution.',
      icon: Users,
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Solutions & Compliance
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transform your development process and achieve compliance with enterprise-grade 
            security and automation capabilities.
          </p>
        </div>

        {/* For Development Teams Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
              <Code className="h-12 w-12 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built for Development Teams
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Vaultix empowers development teams to build secure, compliant software without 
              sacrificing speed or innovation. Integrate security into your workflow seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devBenefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg mt-1">
                      <benefit.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Makes You Compliant */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <Target className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How Vaultix Makes Your Company Compliant
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Compliance is not just about checking boxes—it's about building a secure, 
                  auditable, and resilient organization. Vaultix provides the foundation for 
                  continuous compliance across your entire IT infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-slate-900/50 rounded-lg border border-purple-500/20">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900/50 rounded-lg p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-6 text-center">The Compliance Journey with Vaultix</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-purple-400">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Discover</h4>
                    <p className="text-sm text-slate-400">Automatically inventory all assets and dependencies</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-purple-400">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Assess</h4>
                    <p className="text-sm text-slate-400">Scan for vulnerabilities and assess compliance gaps</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-purple-400">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Remediate</h4>
                    <p className="text-sm text-slate-400">Automated ticket creation and workflow management</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-purple-400">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">Report</h4>
                    <p className="text-sm text-slate-400">Generate compliance reports and audit evidence</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Compliance Frameworks */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
              <FileCheck className="h-12 w-12 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Supported Compliance Frameworks
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Vaultix provides built-in support for major compliance frameworks with automated 
              reporting and evidence collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white">{framework.name}</CardTitle>
                  <p className="text-slate-400 text-sm">{framework.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {framework.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-slate-400 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Solutions for Every Industry
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Vaultix adapts to your industry's unique requirements and compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-purple-500/10 rounded-lg">
                      <useCase.icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Achieve Compliance?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let Vaultix help you build a secure, compliant, and efficient IT infrastructure. 
                Schedule a demo to see how we can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-100 font-semibold px-8 py-6 text-lg">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
