import React from "react";

export default function ProjectCard({ p, onOpen }) {
  return (
    <article className="project-card card">
      <h3>{p.title}</h3>
      <div className="project-small muted">{p.short}</div>

      <div
        style={{
          marginTop: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="muted">{p.tech}</div>
        <div style={{ display: "flex", gap: 0 }}> {/* 👈 gap changed from 8 to 0 */}
          <button className="btn" onClick={() => onOpen(p)}>
            Details
          </button>
          {p.demo && (
            <a className="btn" href={p.demo} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
