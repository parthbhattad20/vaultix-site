import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, FileText, BarChart3, AlertTriangle, Fingerprint, Cloud, Server, HardDrive, GitBranch, Key, Users, CheckCircle } from 'lucide-react';
import anime from 'animejs';

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'All data, both in transit and at rest, is secured with industry-standard encryption protocols (AES-256, TLS 1.2+). Your sensitive information is protected from unauthorized access. **Perfect Fit:** Ensures the highest level of data confidentiality, crucial for enterprises handling sensitive client data and intellectual property, meeting stringent regulatory requirements.',
    },
    {
      icon: Fingerprint,
      title: 'Multi-Factor Authentication (MFA)',
      description: 'Enhance account security with mandatory MFA for all users. Supports various MFA methods including TOTP, SMS, and biometric authentication. **Perfect Fit:** Adds an essential layer of security against unauthorized access, protecting corporate accounts and data from credential-based attacks, a common enterprise vulnerability.',
    },
    {
      icon: Users,
      title: 'Role-Based Access Control (RBAC)',
      description: 'Granular control over user permissions and access to features, data, and assets. Define custom roles and policies to enforce the principle of least privilege. **Perfect Fit:** Essential for large organizations to manage complex user hierarchies and ensure that employees only access the information and functions necessary for their roles, minimizing internal risks.',
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Hosted on leading cloud providers with robust physical and environmental security measures. Our infrastructure is designed for high availability and resilience against attacks. **Perfect Fit:** Provides a reliable and secure foundation for your ITSM operations, ensuring business continuity and protecting against infrastructure-level threats.',
    },
    {
      icon: Cloud,
      title: 'Cloud Security Best Practices',
      description: 'Adherence to cloud security best practices, including network segmentation, intrusion detection, and regular security audits. Our cloud environment is continuously monitored for threats. **Perfect Fit:** Leverages the advanced security capabilities of cloud platforms, offering a scalable and secure environment that adapts to modern threat landscapes.',
    },
    {
      icon: HardDrive,
      title: 'Data Backup & Recovery',
      description: 'Automated daily backups with point-in-time recovery capabilities. Your data is redundantly stored across multiple locations to ensure business continuity and disaster recovery. **Perfect Fit:** Guarantees data integrity and availability, providing peace of mind that your critical ITSM data is protected against loss and can be quickly restored.',
    },
    {
      icon: GitBranch,
      title: 'Secure Software Development Lifecycle (SSDLC)',
      description: 'Our development process incorporates security at every stage, from design to deployment. Regular code reviews, penetration testing, and vulnerability assessments are standard practice. **Perfect Fit:** Ensures that Vaultix itself is built with security in mind, providing a trustworthy platform that minimizes inherent software vulnerabilities.',
    },
    {
      icon: Key,
      title: 'API Security',
      description: 'All APIs are secured with OAuth 2.0 and API key management, ensuring secure and authenticated access for integrations. Rate limiting and input validation protect against abuse. **Perfect Fit:** Facilitates secure integration with your existing enterprise systems, allowing for seamless data exchange without compromising security.',
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response Plan',
      description: 'A well-defined incident response plan is in place to quickly detect, respond to, and mitigate any security incidents. Our team is trained to handle security events efficiently. **Perfect Fit:** Minimizes the impact of potential security breaches, ensuring a swift and effective response that protects your data and maintains operational stability.',
    },
  ];

  const complianceCertifications = [
    {
      icon: CheckCircle,
      title: 'ISO 27001 Certified',
      description: 'Adherence to the international standard for information security management systems. **Perfect Fit:** Demonstrates a commitment to systematic management of sensitive company and customer information, crucial for global enterprises and regulatory compliance.',
    },
    {
      icon: CheckCircle,
      title: 'SOC 2 Type II Compliant',
      description: 'Independent audit report verifying our controls related to security, availability, processing integrity, confidentiality, and privacy. **Perfect Fit:** Provides assurance to clients and partners about the effectiveness of our security controls, essential for building trust in B2B relationships.',
    },
    {
      icon: CheckCircle,
      title: 'GDPR Compliant',
      description: 'Full compliance with the General Data Protection Regulation for handling and protecting personal data. **Perfect Fit:** Ensures your operations meet strict European data privacy laws, vital for organizations with a global customer base or employees in the EU.',
    },
    {
      icon: CheckCircle,
      title: 'HIPAA Ready',
      description: 'Designed with features and controls to support HIPAA compliance for healthcare organizations. **Perfect Fit:** Offers the necessary safeguards for protecting Protected Health Information (PHI), making it suitable for healthcare providers and related entities.',
    },
    {
      icon: CheckCircle,
      title: 'NIST Framework Aligned',
      description: 'Our security practices are aligned with the National Institute of Standards and Technology Cybersecurity Framework. **Perfect Fit:** Provides a robust and adaptable framework for managing cybersecurity risk, particularly valuable for government contractors and organizations in critical infrastructure sectors.',
    },
    {
      icon: CheckCircle,
      title: 'SEBI Guidelines Adherence',
      description: 'Compliant with Securities and Exchange Board of India guidelines for data protection and system security. **Perfect Fit:** Crucial for financial institutions operating in India, ensuring regulatory adherence and safeguarding financial data.',
    },
  ];

  const securityFeaturesRef = useRef([]);
  const complianceCertificationsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const animateOnScroll = (elementsRef: React.MutableRefObject<any[]>, staggerDelay = 0) => {
      elementsRef.current.forEach((element, index) => {
        if (element) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateY: [50, 0],
            easing: 'easeOutQuad',
            duration: 800,
            delay: index * staggerDelay,
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

    animateOnScroll(securityFeaturesRef, 100);
    animateOnScroll(complianceCertificationsRef, 100);

    if (ctaRef.current) {
      anime({
        targets: ctaRef.current,
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
          observer.observe(ctaRef.current);
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
              Enterprise-Grade Security
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Vaultix is built with security at its core, providing robust protection for your data 
            and ensuring compliance with global standards.
          </p>
        </div>

        {/* Core Security Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
              <Shield className="h-12 w-12 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Core Security Features
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Protect your organization with advanced security measures and proactive threat management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 opacity-0"
                ref={el => securityFeaturesRef.current[index] = el}
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
        </section>

        {/* Compliance & Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
              <FileText className="h-12 w-12 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Vaultix helps you meet and maintain compliance with leading industry standards and regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCertifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 opacity-0"
                ref={el => complianceCertificationsRef.current[index] = el}
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg mt-1">
                      <cert.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-xl text-white">{cert.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 opacity-0" ref={ctaRef}>
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Strengthen Your Security Posture
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Discover how Vaultix can safeguard your IT operations and ensure continuous compliance.
              </p>
              <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-100 font-semibold">
                Request a Security Brief
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Security;

