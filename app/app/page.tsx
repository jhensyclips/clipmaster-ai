"use client";

import { useState } from "react";

export default function Home() {
  const [video, setVideo] = useState<File | null>(null);

  return (
    <main className="dashboard">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">✂</span>
          <span>ClipMaster <b>AI</b></span>
        </div>
        <span className="status">● Sistema activo</span>
      </header>

      <section className="welcome">
        <p className="eyebrow">TU ESTUDIO DE CONTENIDO CON IA</p>
        <h1>Convierte videos largos<br />
          en <span>clips virales.</span>
        </h1>
        <p className="subtitle">
          Encuentra los mejores momentos y prepara contenido
          para TikTok, Reels, Facebook y YouTube Shorts.
        </p>
      </section>

      <section className="upload-card">
        <div className="upload-icon">↑</div>
        <h2>Comienza con tu video</h2>
        <p>Selecciona un video que tengas derecho a utilizar.</p>

        <label className="upload-button">
          Seleccionar video
          <input
            type="file"
            accept="video/*"
            hidden
            onChange={(e) =>
              setVideo(e.target.files?.[0] || null)
            }
          />
        </label>

        {video && (
          <p className="file-name">
            Video seleccionado: {video.name}
          </p>
        )}

        <p className="formats">MP4 · MOV · Videos propios o autorizados</p>
      </section>

      <section className="features">
        <h2>Tu centro de creación</h2>
        <div className="feature-grid">
          <article>
            <span>✦</span>
            <h3>Detección inteligente</h3>
            <p>Identifica momentos interesantes.</p>
          </article>
          <article>
            <span>▣</span>
            <h3>Clips verticales</h3>
            <p>Formato 9:16 para redes sociales.</p>
          </article>
          <article>
            <span>CC</span>
            <h3>Subtítulos</h3>
            <p>Prepara videos con texto en pantalla.</p>
          </article>
          <article>
            <span>#</span>
            <h3>Publicación</h3>
            <p>Títulos y hashtags sugeridos.</p>
          </article>
        </div>
      </section>

      <footer>CLIPMASTER AI · TU CONTENIDO, MÁS INTELIGENTE</footer>
    </main>
  );
}
