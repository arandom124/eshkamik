import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const logopae = 'https://media.master2000.net/noticias/120/36855ape_0.jpg';

const NovedadesPae = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen px-4">
                <div className="hero-content flex-col lg:flex-row gap-6">
                    <img
                        src={logopae}
                        alt="Logo PAE"
                        className="w-full max-w-xs h-auto transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 hover:opacity-90 rounded-lg"
                    />
                    <div>
                        <h1 className="text-4xl font-bold">Novedades PAE</h1>
                        <h2 className="text-2xl font-semibold mt-2">
                            SECRETARÍA DE EDUCACIÓN Y CULTURA DEL CAUCA
                        </h2>
                        <h3 className="text-xl font-medium mt-1">
                            PROGRAMA DE ALIMENTACIÓN ESCOLAR - PAE
                        </h3>
                        <h4 className="text-lg font-medium mt-1">
                            OPERADOR - CABILDO INDÍGENA DEL RESGUARDO DE GUAMBÍA
                        </h4>
                        <p className="py-4">
                            El costo total del PAE también incluye a la sede apadrinada de Nuevo Horizonte. 
                            La CEM, como sede principal, cuenta con tres sedes: Nuevo Horizonte, La Granja y La Claudia. 
                            De igual manera, es necesario distribuir el costo del combustible y el reconocimiento de 
                            las Economas exclusivamente entre las sedes, asignando la parte correspondiente a Nuevo 
                            Horizonte según el número de estudiantes, ya que este costo solo aplica para dicha sede.
                        </p>
                        <div className="stats stats-vertical lg:stats-horizontal shadow">
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="stat-title">Sede Apadrinada</div>
                                <div className="stat-value">Nuevo Horizonte</div>
                                <div className="stat-desc">Caldono</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="stat-title">Sede principal</div>
                                <div className="stat-value">C.E.M</div>
                                <div className="stat-desc">↗︎ Cajibio</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="stat-title">Sede principal y Apadrinada</div>
                                <div className="stat-value">4 Economas</div>
                                <div className="stat-desc">↘︎ Cajibio y Caldono</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NovedadesPae;
