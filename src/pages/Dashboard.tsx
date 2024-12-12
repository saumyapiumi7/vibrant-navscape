import { useState } from "react";
import { BarChart, Users, Activity, DollarSign } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: <Users className="w-6 h-6" />,
      change: "+12%",
    },
    {
      title: "Revenue",
      value: "$12,345",
      icon: <DollarSign className="w-6 h-6" />,
      change: "+8%",
    },
    {
      title: "Active Projects",
      value: "45",
      icon: <Activity className="w-6 h-6" />,
      change: "+5%",
    },
    {
      title: "Conversion Rate",
      value: "2.4%",
      icon: <BarChart className="w-6 h-6" />,
      change: "+2%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/5 to-secondary/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-down">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Admin!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {stat.icon}
                </div>
                <span className="text-sm text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm">{stat.title}</h3>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-up">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                "New user registration",
                "Project milestone completed",
                "System update deployed",
                "New feature released",
              ].map((activity, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-up">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Generate Report",
                "Update Profile",
                "View Analytics",
                "Manage Users",
              ].map((action, index) => (
                <button
                  key={index}
                  className="p-4 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;