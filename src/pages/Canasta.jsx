import React from 'react';

const Canasta = () => {
    const logopae = 'https://media.master2000.net/noticias/120/36855ape_0.jpg';
    const logocanasta = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtb0rI_Am2Tj9z9XtiKPkdOGEQqz9K9zoZJw&s';
    const logoaportes = 'https://blogger.googleusercontent.com/img/a/AVvXsEiggQPcQWznww1F3MIvuY9Sv_ndhUr0xXtBRRogI4b4JzfBnHMBmZaW-_orOfd_qq31-NQGUOEQv47Z0vSfZZ3nutlPbexBNTp5heEvSislXZOTrQWMwtFyIVFkrw_yRZq0euH_TCUxfvqZjtBUjBGXFrtkYWYMR3gesK_qTLB3rDzbfmws-Xs9xf2sg3c';
    const logotros = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2HZbhU49fW4-AC9OY3UzK3JLSI_ukfT5YQ&s';

    const logos = [logocanasta, logopae, logoaportes, logotros];

    return (
        <div className="bg-base-200 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">
                Asignaciones para el Año Escolar
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 shadow-xl hover:scale-105 transform transition-transform duration-300 rounded-lg"
                    >
                        <figure>
                            <img
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </figure>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Canasta;
