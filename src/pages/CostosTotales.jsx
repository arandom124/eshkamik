import React from 'react';

const CostosTotales = () => {
    return (
        <>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:items-center lg:space-x-8 px-4 sm:px-6 md:px-8">
                {/* Imagen responsiva */}
                <img
                    src="https://scontent.fppn1-1.fna.fbcdn.net/v/t39.30808-6/465029033_528072859995999_3379255618561333892_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=E8nCoKuvtcAQ7kNvgHRXsTz&_nc_zt=23&_nc_ht=scontent.fppn1-1.fna&_nc_gid=A2RbPxa4C1-ibLgw4vpjrK-&oh=00_AYCo02Sa85pdydfzrwLfblgYHPGVKqlN8sr960zXM8rISQ&oe=67569864"
                    className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-2xl mb-4 lg:mb-0" />
                
                <div className="text-center lg:text-left">
                    {/* Título */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Diciembre 2024</h1>

                    {/* Contenedor de estadísticas responsivas */}
                    <div className="stats shadow sm:flex-col lg:flex-row lg:space-x-4 space-y-4 sm:space-y-6 lg:space-y-0">
                        {/* Primer stat */}
                        <div className="stat w-full sm:w-1/2 lg:w-1/3">
                            <div className="stat-figure text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Aportes Cem</div>
                            <div className="stat-value text-primary">$ 8.450.000</div>
                            <div className="stat-desc">de los 169 al día</div>
                        </div>

                        {/* Segundo stat */}
                        <div className="stat w-full sm:w-1/2 lg:w-1/3">
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
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Restaurante Docentes</div>
                            <div className="stat-value text-secondary">2.6M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        {/* Tercer stat */}
                        <div className="stat w-full sm:w-1/2 lg:w-1/3">
                            <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRVLEPyXzRP768AHWOy5FRkxSisHWwHEjF_u-L_pseY6BROo7pCH2GpFNS17Xa-tm-IkpxiF_5hQhf1GgxA7bmPlyjfOFRSjUbUjtmnm2i1Y-GMBaivP5s4PWks7FJNMnPaQDzJDnBay1EqshEmvnrFoO83NOXzgnN58AHe6hgxdfxKF5l4-lT2I_B-GY/s320/logo.jpeg" />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-value">$ 1.340.000</div>
                            <div className="stat-title">Exedente para el 2025</div>
                            <div className="stat-desc text-secondary">ingreso de todos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CostosTotales;
