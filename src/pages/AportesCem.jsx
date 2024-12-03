import React from 'react';


const logoezio = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsYSWQTAINrFgHTML7MsU7nBVfqBkMDjMreGPDTBhxoL6O9tmwZCIwIEbNixBXRfEG6tstFyZUX1Vb8vNNp3nTdqi8rjRuh9mXblrqZMTtArvRS10GeBn2mYH97vw7PmvHxHOq01ilaAjeDeybvl6p4a4_2QF57Px14CGUytrtEJ3GuVBslIU9J_v2440/s1600/zccvf.png';

const AportesCem = () => {
    return (
        <>
            <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://blogger.googleusercontent.com/img/a/AVvXsEhQeorY1r5TXnhQiuaMAlazBfazaShUPcpO5LSOQXVSIkG14pDKDqyzx2rbm68wMnEkPc7XvJeMxLSazNgpY4DohtxWgs7gBNpNeyHkvcjXLfyA47MPp8zTJIOpzR-UxHunuGLBwSB1HAmt_VgmVeS7jgFu4TpzR-xLViHEhhoM4eGOMBcx3POZ2OOrbgk)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-2xl font-bold">
                    Es un verdadero placer estar aquí con ustedes. Hoy les presentamos 
                    E.Z.I.O un ecosistema académico digital que optimiza la gestión de la información educativa de manera más eficiente.
                </h1>
                <p className="mb-5">
                    **E.Z.I.O - Ecosistema Zonal Académico de Información Online** está diseñado para facilitar la administración integral de todos los aspectos académicos y administrativos del colegio. 
                    A través de esta plataforma, los usuarios podrán acceder a diversas herramientas como la gestión contable, el registro de estudiantes y docentes, el control de asistencia diaria, y la administración de la biblioteca.
                    Además, incluye funcionalidades adicionales que mejoran los procesos internos y fomentan una comunicación más fluida entre todos los miembros de la comunidad educativa.
                </p>

                <a
                    href="https://dptal-indg-misakedu.com/"
                    target="_blank" // Abre el enlace en una nueva pestaña
                    rel="noopener noreferrer" // Mejora de seguridad para enlaces externos
                    className="btn btn-outline btn-secondary"
                >
                    Visitar Web
                </a>
                <br />
                <br />
                <p className="mb-5">
                    usuario  cem@admin.com
                    <br />
                    contraseña  cem@admin.com
                </p>
                </div>
            </div>
            </div>

           
        </>
    );
};

export default AportesCem;
