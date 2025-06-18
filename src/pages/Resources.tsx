
import { ArrowRight, Download, BookOpen, Video, FileText, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Sustainability Assessment Template",
      description: "Comprehensive template to evaluate your organization's current sustainability practices.",
      type: "PDF Template",
      downloadUrl: "#"
    },
    {
      icon: BookOpen,
      title: "ESG Reporting Guide",
      description: "Step-by-step guide to creating effective ESG reports that meet industry standards.",
      type: "Guide",
      downloadUrl: "#"
    },
    {
      icon: Video,
      title: "Carbon Footprint Calculator",
      description: "Interactive tool to calculate and track your organization's carbon emissions.",
      type: "Web Tool",
      downloadUrl: "#"
    },
    {
      icon: Users,
      title: "Stakeholder Engagement Framework",
      description: "Framework for engaging stakeholders in your sustainability initiatives.",
      type: "Framework",
      downloadUrl: "#"
    }
  ];

  const webinars = [
    {
      title: "Building a Sustainable Supply Chain",
      date: "March 15, 2024",
      duration: "45 minutes",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Climate Risk Assessment for Businesses",
      date: "March 22, 2024",
      duration: "60 minutes",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
              Sustainability{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive library of tools, guides, and resources to accelerate 
              your sustainability journey and drive meaningful environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Resources
            </h2>
            <p className="text-lg text-gray-600">
              Download our expert-crafted tools and templates to get started immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <resource.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <button className="flex items-center text-green-600 hover:text-green-700 font-medium">
                      <Download className="w-4 h-4 mr-2" />
                      Download Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-lg text-gray-600">
              Join our expert-led sessions to deepen your sustainability knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-4">{webinar.date}</span>
                    <span>{webinar.duration}</span>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 flex items-center">
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
