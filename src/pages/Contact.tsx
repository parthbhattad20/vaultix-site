import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import * as anime from 'animejs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@vaultix.in',
      link: 'mailto:contact@vaultix.in',
      perfectFit: 'Direct email support ensures detailed communication for complex inquiries. **Perfect Fit:** Ideal for non-urgent, comprehensive discussions about your specific needs and technical questions.',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 (123) 456-7890',
      link: 'tel:+911234567890',
      perfectFit: 'Immediate phone support for urgent matters and direct conversations. **Perfect Fit:** Best for quick resolutions, critical issues, or when you prefer a personal touch in communication.',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Bangalore, Karnataka, India',
      link: null,
      perfectFit: 'Our physical presence in Bangalore allows for in-person meetings and local support. **Perfect Fit:** Beneficial for local clients who prefer face-to-face consultations or have specific regional compliance requirements.',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9:00 AM - 6:00 PM IST',
      link: null,
      perfectFit: 'Clear business hours ensure you know when to expect support and assistance. **Perfect Fit:** Provides predictability for planning your support needs and ensures timely responses during working days.',
    },
  ];

  const contactFormRef = useRef(null);
  const contactInfoCardsRef = useRef([]);
  const requestDemoCardRef = useRef(null);
  const freeTrialCardRef = useRef(null);
  const otherWaysToConnectRef = useRef([]);

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

    if (contactFormRef.current) {
      anime({
        targets: contactFormRef.current,
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
          observer.observe(contactFormRef.current);
        }
      });
    }

    animateOnScroll(contactInfoCardsRef, 100);

    if (requestDemoCardRef.current) {
      anime({
        targets: requestDemoCardRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutQuad',
        duration: 800,
        delay: 200, // Delay after contact info cards
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
          observer.observe(requestDemoCardRef.current);
        }
      });
    }

    if (freeTrialCardRef.current) {
      anime({
        targets: freeTrialCardRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutQuad',
        duration: 800,
        delay: 400, // Delay after request demo card
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
          observer.observe(freeTrialCardRef.current);
        }
      });
    }

    animateOnScroll(otherWaysToConnectRef, 100);

  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Have questions about Vaultix? We're here to help. Reach out to our team and we'll 
            get back to you as soon as possible. **Perfect Fit:** Our dedicated support channels ensure your organization receives timely and effective assistance, crucial for maintaining operational continuity and maximizing your investment in Vaultix.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2 opacity-0" ref={contactFormRef}>
            <Card className="bg-slate-900/50 border-purple-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-slate-900/50 border-purple-500/20 opacity-0" ref={el => contactInfoCardsRef.current[0] = el}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-500/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-slate-400 hover:text-purple-400 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-slate-400">{info.content}</p>
                        )}
                        <p className="text-slate-500 text-xs mt-1 italic">{info.perfectFit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 opacity-0" ref={requestDemoCardRef}>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Request a Demo</h3>
                <p className="text-slate-300 mb-6">
                  See Vaultix in action. Schedule a personalized demo with our team to explore 
                  how we can transform your IT operations. **Perfect Fit:** A tailored demonstration allows you to see exactly how Vaultix addresses your organization's unique challenges and integrates with your existing systems.
                </p>
                <Button className="w-full bg-white text-purple-900 hover:bg-slate-100 font-semibold">
                  Schedule Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-500/20 opacity-0" ref={freeTrialCardRef}>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Start Free Trial</h3>
                <p className="text-slate-300 mb-6">
                  Try Vaultix free for 14 days with full access to Standard plan features. 
                  No credit card required. **Perfect Fit:** Experience the full power of Vaultix firsthand, allowing your team to evaluate its capabilities in your own environment before making a commitment.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Support Options */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 opacity-0" ref={el => otherWaysToConnectRef.current[0] = el}>
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl mb-4">
                  <Mail className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-slate-400 mb-4">
                  Get help via email. We typically respond within 24 hours. **Perfect Fit:** For detailed inquiries or non-urgent issues, email provides a documented communication trail and thorough responses.
                </p>
                <a href="mailto:support@vaultix.in" className="text-purple-400 hover:text-purple-300 font-medium">
                  support@vaultix.in
                </a>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 opacity-0" ref={el => otherWaysToConnectRef.current[1] = el}>
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl mb-4">
                  <Phone className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-slate-400 mb-4">
                  Speak directly with our support team during business hours. **Perfect Fit:** For immediate assistance or complex issues requiring real-time discussion, phone support offers direct access to our experts.
                </p>
                <a href="tel:+911234567890" className="text-purple-400 hover:text-purple-300 font-medium">
                  +91 (123) 456-7890
                </a>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 opacity-0" ref={el => otherWaysToConnectRef.current[2] = el}>
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl mb-4">
                  <MapPin className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-400 mb-4">
                  Schedule a visit to our office in Bangalore. **Perfect Fit:** For strategic partnerships or in-depth consultations, an in-person visit allows for comprehensive discussions and tailored solutions.
                </p>
                <span className="text-purple-400 font-medium">
                  Bangalore, Karnataka
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

