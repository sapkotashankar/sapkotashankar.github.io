import { MapPin, Github, Linkedin, Twitter, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Sidebar = () => {
  return (
    <aside className="lg:sticky lg:top-24 space-y-6">
      {/* Profile Card */}
      <div className="bg-card border rounded-lg p-6 profile-shadow">
        <div className="flex flex-col items-center text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-muted"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">John Doe</h2>
          <p className="text-muted-foreground mb-4">
            Full-stack developer passionate about creating elegant solutions to complex problems.
          </p>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span>San Francisco, CA</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground link-hover"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground link-hover"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground link-hover"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-muted-foreground link-hover"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
