import React from 'react';

const CostoTotalCanasta = () => {
    return (
        <>
            <div className="col-span-12 flex flex-col gap-8 xl:col-span-5 xl:row-start-1 p-9">
                <div>
                    <span className="flex gap-2">
                        <span className="badge badge-success badge-outline italic">
                            AHORA
                        </span>
                    </span> 
                    <h2 className="font-title text-lg font-black [text-wrap:balance] sm:text-3xl tracking-tight xl:text-6xl">
                        El costo total de la canasta educativa ingresado a la C.E.M
                    </h2>
                </div>
                <div className="flex items-start justify-between">
                    <div className="flex gap-2">
                        <span className="flex flex-col">
                            <span className="flex items-center gap-2">
                                Es De 
                                <span className="font-title text-2xl font-light xl:text-5xl">
                                    $66,340,000
                                </span>                                 
                            </span> 
                            <br />
                            <span className="flex items-center gap-2">
                                NOTA: 
                                <span className="font-title text-1xl font-light xl:text-1xl">
                                    Cabe recalcar que el costo de mobiliario es asignado y pagado totalmente de la U.T a los Proveedores.
                                </span>                                 
                            </span> 
                        </span>
                    </div>                     
                </div> 
            </div>
        </>
    );
};

export default CostoTotalCanasta;
