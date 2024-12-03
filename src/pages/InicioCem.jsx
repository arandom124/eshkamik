import React from 'react';

const InicioCem = () => {

    const logocem =
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzcQoV-cGBYictZDjGhwLP7iuN4eNcVS9h1BQPmJoKB4bEHiPIVnywLdejVE7zC1-0k4HSnzNUmFmeHQ7ukn6p3h_muqR3pzYH3_VOJDnotzOqK2xJ3f-klY4e6D5Jwfv0gWurHtg1tndpJ2O-PQ9SEmPQNeAu2tAY8p5Qt9CBEENQlLDWjCaBkB9sybI/w561-h105/logo%20cem.jpg';

    const logotemporal =
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2dmt47NZWB0_wb926IlAZyA24PgenomTNYTc_qStEC_Q5Yh1dlxo6Wgeig5shKe5n2yJT_8FoNsUhHUUYrEzgfm8NYAJpM8w9iYQ6XTGVdYqi_Ra63swc8PSjChyphenhyphenb-9ROC330Gdz24ZS6WqzwS9cBj0S4mp_nC9N-VuBL0ZMpPqEbcBvKAWy-MS9Jbg4/s320/logo.png';

    const logokurak =
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj24qTK5ibY3Gqo6ZetyWvvONjpOkwjhMm6JbEX0sLSbKuoIAwfAXLZcPMZWoJJRJMgeZRJ5TFjdAK7tDHSXHyyvMjXwN3Upldq7iwNkZFmhVTPxD_5K7dGv6r9Mg-AgjTF9a-6Ms0PrjzUHJP9TD9SsocglQzezb9Qw0tIG4nXAwtLyfyNxNf8a1WSE6A/s320/logoUTE.png';

  return (
    <div className="hero bg-base-200 ">
    <div className="h-screen flex flex-col justify-center items-center text-center">
    <img src={logocem} style={{ width: '570px',height: '90px'}}/>
    <br />
      <h1 className="text-3xl font-bold">INFORME GENERAL SECRETARIA</h1>
      <br />
      <h2 className="text-xl font-semibold">SECRETARIO CEM 2024</h2>
      <br />
      <p className="text-lg font-semibold mb-4">JOSE DOMIGO ARANDA CALAMBAS</p>
      
      <div className="flex justify-between items-center w-full max-w-md">
        {/* Imagen de la izquierda */}
        <img
          src={logotemporal}
          alt="Imagen Izquierda"
          style={{ width: '160px',height: '160px'}}
        />
        
        {/* Imagen de la derecha */}
        <img
          src={logokurak}
          alt="Imagen Derecha"
          style={{ width: '160px',height: '160px'}}
        />
      </div>
    </div>
    </div>
  );
};

export default InicioCem;
