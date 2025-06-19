import { ArrowRight, Leaf, Target, Users, TrendingUp, CheckCircle, Globe, Lightbulb, Play, Youtube } from "lucide-react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import MetricCard from "../components/MetricCard";
import Footer from "../components/Footer";

const Index = () => {
  const services = [
    {
      icon: Leaf,
      title: "Environmental Strategy",
      description: "Comprehensive environmental assessments and sustainable business strategies that reduce impact while improving performance.",
      features: ["Carbon footprint analysis", "Waste reduction programs", "Renewable energy planning", "Environmental compliance"]
    },
    {
      icon: Target,
      title: "Sustainability Consulting",
      description: "Strategic guidance to integrate sustainability into your core business operations and achieve meaningful impact.",
      features: ["ESG framework development", "Stakeholder engagement", "Sustainability reporting", "Goal setting & tracking"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Data-driven solutions that optimize resource efficiency while driving cost savings and operational excellence.",
      features: ["Resource efficiency audits", "Process optimization", "Technology integration", "ROI measurement"]
    },
    {
      icon: Users,
      title: "Organizational Change",
      description: "Transform your culture and engage teams in sustainability initiatives that create lasting organizational impact.",
      features: ["Training & workshops", "Change management", "Team engagement", "Leadership development"]
    }
  ];

  const metrics = [
    { number: "500+", label: "Projects Completed", description: "Successful sustainability transformations" },
    { number: "85%", label: "Cost Reduction", description: "Average operational savings achieved" },
    { number: "1M+", label: "Tons CO₂ Saved", description: "Environmental impact reduction" },
    { number: "98%", label: "Client Satisfaction", description: "Trusted by industry leaders" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/1778d6dd-b763-4ba4-bae8-e251b84deb34.png)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Build a{" "}
                  <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                    Sustainable
                  </span>
                  <br />
                  Future
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Transform your business with strategic sustainability consulting that drives 
                  environmental impact, operational efficiency, and long-term growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center group hover:scale-105">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                    View Case Studies
                  </button>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>Carbon Neutral Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-green-400 mr-2" />
                    <span>Global Impact</span>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="w-5 h-5 text-green-400 mr-2" />
                    <span>Innovative Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learn from{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Our Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch our sustainability experts share insights, case studies, and actionable strategies 
              to help your business become more sustainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Sustainable Business Strategies for 2024",
                duration: "12:45",
                views: "15K views",
                thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Carbon Footprint Reduction: A Complete Guide",
                duration: "18:30",
                views: "23K views",
                thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "ESG Reporting Made Simple",
                duration: "9:15",
                views: "8.5K views",
                thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 text-white p-4 rounded-full">
                      <Play className="w-8 h-8" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.views}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://youtube.com/@sustrategy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 group hover:scale-105"
            >
              <Youtube className="mr-3 w-6 h-6" />
              Subscribe to Our Channel
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive sustainability solutions tailored to your business needs, 
              from strategy development to implementation and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section id="impact" className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='nonzero'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Measurable Impact
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Our data-driven approach delivers tangible results that benefit both 
              your business and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  SuStrategy
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We&apos;re not just consultants—we&apos;re partners in your sustainability journey. 
                Our team combines deep industry expertise with innovative thinking to deliver 
                solutions that create lasting value.
              </p>
              
              <div className="space-y-4">
                {[
                  "Proven track record with 500+ successful projects",
                  "Expert team with decades of combined experience",
                  "Data-driven approach with measurable outcomes",
                  "Customized solutions for your unique challenges",
                  "End-to-end support from strategy to implementation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <Leaf className="w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-green-100 leading-relaxed">
                    To accelerate the transition to a sustainable economy by empowering 
                    businesses with the strategies, tools, and expertise needed to thrive 
                    in an environmentally conscious world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make an{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Impact?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Let&apos;s discuss how we can help your organization build a more sustainable future. 
            Schedule a consultation to explore the possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center group hover:scale-105">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
              Download Resources
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
