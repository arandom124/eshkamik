import React from 'react';

const ReporteSimat = () => {
    const logocanasta = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtb0rI_Am2Tj9z9XtiKPkdOGEQqz9K9zoZJw&s';

    return (
        <>
            <div className="bg-base-200 py-10">
                {/* Sección de encabezado y descripción */}
                <div className="hero bg-base-200">
                    <div className="hero-content flex flex-col lg:flex-row gap-8">
                        <img
                            src={logocanasta}
                            alt="Logo Canasta"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                        <div>
                            <h1 className="text-4xl font-bold mb-6 text-center lg:text-left">
                                Tipología de Estudiantes:
                            </h1>
                            <p className="py-4 text-justify">
                                • <strong>Preescolar:</strong> Este nivel incluye a los estudiantes más jóvenes, generalmente entre 3 y 5 años, y su canasta educativa es la más costosa debido a los materiales pedagógicos, educativos, y de seguridad específicos para su edad.
                                <br />
                                • <strong>Primaria:</strong> Incluye estudiantes en edades de 6 a 11 años, con una canasta educativa de menor costo que la de preescolar, pero aún con materiales pedagógicos necesarios para el aprendizaje básico.
                                <br />
                                • <strong>Bachillerato:</strong> Para estudiantes de 12 a 18 años. Esta tipología es la menos costosa, pues los estudiantes requieren materiales más generales y menos orientados a la seguridad.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sección de acordeones */}
                <div className="hero bg-base-200 mt-10">
                    <div className="hero-content flex flex-col gap-4">
                        <div className="collapse collapse-arrow bg-base-100 rounded-box shadow">
                            <input type="radio" name="my-accordion-1" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                Distribución de estudiantes reporte SIMAT Febrero 2024
                            </div>
                            <div className="collapse-content">
                                <p>
                                    • Preescolar: 12 estudiantes.
                                    <br />
                                    • Primaria: 86 estudiantes en total.
                                    <br />
                                    • Bachillerato: 132 estudiantes en total.
                                    <br />
                                    <strong>Total:</strong> 230 estudiantes.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 rounded-box shadow">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium">
                                Presupuesto por Tipología
                            </div>
                            <div className="collapse-content">
                                <p>
                                    • Preescolar: 40% del presupuesto total.
                                    <br />
                                    • Primaria: 35% del presupuesto total.
                                    <br />
                                    • Bachillerato: 25% del presupuesto total.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 rounded-box shadow">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium">
                                Distribución por Grupo Étnico
                            </div>
                            <div className="collapse-content">
                                <p>
                                    • Misak: 44% del total.
                                    <br />
                                    • Afros y Campesinos: 40% del total.
                                    <br />
                                    • Nasas: 16% del total.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <div className="hero bg-base-200 mt-10">
                    <button
                        className="btn btn-primary"
                        onClick={() => document.getElementById('my_modal_2').showModal()}
                    >
                        Reporte de Matrícula - SIMAT Noviembre 2024
                    </button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">
                                Distribución de estudiantes activos por grado:
                            </h3>
                            <p className="py-4">
                                • Preescolar: 13 estudiantes.
                                <br />
                                • Primero: 14 estudiantes.
                                <br />
                                • Segundo: 14 estudiantes.
                                <br />
                                • Tercero: 29 estudiantes.
                                <br />
                                • Cuarto: 11 estudiantes.
                                <br />
                                • Quinto: 23 estudiantes.
                                <br />
                                • Sexto: 21 estudiantes.
                                <br />
                                • Séptimo: 23 estudiantes.
                                <br />
                                • Octavo: 24 estudiantes.
                                <br />
                                • Noveno: 18 estudiantes.
                                <br />
                                • Décimo: 13 estudiantes.
                                <br />
                                • Once: 9 estudiantes.
                            </p>
                            <p>
                                Al cierre del año lectivo 2024, se han registrado 9 estudiantes nuevos y
                                20 estudiantes retirados. Esto resalta la necesidad de mejorar los
                                procesos de matrícula y retiro.
                            </p>
                            <form method="dialog" className="modal-action">
                                <button className="btn">Cerrar</button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </>
    );
};

export default ReporteSimat;
