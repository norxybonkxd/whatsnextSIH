import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import { ThemeToggle } from "./ThemeToggle"

export default function Navigation() {
  const navigate = useNavigate();
  
  const scrollToContent = () => {
    const contentSection = document.getElementById('main-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <>
      <div className="relative h-screen">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/career-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        {/* Theme Toggle - Top Right */}
        <div className="absolute right-4 top-4 z-20">
          <ThemeToggle />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight text-white">
              What's Next
          </h1>

          {/* Get Started Button */}
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:scale-105"
            onClick={scrollToContent}
          >
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div id="main-content" className="bg-background">
        {/* Your main content goes here */}
      </div>
    </>
  );
}
