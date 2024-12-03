import React from "react";

const CostosCem = () => {
    return (
        <section className="bg-base-200 text-base-content py-12">
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Inversión CEM</h2>
                    <p className="mt-2 text-base-content/60">
                        Ingresos de PAE, Aportes Y Restaurante Docentes.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <h3 className="card-title">Maestro de obra trapezoidal y enceramica, cocina casa tampal kuari </h3>
                            <p className="text-2xl font-bold">+55%</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <h3 className="card-title">Pagos gas Cem</h3>
                            <p className="text-2xl font-bold">12%</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <h3 className="card-title">Semillas, Herramientas, Combustible, etc</h3>
                            <p className="text-2xl font-bold">33.9%</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <h3 className="card-title">Prestamos para despues reponer, salida a semana cultural tambien para decoracion</h3>
                            <p className="text-2xl font-bold">$10%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostosCem;
