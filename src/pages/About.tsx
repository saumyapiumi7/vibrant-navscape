const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          Behind the Concept
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The IoT-based Smart Letter Box Notification System was created to address the inefficiencies in rural postal communication by automating letter detection and notifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-up">
            <h2 className="text-2xl font-semibold mb-4">Mission</h2>
            <p className="text-gray-600">
            To develop innovative, user-friendly solutions that improve communication and make life easier for rural communities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-up">
            <h2 className="text-2xl font-semibold mb-4">Vision</h2>
            <p className="text-gray-600">
            To create a smarter, more connected world where technology bridges gaps in essential services.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg animate-fade-up">
          <h2 className="text-2xl font-semibold mb-4 text-center">Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Creating smart and practical solutions for real-world challenges.",
              },
              {
                title: "Simplicity",
                description: "Building user-friendly systems that are easy to understand and use.",
              },
              {
                title: "Reliability",
                description: "Delivering dependable technology that users can trust.",
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