import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FileUser } from "lucide-react";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  file: FileUser,
};

export default function SocialLinks({ links }) {
  return (
    <div className="contact__socials">
      <h3>Social Link</h3>

      <ul className="contact__social-list">
        {links.map((link) => {
          const Icon = iconMap[link.icon];

          if (!Icon) return null;

          return (
            <li key={link.id}>
              <a
                href={link.url}
                aria-label={link.label}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
              >
                <Icon size={22} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
