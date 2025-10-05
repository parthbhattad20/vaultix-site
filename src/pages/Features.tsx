import { useEffect, useRef } from 'react';
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
import * as anime from 'animejs';

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
          description: 'Automatically discover and catalog all IT assets across your organization, including hardware, software, and cloud resources. Real-time updates ensure your inventory is always current. **Perfect Fit:** Provides a single, accurate source of truth for all IT assets, crucial for compliance, security, and efficient resource allocation.',
        },
        {
          icon: UserPlus,
          title: 'AD Integration & Onboarding',
          description: 'Seamlessly onboard employees and assets from Active Directory. Automatically sync organizational structure, user accounts, and asset assignments for streamlined management. **Perfect Fit:** Reduces administrative overhead and ensures consistent access control and asset assignment across your enterprise.',
        },
        {
          icon: Workflow,
          title: 'Service & Incident Request Flow',
          description: 'Automated workflows for service requests and incident management. Define custom approval chains, escalation paths, and automated actions based on asset types and priorities. **Perfect Fit:** Accelerates service delivery and incident resolution, minimizing downtime and improving operational efficiency.',
        },
        {
          icon: BarChart3,
          title: 'Lifecycle Management',
          description: 'Track asset lifecycle from procurement to retirement. Monitor warranty status, maintenance schedules, and depreciation for better financial planning and compliance. **Perfect Fit:** Optimizes asset utilization, reduces costs, and ensures compliance with regulatory and internal policies throughout the asset\'s lifespan.',
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
          description: 'Define and enforce Service Level Agreements tailored to your organization. Set response times, resolution targets, and escalation rules based on ticket priority, category, and customer tier. **Perfect Fit:** Guarantees service quality, aligns IT operations with business expectations, and provides clear metrics for performance evaluation.',
        },
        {
          icon: Users,
          title: 'Team & Member Assignment',
          description: 'Organize support teams and assign tickets based on expertise, workload, and availability. Create specialized teams for different asset types, departments, or service categories. **Perfect Fit:** Ensures the right expertise is applied to issues quickly, improving resolution rates and team productivity.',
        },
        {
          icon: Settings,
          title: 'Advanced Categorization',
          description: 'Multi-level categorization with custom fields, tags, and metadata. Automatically route tickets to appropriate teams based on intelligent classification and business rules. **Perfect Fit:** Streamlines ticket routing, reduces manual effort, and ensures issues are handled by the most qualified personnel.',
        },
        {
          icon: BarChart3,
          title: 'Performance Analytics',
          description: 'Comprehensive reporting on ticket metrics, team performance, and SLA compliance. Identify bottlenecks, track trends, and make data-driven decisions to improve service delivery. **Perfect Fit:** Provides actionable insights to continuously optimize IT service delivery, enhance user satisfaction, and demonstrate IT\'s value to the business.',
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
          description: 'Connect directly to your Git repositories (GitHub, GitLab, Bitbucket) to automatically fetch and analyze project dependencies. Supports multiple languages and package managers. **Perfect Fit:** Automates the crucial first step in supply chain security, providing immediate visibility into your software\'s components.',
        },
        {
          icon: FileText,
          title: 'SBOM Generation',
          description: 'Generate comprehensive Software Bill of Materials (SBOM) from your project dependencies. Export in standard formats (SPDX, CycloneDX) for compliance and audit requirements. **Perfect Fit:** Essential for regulatory compliance and due diligence, offering a complete inventory of software components for internal and external audits.',
        },
        {
          icon: AlertTriangle,
          title: 'Automated Vulnerability Scanning',
          description: 'Continuous scanning of dependencies against CVE databases and security advisories. Real-time alerts for newly discovered vulnerabilities with severity ratings and remediation guidance. **Perfect Fit:** Proactively identifies and mitigates security risks, protecting your applications from known exploits and reducing your attack surface.',
        },
        {
          icon: Ticket,
          title: 'In-Platform Ticket Creation',
          description: 'Automatically create tickets for detected vulnerabilities with all relevant context. Track remediation progress, assign to responsible teams, and maintain audit trails for compliance. **Perfect Fit:** Bridges the gap between security detection and operational response, ensuring vulnerabilities are addressed efficiently and auditable.',
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
          description: 'Trigger ticket creation from multiple sources: vulnerability scans, monitoring alerts, email, API calls, and user submissions. Apply intelligent routing and priority assignment automatically. **Perfect Fit:** Eliminates manual data entry and ensures immediate response to critical events, improving efficiency and reducing human error.',
        },
        {
          icon: Settings,
          title: 'Custom Workflow Builder',
          description: 'Visual workflow designer for creating complex automation scenarios. Define conditions, actions, and branching logic without coding. Support for parallel execution and conditional flows. **Perfect Fit:** Adapts to your unique business processes, allowing you to automate virtually any IT operation and enforce best practices.',
        },
        {
          icon: CheckCircle,
          title: 'Approval Workflows',
          description: 'Multi-stage approval processes for change requests, asset procurement, and access provisioning. Configure approval chains based on cost thresholds, risk levels, or organizational hierarchy. **Perfect Fit:** Ensures governance and control over critical IT changes, reducing risks and maintaining compliance with internal policies.',
        },
        {
          icon: Bell,
          title: 'Smart Notifications',
          description: 'Intelligent notification system with customizable triggers and channels (email, Slack, Teams, SMS). Prevent alert fatigue with smart grouping and escalation rules. **Perfect Fit:** Keeps relevant stakeholders informed without overwhelming them, ensuring timely responses to critical events and improving communication.',
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
          description: 'Granular permissions system with role-based and attribute-based access control. Define custom roles, permissions, and data access policies to ensure security and compliance. **Perfect Fit:** Protects sensitive data and systems by ensuring users only have access to what they need, a cornerstone of enterprise security.',
        },
        {
          icon: FileText,
          title: 'Compliance Frameworks',
          description: 'Built-in support for SEBI, ISO 27001, NIST, SOC 2, and other compliance frameworks. Automated evidence collection, audit trails, and compliance reporting for regulatory requirements. **Perfect Fit:** Simplifies the complex task of compliance, providing automated tools to meet and demonstrate adherence to various industry standards.',
        },
        {
          icon: AlertTriangle,
          title: 'Risk Assessment',
          description: 'Real-time risk assessment and threat intelligence integration. Prioritize vulnerabilities based on exploitability, asset criticality, and business impact for effective risk management. **Perfect Fit:** Enables proactive risk management, allowing your organization to focus resources on the most critical threats and make informed security decisions.',
        },
        {
          icon: BarChart3,
          title: 'Audit Trails',
          description: 'Comprehensive logging of all system activities, changes, and access events. Tamper-proof audit logs with retention policies and easy export for compliance audits. **Perfect Fit:** Provides an indisputable record of all actions, essential for forensic analysis, compliance audits, and maintaining accountability within your IT environment.',
        },
      ],
    },
  ];

  const featureSectionRefs = useRef([]);
  const customizationSectionRef = useRef(null);

  useEffect(() => {
    const animateOnScroll = (elementsRef: React.MutableRefObject<any[]>) => {
      elementsRef.current.forEach((element) => {
        if (element) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateY: [50, 0],
            easing: 'easeOutQuad',
            duration: 800,
            autoplay: false,
            begin: function(anim) {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    anim.play();
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.3 });
              observer.observe(element);
            }
          });
        }
      });
    };

    featureSections.forEach((_, sectionIndex) => {
      // Animate the section title and subtitle
      const sectionHeader = document.querySelector(`.feature-section-${sectionIndex} .section-header`);
      if (sectionHeader) {
        anime({
          targets: sectionHeader,
          opacity: [0, 1],
          translateY: [50, 0],
          easing: 'easeOutQuad',
          duration: 800,
          autoplay: false,
          begin: function(anim) {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  anim.play();
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.3 });
            observer.observe(sectionHeader);
          }
        });
      }

      // Animate individual feature cards within the section
      const cards = featureSectionRefs.current[sectionIndex];
      if (cards && cards.length > 0) {
        anime({
          targets: cards,
          opacity: [0, 1],
          translateY: [50, 0],
          easing: 'easeOutQuad',
          duration: 800,
          delay: anime.stagger(100),
          autoplay: false,
          begin: function(anim) {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  anim.play();
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.3 });
            cards.forEach(card => observer.observe(card));
          }
        });
      }
    });

    // Animate customization section
    if (customizationSectionRef.current) {
      anime({
        targets: customizationSectionRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutQuad',
        duration: 800,
        autoplay: false,
        begin: function(anim) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                anim.play();
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.3 });
          observer.observe(customizationSectionRef.current);
        }
      });
    }

  }, []);

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
            <div key={sectionIndex} className={`feature-section-${sectionIndex}`}>
              <div className="flex items-center space-x-4 mb-8 section-header opacity-0">
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
                    className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 opacity-0"
                    ref={el => {
                      if (!featureSectionRefs.current[sectionIndex]) {
                        featureSectionRefs.current[sectionIndex] = [];
                      }
                      featureSectionRefs.current[sectionIndex][featureIndex] = el;
                    }}
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
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 opacity-0" ref={customizationSectionRef}>
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
