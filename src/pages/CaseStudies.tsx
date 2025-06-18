
import { ArrowRight, TrendingUp, Users, Leaf, Target } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechCorp Industries",
      industry: "Technology",
      challenge: "Reduce carbon emissions by 50% within 2 years",
      solution: "Implemented comprehensive renewable energy strategy and carbon offset programs",
      results: [
        "65% reduction in carbon emissions",
        "$2.3M annual cost savings",
        "Carbon neutral certification achieved"
      ],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Leaf
    },
    {
      company: "Global Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "Implement circular economy principles across all operations",
      solution: "Redesigned production processes and established waste-to-resource programs",
      results: [
        "90% waste diversion from landfills",
        "$5.1M in resource cost savings",
        "40% reduction in raw material usage"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Target
    },
    {
      company: "RetailMax Chain",
      industry: "Retail",
      challenge: "Create sustainable supply chain and improve ESG reporting",
      solution: "Developed supplier sustainability standards and comprehensive ESG framework",
      results: [
        "100% sustainable sourcing achieved",
        "25% improvement in ESG score",
        "Enhanced stakeholder trust and loyalty"
      ],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Success{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how leading organizations have transformed their operations and 
              achieved remarkable sustainability outcomes with our strategic guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.company}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <study.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.company}</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 flex items-center">
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join these industry leaders and transform your organization&apos;s sustainability journey.
          </p>
          
          <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center mx-auto group hover:scale-105">
            Start Your Transformation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
