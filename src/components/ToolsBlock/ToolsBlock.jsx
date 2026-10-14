import "./ToolsBlock.css";

export default function ToolsBlock({
  icon,
  blockTitle,
  blockDescription,
  toolsList,
}) {
    return (
      <div className="ToolsBlock-wrapper border-hover title-hover">
        <div className="ms-tools__card">
          {icon}
          <h3 className="tools-title">{blockTitle}</h3>
          <p className="sub-heading">{blockDescription}</p>

          <ul className="ms-tools__card-list">
            {toolsList.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}