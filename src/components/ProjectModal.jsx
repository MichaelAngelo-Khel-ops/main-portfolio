import { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return undefined;

    dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  function closeModal() {
    const dialog = dialogRef.current;

    if (!dialog?.open) return;

    dialog.close();
    onClose();
  }

  return createPortal(
    <dialog
      className="project-modal"
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        closeModal();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div
        className="project-modal__backdrop"
        aria-hidden="true"
        onClick={closeModal}
      />
      <div className="project-modal__content">
        <div className="project-modal__header">
          <div>
            <h2 className="project-modal__title" id="project-modal-title">
              {project.title}
            </h2>
            <p className="project-modal__description">{project.description}</p>
          </div>
          <button
            type="button"
            className="project-modal__close"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              closeModal();
            }}
            aria-label="Close project preview"
            autoFocus
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <img
          className="project-modal__image"
          src={project.fullImage || project.image}
          alt={`${project.title} full website image`}
        />
      </div>
    </dialog>,
    document.body,
  );
}
