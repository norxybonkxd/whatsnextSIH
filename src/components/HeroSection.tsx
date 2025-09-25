// Simple imports
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Main hero section
function HeroSection() {
  // Navigation hook
  const navigate = useNavigate()

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-[80vh] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              Career Planning Platform
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Find Your Perfect{' '}
                <span className="text-blue-600 dark:text-blue-400">Career Path</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Take control of your professional future with data-driven insights 
                and personalized guidance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => navigate('/home')}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Right side content */}
          <div className="relative hidden lg:block">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What We Offer
              </h3>
              <ul className="space-y-5">
                <li className="flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 p-2 rounded-full mr-4 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Career Path Planning</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 p-2 rounded-full mr-4 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Skills Assessment</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 p-2 rounded-full mr-4 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Job Market Analysis</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 p-2 rounded-full mr-4 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Learning Paths</span>
                </li>
              </ul>
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-900 rounded-2xl transform translate-x-4 translate-y-4"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7+</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">Smart Features</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">Support Available</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Free</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">To Get Started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection