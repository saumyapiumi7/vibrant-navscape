import { Server, Code, Database } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      name: "Cloud Infrastructure",
      description:
        "Scalable and reliable cloud solutions for modern applications.",
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      name: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies.",
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      name: "Data Analytics",
      description: "Transform your data into actionable insights.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Our Technology Stack
          </h1>
          <p className="text-xl text-gray-600">
            Leveraging the latest technologies to build powerful solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {tech.icon}
                <h3 className="text-xl font-semibold">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;