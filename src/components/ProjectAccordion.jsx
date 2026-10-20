import { useLayoutEffect, useRef, useState, useId } from "react";
import { projects } from "../JSData/ProjectData.js";
import "./ProjectAccordion.css";
import gsap from "gsap";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

export default function ProjectAccordion() {
  // The first project is expanded by default.
  const [activeProject, setActiveProject] = useState(projects[0]?.id ?? null);
  const [selectedProject, setSelectedProject] = useState(null);
  const instanceId = useId();
  const panelRefs = useRef(new Map());
  const previousActiveProject = useRef(activeProject);

  function toggleProject(id) {
    setActiveProject((current) => (current === id ? null : id));
  }

  useLayoutEffect(() => {
    const previousProject = previousActiveProject.current;
    const isInitialRender = previousProject === activeProject;
    const panels = panelRefs.current;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : 0.35;

    projects.forEach((project) => {
      const panel = panels.get(project.id);

      if (!panel) return;

      gsap.killTweensOf(panel);

      if (isInitialRender) {
        gsap.set(panel, { height: project.id === activeProject ? "auto" : 0 });
        return;
      }

      if (project.id === previousProject && previousProject !== activeProject) {
        gsap.to(panel, { height: 0, duration, ease: "power2.inOut" });
      } else if (project.id === activeProject && activeProject !== null) {
        gsap.fromTo(
          panel,
          { height: 0 },
          { height: "auto", duration, ease: "power2.inOut" },
        );
      }
    });

    previousActiveProject.current = activeProject;

    return () => {
      projects.forEach((project) => {
        const panel = panels.get(project.id);
        if (panel) gsap.killTweensOf(panel);
      });
    };
  }, [activeProject]);

  return (
    <section className="projects" id="Projects" tabIndex={-1}>
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
              <Reveal key={project.id}>
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
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                    ref={(element) => {
                      if (element) {
                        panelRefs.current.set(project.id, element);
                      } else {
                        panelRefs.current.delete(project.id);
                      }
                    }}
                  >
                    <div className="project__body">
                      <div className="project__details">
                        <p className="project__description">
                          {project.description}
                        </p>

                        {project.demo && (
                          <p className="project__description">{project.demo}</p>
                        )}

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

                        {project.liveCode && (
                          <a
                            href={project.liveCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project__Code"
                          >
                            View Code ↗
                          </a>
                        )}
                      </div>

                      <div className="project__visual">
                        <button
                          type="button"
                          className="project__image-button"
                          aria-label={`View full image and details for ${project.title}`}
                          onClick={() => setSelectedProject(project)}
                        >
                          <img
                            src={project.image}
                            alt={`${project.title} website preview`}
                            className="project__image"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </button>

                        <div className="project__credits">
                          {project.designer && (
                            <p className="designer_name">
                              <strong>Designer:</strong> {project.designer}
                            </p>
                          )}

                          {project.socialUrl && (
                            <a
                              href={project.socialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="designer__link"
                            >
                              Social Link ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
