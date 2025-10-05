import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Code,
  FileCheck,
  Shield,
  Users,
  Banknote,
  HeartPulse,
  GraduationCap,
  Factory,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import anime from 'animejs';

const Industries = () => {
  const industrySolutions = [
    {
      icon: Code,
      title: 'Software & Technology',
      description: 'Manage open-source dependencies, track vulnerabilities, and maintain compliance across multiple projects and teams. Streamline incident response and asset lifecycle for rapid, secure development. **Perfect Fit:** Accelerates secure software delivery, reduces technical debt, and ensures compliance with industry standards like SOC 2 and ISO 27001, critical for competitive advantage.',
      useCases: [
        'Automated SBOM generation and vulnerability scanning',
        'CI/CD pipeline integration for continuous security',
        'Efficient bug tracking and incident management',
        'Asset management for development tools and infrastructure',
      ],
    },
    {
      icon: Banknote,
      title: 'Financial Services',
      description: 'Meet stringent regulatory requirements with automated compliance reporting, comprehensive audit trails, and robust data security. Ensure secure asset management and incident response for critical financial systems. **Perfect Fit:** Provides the robust auditability, data protection, and control necessary to navigate complex financial regulations (e.g., SEBI, GDPR) and protect sensitive client data, building trust and avoiding penalties.',
      useCases: [
        'Automated compliance reporting for SEBI, GDPR, etc.',
        'Comprehensive audit trails for all system activities',
        'Secure asset management for financial infrastructure',
        'Streamlined incident response for financial data breaches',
      ],
    },
    {
      icon: HeartPulse,
      title: 'Healthcare & Pharma',
      description: 'Ensure HIPAA compliance with secure asset management, detailed access control for sensitive systems, and robust data privacy features. Manage medical devices, software, and patient data securely. **Perfect Fit:** Offers the granular control, auditability, and data protection required to safeguard Protected Health Information (PHI) and meet strict healthcare compliance standards (e.g., HIPAA, GDPR), ensuring patient trust and regulatory adherence.',
      useCases: [
        'HIPAA compliant asset tracking and management',
        'Secure access control for patient data systems',
        'Automated incident response for data breaches',
        'Compliance reporting for healthcare regulations',
      ],
    },
    {
      icon: Factory,
      title: 'Manufacturing & IoT',
      description: 'Manage a vast array of IoT devices, operational technology (OT) assets, and industrial control systems. Monitor for vulnerabilities, streamline maintenance requests, and ensure operational continuity. **Perfect Fit:** Provides centralized management and security for diverse OT/IoT environments, crucial for maintaining uptime, preventing cyber-physical attacks, and ensuring compliance in industrial settings.',
      useCases: [
        'IoT device inventory and lifecycle management',
        'Vulnerability scanning for OT/ICS components',
        'Predictive maintenance scheduling via incident requests',
        'Compliance with industrial security standards',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Secure student and faculty data, manage IT assets across campuses, and streamline support requests. Ensure compliance with educational data privacy regulations and maintain a secure learning environment. **Perfect Fit:** Offers comprehensive asset and data management solutions tailored for educational institutions, protecting sensitive student information and ensuring operational efficiency across diverse IT landscapes.',
      useCases: [
        'Asset management for campus IT infrastructure',
        'Data privacy compliance (e.g., FERPA, GDPR) for student data',
        'Streamlined helpdesk for faculty and students',
        'Security monitoring for academic systems',
      ],
    },
    {
      icon: Shield,
      title: 'Government & Public Sector',
      description: 'Meet stringent security and compliance mandates for public sector operations. Manage critical infrastructure assets, ensure data sovereignty, and streamline citizen service requests with robust security. **Perfect Fit:** Provides a highly secure, auditable, and compliant platform essential for managing sensitive government data and critical infrastructure, adhering to national and international security frameworks (e.g., NIST, ISO 27001).',
      useCases: [
        'Compliance with government security frameworks (e.g., NIST)',
        'Secure management of critical infrastructure assets',
        'Automated incident response for public sector data',
        'Efficient service request management for citizens',
      ],
    },
  ];

  const industryCardsRef = useRef([]);
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

    animateOnScroll(industryCardsRef, 100);

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
              Solutions by Industry
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Vaultix adapts to your industry's unique requirements, providing tailored solutions 
            to enhance security, streamline operations, and ensure compliance.
          </p>
        </div>

        {/* Industry Solutions Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 opacity-0"
                ref={el => industryCardsRef.current[index] = el}
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg mt-1">
                      <solution.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-xl text-white">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 leading-relaxed mb-4">{solution.description}</p>
                  <h4 className="text-lg font-semibold mb-2">Key Use Cases:</h4>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    {solution.useCases.map((useCase, ucIndex) => (
                      <li key={ucIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
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
                Find Your Industry-Specific Solution
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Vaultix offers tailored solutions to meet the unique challenges and compliance needs of your industry. 
                Contact us to discuss how we can customize our platform for your organization.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-100 font-semibold">
                  Get a Tailored Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Industries;

