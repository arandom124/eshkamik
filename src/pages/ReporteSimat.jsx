import React from 'react';

const ReporteSimat = () => {

    const logopae =
    'https://media.master2000.net/noticias/120/36855ape_0.jpg';

    const logocanasta =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtb0rI_Am2Tj9z9XtiKPkdOGEQqz9K9zoZJw&s';

    const logoaportes =
    'https://blogger.googleusercontent.com/img/a/AVvXsEiggQPcQWznww1F3MIvuY9Sv_ndhUr0xXtBRRogI4b4JzfBnHMBmZaW-_orOfd_qq31-NQGUOEQv47Z0vSfZZ3nutlPbexBNTp5heEvSislXZOTrQWMwtFyIVFkrw_yRZq0euH_TCUxfvqZjtBUjBGXFrtkYWYMR3gesK_qTLB3rDzbfmws-Xs9xf2sg3c';

  return (
    <>
    <br />
    <br />
    <br />
    <div className="hero bg-base-200 ">
               
    <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
        <img src={logocanasta} />
            <div>
                <h1 className="text-5xl font-bold">Tipología de Estudiantes:</h1>
                <p className="py-6">
                    •	Preescolar: Este nivel incluye a los estudiantes más jóvenes, generalmente entre 3 y 5 años, y su canasta educativa es la más costosa debido a los materiales pedagógicos, educativos, y de seguridad específicos para su edad.
                    <br />
                    •	Primaria: Incluye estudiantes en edades de 6 a 11 años, con una canasta educativa de menor costo que la de preescolar, pero aún con materiales pedagógicos necesarios para el aprendizaje básico.
                    <br />
                    •	Bachillerato: Para estudiantes de 12 a 18 años. Esta tipología es la menos costosa, pues los estudiantes requieren materiales más generales y menos orientados a la seguridad.
                </p>            
            </div>
        </div>
    </div>
    {/* ________________________________   inicia acoredeon     ________________________________________ */}
    
      
    </div>
    <div className="hero bg-base-200">
        <div className="hero-content ">
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title text-xl font-medium">Distribución de estudiantes reporte simat Febrero 2024:</div>
                <div className="collapse-content">
                    <p>
                        •  Preescolar (un grado): 12 estudiantes.
                        <br />
                        •  Primaria (Primero a Quinto): 86 estudiantes en total.
                        <br />
                        •  Bachillerato (Sexto a Once): 132 estudiantes en total.
                        <br />
                        Con un total de 230 estudiantes.
                    </p>
                </div>
            </div>
            <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">Presupuesto por Tipología</div>
            <div className="collapse-content">
                <p>
                    •	Preescolar: 40% del presupuesto total.
                    <br />
                    •	Primaria: 35% del presupuesto total.
                    <br />
                    •	Bachillerato: 25% del presupuesto total.
                </p>
            </div>
            </div>
            <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">Distribución por Grupo Étnico</div>
            <div className="collapse-content">
                <p>
                    •	Misak: 44% del total
                    <br />
                    •	Afros y Campesinos: 40% del total
                    <br />
                    •	Nasas: 16% del total
                    <br />
                    para un total del 100%
                </p>
            </div>
            </div>
        </div>
    </div>
    
    {/* inicia el modal clic y despiega el texto ----------------------------- */}

    <div className="hero bg-base-200">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Reporte de Matrícula - SIMAT Noviembre 2024</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Según el más reciente informe del Sistema de Matrícula Estudiantil de Educación Básica y Media (SIMAT) de noviembre 2024, nuestra institución presenta la siguiente distribución de estudiantes activos por grado:</h3>
    <p className="py-4">
        •	Preescolar: 13 estudiantes
        <br />
        •	Primero: 14 estudiantes
        <br />
        •	Segundo: 14 estudiantes
        <br />
        •	Tercero: 29 estudiantes
        <br />
        •	Cuarto: 11 estudiantes
        <br />
        •	Quinto: 23 estudiantes
        <br />
        •	Sexto: 21 estudiantes
        <br />
        •	Séptimo: 23 estudiantes
        <br />
        •	Octavo: 24 estudiantes
        <br />
        •	Noveno: 18 estudiantes
        <br />
        •	Décimo: 13 estudiantes
        <br />
        •	Once: 9 estudiantes

    </p>
    <h1>Cabe destacar que, al cierre del año lectivo 2024, se han registrado 9 estudiantes nuevos, incorporados en distintos grados a lo largo del año. 
        <br />
        Por otro lado, se han reportado 20 estudiantes retirados, quienes no han formalizado su desvinculación mediante los procedimientos oficiales de la Secretaría de la Sede. 
        <br />
        Este contexto refleja la necesidad de optimizar los procesos de matrícula y retiro, asegurando que las estadísticas institucionales se mantengan precisas y actualizadas.
        <br />
        
        </h1>
        <p className="py-4">
        Con el cierre total del semestre de 212 estudiantes
        </p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
    </>
  );
};

export default ReporteSimat;
