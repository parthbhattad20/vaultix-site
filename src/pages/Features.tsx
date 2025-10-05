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
          description: 'Automatically discover and catalog all IT assets across your organization, including hardware, software, and cloud resources. Real-time updates ensure your inventory is always current.',
        },
        {
          icon: UserPlus,
          title: 'AD Integration & Onboarding',
          description: 'Seamlessly onboard employees and assets from Active Directory. Automatically sync organizational structure, user accounts, and asset assignments for streamlined management.',
        },
        {
          icon: Workflow,
          title: 'Service & Incident Request Flow',
          description: 'Automated workflows for service requests and incident management. Define custom approval chains, escalation paths, and automated actions based on asset types and priorities.',
        },
        {
          icon: BarChart3,
          title: 'Lifecycle Management',
          description: 'Track asset lifecycle from procurement to retirement. Monitor warranty status, maintenance schedules, and depreciation for better financial planning and compliance.',
        },
      ],
    },
    {
      icon: Ticket,
      title: 'Ticket Management',
      subtitle: 'Intelligent ticket resolution with enterprise-grade capabilities',
      features: [
        {
          icon: Clock,
          title: 'Customizable SLA Management',
          description: 'Define and enforce Service Level Agreements tailored to your organization. Set response times, resolution targets, and escalation rules based on ticket priority, category, and customer tier.',
        },
        {
          icon: Users,
          title: 'Team & Member Assignment',
          description: 'Organize support teams and assign tickets based on expertise, workload, and availability. Create specialized teams for different asset types, departments, or service categories.',
        },
        {
          icon: Settings,
          title: 'Advanced Categorization',
          description: 'Multi-level categorization with custom fields, tags, and metadata. Automatically route tickets to appropriate teams based on intelligent classification and business rules.',
        },
        {
          icon: BarChart3,
          title: 'Performance Analytics',
          description: 'Comprehensive reporting on ticket metrics, team performance, and SLA compliance. Identify bottlenecks, track trends, and make data-driven decisions to improve service delivery.',
        },
      ],
    },
    {
      icon: GitBranch,
      title: 'SBOM & Vulnerability Management',
      subtitle: 'Proactive security through comprehensive dependency tracking',
      features: [
        {
          icon: GitPullRequest,
          title: 'Repository Integration',
          description: 'Connect directly to your Git repositories (GitHub, GitLab, Bitbucket) to automatically fetch and analyze project dependencies. Supports multiple languages and package managers.',
        },
        {
          icon: FileText,
          title: 'SBOM Generation',
          description: 'Generate comprehensive Software Bill of Materials (SBOM) from your project dependencies. Export in standard formats (SPDX, CycloneDX) for compliance and audit requirements.',
        },
        {
          icon: AlertTriangle,
          title: 'Automated Vulnerability Scanning',
          description: 'Continuous scanning of dependencies against CVE databases and security advisories. Real-time alerts for newly discovered vulnerabilities with severity ratings and remediation guidance.',
        },
        {
          icon: Ticket,
          title: 'In-Platform Ticket Creation',
          description: 'Automatically create tickets for detected vulnerabilities with all relevant context. Track remediation progress, assign to responsible teams, and maintain audit trails for compliance.',
        },
      ],
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      subtitle: 'Streamline operations with intelligent automation',
      features: [
        {
          icon: Zap,
          title: 'Automatic Ticket Creation',
          description: 'Trigger ticket creation from multiple sources: vulnerability scans, monitoring alerts, email, API calls, and user submissions. Apply intelligent routing and priority assignment automatically.',
        },
        {
          icon: Settings,
          title: 'Custom Workflow Builder',
          description: 'Visual workflow designer for creating complex automation scenarios. Define conditions, actions, and branching logic without coding. Support for parallel execution and conditional flows.',
        },
        {
          icon: CheckCircle,
          title: 'Approval Workflows',
          description: 'Multi-stage approval processes for change requests, asset procurement, and access provisioning. Configure approval chains based on cost thresholds, risk levels, or organizational hierarchy.',
        },
        {
          icon: Bell,
          title: 'Smart Notifications',
          description: 'Intelligent notification system with customizable triggers and channels (email, Slack, Teams, SMS). Prevent alert fatigue with smart grouping and escalation rules.',
        },
      ],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      subtitle: 'Enterprise-grade security with comprehensive compliance support',
      features: [
        {
          icon: Shield,
          title: 'Role-Based Access Control',
          description: 'Granular permissions system with role-based and attribute-based access control. Define custom roles, permissions, and data access policies to ensure security and compliance.',
        },
        {
          icon: FileText,
          title: 'Compliance Frameworks',
          description: 'Built-in support for SEBI, ISO 27001, NIST, SOC 2, and other compliance frameworks. Automated evidence collection, audit trails, and compliance reporting for regulatory requirements.',
        },
        {
          icon: AlertTriangle,
          title: 'Risk Assessment',
          description: 'Real-time risk assessment and threat intelligence integration. Prioritize vulnerabilities based on exploitability, asset criticality, and business impact for effective risk management.',
        },
        {
          icon: BarChart3,
          title: 'Audit Trails',
          description: 'Comprehensive logging of all system activities, changes, and access events. Tamper-proof audit logs with retention policies and easy export for compliance audits.',
        },
      ],
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive Features
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Discover how Vaultix provides a complete ITSM solution with powerful features 
            designed for modern enterprises and development teams.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-20">
          {featureSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl">
                  <section.icon className="h-10 w-10 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">{section.title}</h2>
                  <p className="text-slate-400 text-lg mt-1">{section.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.features.map((feature, featureIndex) => (
                  <Card 
                    key={featureIndex} 
                    className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                  >
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
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Customization Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardContent className="p-12">
              <div className="text-center">
                <Settings className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Customizable to Your Needs
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                  Every organization is unique. Vaultix offers extensive customization options to tailor 
                  the platform to your specific requirements, workflows, and compliance needs. From custom 
                  fields and workflows to integrations and reporting, we adapt to your business processes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">Custom Fields & Forms</h3>
                    <p className="text-slate-400 text-sm">Tailor data collection to your needs</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">API & Integrations</h3>
                    <p className="text-slate-400 text-sm">Connect with your existing tools</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">Custom Workflows</h3>
                    <p className="text-slate-400 text-sm">Automate your unique processes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
