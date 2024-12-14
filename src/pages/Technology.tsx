import { Server, Code, Database } from "lucide-react";
import { useState } from "react";

const Technology = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const technologies = [
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      name: "Hardware Components",
      description: (
        <>
          NodeMCU 8266 <br />
          IR Sensor <br />
          Communication Protocols
        </>
      ),
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      name: "Software Components",
      description: (
        <>
          Arduino IDE <br />
          IFTTT or Blynk <br />
          Gmail
        </>
      ),
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      name: "Workflow",
      description: (
        <>
          Object Detection <br />
          Signal Processing <br />
          Notification Dispatch
        </>
      ),
    },
  ];

  const handleCopyCode = () => {
    const code = document.getElementById("arduino-code").innerText;
    navigator.clipboard.writeText(code).then(
      () => setCopySuccess("Code copied to clipboard!"),
      () => setCopySuccess("Failed to copy code.")
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Tech Stack
          </h1>
          <p className="text-xl text-gray-600">
            This project harnesses IoT technology to automate mail detection and notification, providing an innovative solution to rural communication challenges.
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

        {/* YouTube video and code side by side */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YouTube Video */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Video of Implementation</h3>
            <iframe
              width="530"
              height="315"
              src="https://www.youtube.com/embed/7uHe4nH7z7M?si=Zft70IYH8yEPIm1u"
              title="Video of Implementation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Arduino Code */}
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            
            
            <div className="flex justify-between items-center w-full">
              
            <h3 className="text-xl font-semibold mb-4 ">Code of Implementation</h3>
            
            <div className="flex justify-between items-center ">
              <button
                onClick={handleCopyCode}
                className="bg-primary text-white py-1.5 px-2 rounded-md"
              >
                Copy Code
              </button>
              {copySuccess && <span className="text-green-500 ml-4">{copySuccess}</span>}
            </div>
            </div>
            <div className="max-h-80 overflow-y-auto">
              <pre
                id="arduino-code"
                className="bg-gray-800 text-sm text-white p-5 rounded-md overflow-auto"
              >
                {`// Blynk and WiFi configuration
#define BLYNK_TEMPLATE_ID "your BLYNK_TEMPLATE_ID"
#define BLYNK_TEMPLATE_NAME "your BLYNK_TEMPLATE_NAME"
#define BLYNK_AUTH_TOKEN "your BLYNK_AUTH_TOKEN"

// WiFi credentials
char auth[] = BLYNK_AUTH_TOKEN;
char ssid[] = "your WiFi SSID";
char pass[] = "Your WIFI Password";

// IR Sensor configuration
#define IR_SENSOR_PIN 4           // GPIO4 (D2 on NodeMCU) for IR sensor
BlynkTimer timer;
bool notificationSent = false;

void sendToMongoDB(const String &message) {
  // Your send to MongoDB code here
}

void checkIRSensor() {
  int objectDetected = digitalRead(IR_SENSOR_PIN);
  if (objectDetected == 0 && !notificationSent) {
    Serial.println("Letter detected! Sending notification...");
    Blynk.logEvent("new_letter", "A new letter has been detected in the Smart Letterbox!");
    sendToMongoDB("Pending");
    notificationSent = true;
  } else if (objectDetected == 1) {
    Serial.println("No object detected.");
    notificationSent = false;
  }
}

void setup() {
  pinMode(IR_SENSOR_PIN, INPUT);
  Serial.begin(115200);
  Blynk.begin(auth, ssid, pass);
  timer.setInterval(1000L, checkIRSensor);
}

void loop() {
  Blynk.run();
  timer.run();
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
