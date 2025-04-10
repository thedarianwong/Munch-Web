// Test first without any Lucide icons
import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'video', label: 'Demo' },
  { id: 'features', label: 'Features' },
  { id: 'diagrams', label: 'Diagrams' }
];

const heroStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'rgba(247, 184, 210, 0.35)',
  backgroundBlendMode: 'overlay'
};

const MunchLandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop - 100 &&
          scrollPosition < offsetTop + offsetHeight - 100
        ) {
          setActiveSection(id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgba(247, 184, 210, 0.1)' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 shadow-md z-50" 
     style={{ backgroundColor: 'rgba(247, 184, 210)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="/munch_logo.png"
                alt="Munch Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`hover:text-[#6b64b8] transition-colors ${
                    activeSection === id ? 'text-[#6b64b8] font-semibold' : 'text-gray-600'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#6b64b8]"
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block px-3 py-2 rounded-md ${
                    activeSection === id
                      ? 'bg-[#f7b8d2] bg-opacity-20 text-[#6b64b8]'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
  id="home" 
  className="min-h-screen flex items-center pt-16 relative"
  style={heroStyle}
>
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
      <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "#6b64b8" }}>
  Where Friends Meet to Munch
</h1>
        <p className="text-xl text-black mb-8">
          Discover new restaurants and make group dining decisions easier than ever.
        </p>
        <div className="grid grid-cols-2 gap-4">
  <a 
    href="https://drive.google.com/file/d/1ySZhiUKVul3I13NMod8wSwL5Um1RXVpV/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    style={{ backgroundColor: '#6b64b8' }} 
    className="flex items-center justify-center text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors"
  >
    📱 Download APK
  </a>
  <a 
    href="https://github.com/AdrianJelenici5/Munch-CMPT362"
    target="_blank"
    rel="noopener noreferrer"
    style={{ backgroundColor: '#6b64b8' }} 
    className="flex items-center justify-center text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors"
  >
    📦 App Repository
  </a>
  <a 
    href="https://github.com/thedarianwong/Munch-Web"
    target="_blank"
    rel="noopener noreferrer"
    style={{ backgroundColor: '#6b64b8' }} 
    className="flex items-center justify-center text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors"
  >
    💻 Website Repository
  </a>
  <a 
    href="https://drive.google.com/file/d/1YzmfzS1Y7Y1ackaWk0DIalD2wmZEIyBM/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    style={{ backgroundColor: '#6b64b8' }} 
    className="flex items-center justify-center text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors"
  >
    📂 Download Project
  </a>
</div>
      </div>
      <div className="md:w-1/2">
        <img
          src="/munch_phone.png"
          alt="Munch App Preview"
          className="rounded-lg shadow-xl w-full max-w-sm mx-auto"
        />
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
<section id="about" className="bg-white">
  <div className="max-w-7xl mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold text-center mb-12">About Munch</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center p-6">
        <div style={{ backgroundColor: 'rgba(247, 184, 210, 0.1)' }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Discover</h3>
        <p className="text-gray-600">Find new restaurants that match your group's preferences</p>
      </div>
      <div className="text-center p-6">
        <div style={{ backgroundColor: 'rgba(247, 184, 210, 0.2)' }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">👥</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Connect</h3>
        <p className="text-gray-600">Create groups and organize dining experiences easily</p>
      </div>
      <div className="text-center p-6">
        <div style={{ backgroundColor: 'rgba(247, 184, 210, 0.2)' }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✨</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Decide</h3>
        <p className="text-gray-600">Make group decisions quickly with our voting system</p>
      </div>
    </div>
  </div>
</section>

      {/* Video Demo Section */}
      <section id="video" style={heroStyle}>
  <div className="max-w-7xl mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold text-center mb-12">See Munch in Action</h2>
    <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
      {/* Video 1 */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Munch App Demo</h3>
        <div className="aspect-w-1 aspect-h-1">
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.youtube.com/embed/T5LP2IfMV_8?si=KqJilNzW-h8atlHd"
            title="Munch App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Video 2 */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Show and Tell 1</h3>
        <div className="aspect-w-1 aspect-h-1">
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.youtube.com/embed/bbyXJNIfll0?si=ZeOeQq9oCecvs6U-"
            title="Show and Tell 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Video 3 */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Show and Tell 2</h3>
        <div className="aspect-w-1 aspect-h-1">
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.youtube.com/embed/SzHTgh1suQA?si=M_s-g670IgWUsN7N"
            title="Show and Tell 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Video 4 */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Final Presentation</h3>
        <div className="aspect-w-1 aspect-h-1">
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.youtube.com/embed/1UbOCT5ob0c?si=AdzkDBiP3RGk37BW"
            title="Final Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
<section id="features" className="bg-white">
  <div className="max-w-7xl mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-6 border rounded-lg bg-white hover:border-[#6b64b8] transition-colors">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#6b64b8' }}>Smart Recommendations</h3>
        <p className="text-gray-600">Our algorithm learns from your preferences to suggest restaurants you'll love.</p>
      </div>
      <div className="p-6 border rounded-lg bg-white hover:border-[#6b64b8] transition-colors">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#6b64b8' }}>Group Voting</h3>
        <p className="text-gray-600">Democratic decision-making made easy with our built-in voting system.</p>
      </div>
      <div className="p-6 border rounded-lg bg-white hover:border-[#6b64b8] transition-colors">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#6b64b8' }}>Location Awareness</h3>
        <p className="text-gray-600">Find great restaurants nearby or plan ahead for other locations.</p>
      </div>
      <div className="p-6 border rounded-lg bg-white hover:border-[#6b64b8] transition-colors">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#6b64b8' }}>Review Integration</h3>
        <p className="text-gray-600">Access reviews from multiple sources in one place.</p>
      </div>
    </div>
  </div>
</section>

      {/* Diagrams Section */}
      <section id="diagrams" style={heroStyle}>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <img
                src="/munch_mvvm.png"
                alt="System Architecture"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#6b64b8' }}>System Architecture</h3>
              <p className="text-gray-600">Our robust backend ensures smooth performance and real-time updates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <img
                src="/munch_thread.png"
                alt="User Flow"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#6b64b8' }}>Threaded Diagram</h3>
              <p className="text-gray-600">Intuitive design makes our app smoother and seamless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Team Members & Contributions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg bg-white hover:border-[#6b64b8] transition-colors">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#6b64b8' }}>Adrian Jelenici</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Local Database Implementation</li>
                <li>Custom Restaurant UI/Adapters</li>
                <li>Review Fragment & Sorting</li>
                <li>Discovery Map Integration</li>
                <li>Interactive Map Features</li>
                <li>Search Functionality</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg bg-white hover:border-[#6b64b8] transition-colors">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#6b64b8' }}>Darian Wong</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Room Database Caching</li>
                <li>Profile & Group UI Enhancement</li>
                <li>Hilt Dependency Injection</li>
                <li>Project Webpage</li>
                <li>Google Sign-In Integration</li>
                <li>Profile Picture Storage</li>
                <li>MVVM & Thread Documentation</li>
                <li>Profile Radius Implementation</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg bg-white hover:border-[#6b64b8] transition-colors">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#6b64b8' }}>Gabriel Cheng</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Group/Member Management</li>
                <li>Firebase Integration</li>
                <li>Group Voting System</li>
                <li>Restaurant List Management</li>
                <li>Member Information Display</li>
                <li>Threading Implementation</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg bg-white hover:border-[#6b64b8] transition-colors">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#6b64b8' }}>Jun Pin Foo</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Swipe Interface Development</li>
                <li>Swipe Results Caching</li>
                <li>Restaurant Scoring System</li>
                <li>API Integration Framework</li>
                <li>Tab Navigation</li>
                <li>Search Area Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MunchLandingPage;