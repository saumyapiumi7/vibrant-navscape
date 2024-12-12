import { useState } from "react";
import { Mail, Bell, Settings, Battery, Wifi, Calendar } from "lucide-react";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

interface Notification {
  id: string;
  message: string;
  timestamp: string;
  type: string;
}

const Dashboard = () => {
  const { data: notifications, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const response = await fetch('https://notification-r8ql4q41.b4a.run/api/notifications');
      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }
      return response.json() as Promise<Notification[]>;
    },
    onError: (error) => {
      console.error('Error fetching notifications:', error);
      toast.error("Failed to load notifications");
    }
  });

  const stats = [
    {
      title: "New Letters",
      value: notifications?.filter(n => n.type === 'new_letter').length.toString() || "0",
      icon: <Mail className="w-6 h-6" />,
      change: "Today",
    },
    {
      title: "Battery Level",
      value: "85%",
      icon: <Battery className="w-6 h-6" />,
      change: "Good",
    },
    {
      title: "WiFi Signal",
      value: "Strong",
      icon: <Wifi className="w-6 h-6" />,
      change: "Connected",
    },
    {
      title: "Last Check",
      value: "2 min ago",
      icon: <Calendar className="w-6 h-6" />,
      change: "Active",
    },
  ];

  const handleNotificationTest = () => {
    toast.success("Test notification sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-down">
          <h1 className="text-3xl font-bold text-gray-900">SmartBox Dashboard</h1>
          <p className="text-gray-600">Monitor your smart letterbox status and notifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {stat.icon}
                </div>
                <span className="text-sm text-blue-600">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm">{stat.title}</h3>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-up">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Notifications</h2>
              <Bell className="h-5 w-5 text-blue-600" />
            </div>
            <div className="space-y-4">
              {isLoading ? (
                <p className="text-gray-500">Loading notifications...</p>
              ) : notifications && notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{notification.message}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(notification.timestamp).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No notifications available</p>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-up">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Quick Actions</h2>
              <Settings className="h-5 w-5 text-blue-600" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleNotificationTest}
                className="p-4 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 transition-colors flex items-center justify-center gap-2"
              >
                <Bell size={18} />
                Test Notification
              </button>
              <button className="p-4 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 transition-colors flex items-center justify-center gap-2">
                <Settings size={18} />
                Configure
              </button>
              <button className="p-4 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 transition-colors flex items-center justify-center gap-2">
                <Mail size={18} />
                Check Mail
              </button>
              <button className="p-4 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 transition-colors flex items-center justify-center gap-2">
                <Wifi size={18} />
                Check Connection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;