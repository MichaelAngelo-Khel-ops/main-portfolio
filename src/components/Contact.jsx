import { Mail, MapPin, Send } from "lucide-react";
import { contact } from "../JSData/contact";
import SocialLinks from "../components/SocialLinks";
import "./Contact.css";

export default function Contact() {
  const { title, subtitle, email, location, message, about, socials } = contact;

  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    message.subject,
  )}`;

  return (
    <section
      className="contact"
      id="Contact"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <div className="contact__container">
        {/* Section heading */}
        <div className="contact__header">
          <h2 id="contact-title">{title}</h2>
          <p>{subtitle}</p>
          <span className="contact__underline" aria-hidden="true" />
        </div>

        {/* Contact cards */}
        <div className="contact__grid">
          <div className="contact__card contact__card--email">
            <Mail
              className="contact__mail-icon"
              size={88}
              strokeWidth={2}
              aria-hidden="true"
            />

            <h3>{message.heading}</h3>
            <p className="contact__prompt">{message.description}</p>

            <a className="contact__button button-primary" href={emailLink}>
              <Send size={18} aria-hidden="true" />
              {message.buttonText}
            </a>

            <p className="contact__email-label">Contact Email:</p>

            <a className="contact__email" href={`mailto:${email}`}>
              {email}
            </a>

            <p className="contact__location">
              <MapPin size={15} aria-hidden="true" />
              {location}
            </p>
          </div>

          <div className="contact__card contact__card--about">
            <h3>{about.heading}</h3>

            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}

            <p className="contact__motto">{about.motto}</p>

            <p>
              <strong className="contact__status-label">STATUS:</strong>{" "}
              {about.status}
            </p>
          </div>
        </div>

        {/* Social links */}
        <SocialLinks links={socials} />
      </div>
    </section>
  );
}
