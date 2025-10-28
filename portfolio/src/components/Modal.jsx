import React from "react";

export default function Modal({project, onClose}){
  if(!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h3>{project.title}</h3>
          <button className="btn" onClick={onClose} style={{background:"#eef2ff",color:"var(--primary)"}}>Close</button>
        </div>
        <p className="muted" style={{marginTop:10,whiteSpace:"pre-line"}}>{project.long}</p>

        {project.screenshots?.length>0 && (
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:10,marginTop:12}}>
            {project.screenshots.map((s,idx)=>(
              <div key={idx} style={{overflow:"hidden",borderRadius:8}}>
                <img src={s} alt={`shot-${idx}`} style={{width:"100%",display:"block"}}/>
              </div>
            ))}
          </div>
        )}

        <div style={{marginTop:14,display:"flex",gap:10}}>
          {project.repo && <a className="btn" href={project.repo} target="_blank" rel="noreferrer">GitHub</a>}
          {project.demo && <a className="btn" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
        </div>
      </div>
    </div>
  );
}
