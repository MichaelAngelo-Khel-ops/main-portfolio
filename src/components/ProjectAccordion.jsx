import { useState, useId } from "react";
import { projects } from "../JSData/ProjectData.js";
import "./ProjectAccordion.css";

export default function ProjectAccordion() {
  // The first project is expanded by default.
  const [activeProject, setActiveProject] = useState(projects[0]?.id ?? null);

  const instanceId = useId();

  function toggleProject(id) {
    setActiveProject((current) => (current === id ? null : id));
  }

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h1>Project Journal</h1>
          <span className="projects__underline" />
        </div>

        <div className="projects__list">
          {projects.map((project, index) => {
            const isOpen = activeProject === project.id;
            const panelId = `${instanceId}-panel-${index}`;
            const triggerId = `${instanceId}-trigger-${index}`;

            return (
              <article
                className={`project ${isOpen ? "project--active" : ""}`}
                key={project.id}
              >
                <h3 className="project__heading">
                  <button
                    type="button"
                    className="project__trigger"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleProject(project.id)}
                  >
                    <span className="project__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="project__heading-content">
                      <span className="project__title">{project.title}</span>

                      <span className="project__tech">
                        {project.technologies.join(" · ")}
                      </span>
                    </span>

                    <span className="project__icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  className="project__panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                >
                  <div className="project__body">
                    <div className="project__details">
                      <p className="project__description">
                        {project.description}
                      </p>

                      <div className="project__meta">
                        <p>
                          <strong>Framework:</strong> {project.framework}
                        </p>
                        <p>
                          <strong>Focus:</strong> {project.focus}
                        </p>
                        <p>
                          <strong>Technical Style:</strong>{" "}
                          {project.technicalStyle}
                        </p>
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project__link"
                        >
                          View Live Project ↗
                        </a>
                      )}
                    </div>

                    <div className="project__visual">
                      <img
                        src={project.image}
                        alt={`${project.title} website preview`}
                        className="project__image"
                        loading={index === 0 ? "eager" : "lazy"}
                      />

                      <div className="project__credits">
                        {project.designer && (
                          <p>
                            <strong>Designer:</strong> {project.designer}
                          </p>
                        )}

                        {project.socialUrl && (
                          <a
                            href={project.socialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Social Link ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
