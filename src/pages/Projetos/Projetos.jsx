import React from 'react'
import './Projetos.css'

const Projetos = () => {
    return (
        <section className="projetos section" id="projetos">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Meus projetos</h2>
                    </div>
                </div>

                <div className="container-projetos">
                    <div className="projeto">
                        <a href="https://maxwellmoura.github.io/cursodev/Sindicato/">
                            <img src="/assets/sindicato.PNG" alt="Site" />
                            <h1>Projeto 1</h1>
                            <div className="informacoes-projeto">
                                <h2>Site</h2>
                                <p>Projeto feito usando HTML e CSS</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto">
                        <a href="https://maxwellmoura.github.io/cursodev/LandingPage/">
                            <img src="/assets/landpage.PNG" alt="LandingPage" />
                            <h1>Projeto 2</h1>
                            <div className="informacoes-projeto">
                                <h2>LandingPage</h2>
                                <p>Projeto feito usando HTML e CSS</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto">
                        <a href="https://maxwellmoura.github.io/cursodev/rock/">
                            <img src="/assets/rock.PNG" alt="Seach de Bandas" />
                            <h1>Projeto 3</h1>
                            <div className="informacoes-projeto">
                                <h2>Projeto de Seach</h2>
                                <p>Projeto feito usando HTML e CSS</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto">
                        <a href="https://maxwellmoura.github.io/cursodev/agencia/">
                            <img src="/assets/agencia.PNG" alt="Agencia de Viagem" />
                            <h1>Projeto 4</h1>
                            <div className="informacoes-projeto">
                                <h2>Agencia de Viagem</h2>
                                <p>Projeto feito usando HTML e CSS</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto">
                        <a href="https://mini-blog-seven-xi.vercel.app/">
                            <img src="/assets/miniblog.png" alt="MiniBlog" />
                            <h1>Projeto 5</h1>
                            <div className="informacoes-projeto">
                                <h2>MiniBlog</h2>
                                <p>Projeto feito usando HTML, CSS, <br />
                                    JavaScript, React, FireBase</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto">
                        <a href="https://mini-blog-seven-xi.vercel.app/">
                            <img src="/assets/lanchonete.png" alt="Lanchonete" />
                            <h1>Projeto 6</h1>
                            <div className="informacoes-projeto">
                                <h2>Lanchonete</h2>
                                <p>Projeto feito usando HTML, CSS</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projetos
