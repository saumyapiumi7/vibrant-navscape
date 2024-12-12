const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            About TechCo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are passionate about technology and committed to delivering
            innovative solutions that drive business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-up">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with cutting-edge technology solutions that
              drive growth and innovation in the digital age.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-up">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading technology partner for businesses worldwide,
              known for excellence, innovation, and customer success.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg animate-fade-up">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries and embracing new technologies",
              },
              {
                title: "Excellence",
                description: "Delivering the highest quality in everything we do",
              },
              {
                title: "Integrity",
                description: "Building trust through honest and ethical practices",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;