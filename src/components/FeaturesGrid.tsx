import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { 
  MapPin, 
  BarChart3, 
  TrendingUp, 
  GitBranch, 
  Shield, 
  Network,
  ArrowRight,
  Sparkles
} from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      id: 1,
      title: "Career Planning",
      description: "Create your personalized career path based on your interests and goals.",
      icon: MapPin,
      path: "/career-mapping"
    },
    {
      id: 2,
      title: "Skills Analysis", 
      description: "Identify your skill gaps and get recommendations for improvement.",
      icon: BarChart3,
      path: "/skill-analysis"
    },
    {
      id: 3,
      title: "Market Research",
      description: "Explore salary trends and job market demands in your field.",
      icon: TrendingUp,
      path: "/market-insights"
    },
    {
      id: 4,
      title: "Multiple Paths",
      description: "Explore different career paths that match your interests.",
      icon: GitBranch,
      path: "/multi-path"
    },
    {
      id: 5,
      title: "Backup Planning",
      description: "Create alternative career plans for better job security.",
      icon: Shield,
      path: "/resilience"
    },
    {
      id: 6,
      title: "Career Roadmaps",
      description: "View step-by-step guides to reach your career goals.",
      icon: Network,
      path: "/roadmaps"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium">Interactive Demo Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience the
            <span className="text-blue-600"> Future of Career Planning</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our comprehensive suite of professional tools designed to guide your career journey 
            with intelligence, precision, and strategic foresight.
          </p>
        </div>

        {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature) => (
          <Link
            to={feature.path}
            key={feature.id}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </Link>
        ))}
      </div>        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-600 mb-6">
              Start with our guided demo tour to experience all features in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Demo Tour
              </Button>
              <Button size="lg" variant="outline" className="text-gray-600 hover:text-gray-900">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;