import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-up">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome to TechCo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming ideas into digital reality with cutting-edge technology
              and innovative solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/technology"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Explore Technology
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Pushing boundaries with cutting-edge technology solutions",
              },
              {
                title: "Expertise",
                description:
                  "Team of skilled professionals with years of experience",
              },
              {
                title: "Results",
                description:
                  "Delivering measurable impact for businesses worldwide",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;