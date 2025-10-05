import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Settings, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const pricingPlans = [
    {
      name: 'Basic',
      description: 'For small teams starting their asset management journey',
      assets: 'Up to 100 Assets',
      monthlyPrice: 2000,
      annualPrice: 1600,
      popular: false,
      features: [
        'Asset Inventory Management',
        'Basic SBOM (Software Bill of Materials)',
        'Automated Asset Discovery',
        'Role-Based Access Control',
        'Email Support',
        'Standard Reporting',
        'Up to 5 Team Members',
        'Basic Workflow Automation',
      ],
    },
    {
      name: 'Standard',
      description: 'Perfect for growing organizations',
      assets: 'Up to 500 Assets',
      monthlyPrice: 3333,
      annualPrice: 2666,
      popular: true,
      features: [
        'All Basic Plan Features',
        'Advanced SBOM with Dependency Tracking',
        'API Integrations',
        'Customizable Reports & Dashboards',
        'Security & Compliance Monitoring',
        'Vulnerability Scanning',
        'Up to 20 Team Members',
        'Advanced Workflow Automation',
        'SLA Management',
        'Priority Email Support',
      ],
    },
    {
      name: 'Premium',
      description: 'Advanced features for larger enterprises',
      assets: 'Up to 2000 Assets',
      monthlyPrice: 5833,
      annualPrice: 4666,
      popular: false,
      features: [
        'All Standard Plan Features',
        'Real-Time Risk Assessment & Threat Intelligence',
        'Compliance Audit Reports (SEBI, ISO 27001, NIST, etc.)',
        'Advanced Analytics & Insights',
        'Custom Integrations',
        'Unlimited Team Members',
        'Dedicated Account Manager',
        'Phone & Chat Support',
        'Custom Workflow Builder',
        'Multi-Site Support',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      assets: 'Unlimited Assets',
      monthlyPrice: null,
      annualPrice: null,
      popular: false,
      features: [
        'All Premium Plan Features',
        'Custom Integrations & On-Prem Deployment Option',
        'Dedicated Security Consultant',
        '24/7 Support',
        'Custom SLA Agreements',
        'White-Label Options',
        'Advanced Security Features',
        'Compliance Consulting',
        'Training & Onboarding',
        'Dedicated Infrastructure',
      ],
    },
  ];

  const customizationOptions = [
    {
      icon: Settings,
      title: 'Custom Fields & Forms',
      description: 'Tailor data collection to your specific organizational needs with custom fields, forms, and validation rules.',
    },
    {
      icon: Zap,
      title: 'Custom Integrations',
      description: 'Connect Vaultix with your existing tools and systems through custom API integrations and webhooks.',
    },
    {
      icon: Shield,
      title: 'On-Premise Deployment',
      description: 'Deploy Vaultix on your own infrastructure for maximum control and compliance with data residency requirements.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Get personalized support from our team with dedicated account managers and priority assistance.',
    },
  ];

  const calculatePrice = (monthlyPrice: number | null, annualPrice: number | null) => {
    if (monthlyPrice === null || annualPrice === null) return 'Custom Pricing';
    const price = billingCycle === 'monthly' ? monthlyPrice : annualPrice;
    return `₹${price.toLocaleString()}/month`;
  };

  const calculateSavings = () => {
    return billingCycle === 'annual' ? '(Save up to 20%)' : '';
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your organization. All plans include core ITSM features 
            with the flexibility to scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center space-x-4 bg-slate-900/50 border border-purple-500/20 rounded-full p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual <span className="text-green-400 text-sm ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50 scale-105'
                  : 'bg-slate-900/50 border-purple-500/20'
              } hover:border-purple-500/50 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="text-sm text-purple-400 font-medium mb-4">{plan.assets}</div>
                <div className="text-4xl font-bold text-white mb-1">
                  {calculatePrice(plan.monthlyPrice, plan.annualPrice)}
                </div>
                {plan.monthlyPrice && (
                  <div className="text-sm text-green-400">{calculateSavings()}</div>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 text-slate-300 text-sm">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.monthlyPrice ? (
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
                    Get Started
                  </Button>
                ) : (
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
                      Contact Sales
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customization Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Customization & Flexibility
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Every organization has unique requirements. Vaultix offers extensive customization 
              options to ensure the platform fits your specific needs and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customizationOptions.map((option, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-purple-500/10 rounded-lg">
                      <option.icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{option.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Enterprise-Grade Features
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  All plans include enterprise-grade security, reliability, and performance features 
                  to ensure your IT operations run smoothly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl mb-4">
                    <Shield className="h-10 w-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">99.9% Uptime SLA</h3>
                  <p className="text-slate-400">Enterprise-grade infrastructure with guaranteed availability</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl mb-4">
                    <Zap className="h-10 w-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Sync</h3>
                  <p className="text-slate-400">Instant updates across all users and integrations</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl mb-4">
                    <Settings className="h-10 w-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Deployment</h3>
                  <p className="text-slate-400">Cloud, on-premise, or hybrid deployment options</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="bg-slate-900/50 border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-slate-400">Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades will apply at the start of your next billing cycle.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">What happens if I exceed my asset limit?</h3>
                <p className="text-slate-400">We'll notify you when you approach your asset limit. You can upgrade to a higher tier or contact us for a custom plan that fits your needs.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer a free trial?</h3>
                <p className="text-slate-400">Yes, we offer a 14-day free trial with full access to Standard plan features. No credit card required to start.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-slate-400">We accept all major credit cards, bank transfers, and can provide invoicing for enterprise customers.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today or contact our sales team to discuss custom enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-100 font-semibold px-8 py-6 text-lg">
                  Start Free Trial
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

export default Pricing;
