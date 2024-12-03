import React from 'react';

const Canasta = () => {
    const logopae = 'https://media.master2000.net/noticias/120/36855ape_0.jpg';
    const logocanasta = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtb0rI_Am2Tj9z9XtiKPkdOGEQqz9K9zoZJw&s';
    const logoaportes = 'https://blogger.googleusercontent.com/img/a/AVvXsEiggQPcQWznww1F3MIvuY9Sv_ndhUr0xXtBRRogI4b4JzfBnHMBmZaW-_orOfd_qq31-NQGUOEQv47Z0vSfZZ3nutlPbexBNTp5heEvSislXZOTrQWMwtFyIVFkrw_yRZq0euH_TCUxfvqZjtBUjBGXFrtkYWYMR3gesK_qTLB3rDzbfmws-Xs9xf2sg3c';
    const logotros = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2HZbhU49fW4-AC9OY3UzK3JLSI_ukfT5YQ&s';

    return (
        <>
            <h1 className="text-3xl font-bold justify-center items-center text-center">Asignaciones para el año escolar</h1>
            <br />
            <br />
            <div className="hero bg-base-200">
                <div className="columns-4 gap-4 flex justify-center items-center">
                    {[logocanasta, logopae, logoaportes, logotros].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="w-[270px] h-[190px] transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 hover:opacity-90 rounded-lg"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Canasta;
