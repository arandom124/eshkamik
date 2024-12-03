import React from 'react';


const remision = 'https://blogger.googleusercontent.com/img/a/AVvXsEiKhMZ4Y8ky1_cUicxhBD4HP2aNt_QPu9Ff77fqG_nh7zlFNA19Q5tayBHXRQA6ZjrE4EY4wDJkXzgPoFJ-JdXWtDp8v_VouOqUTuj3orWM415cdEAaj9TTlcPTF8olw53mtiaUBhRHNbFYeOWqp4PXSQI7H9TQqV4MGwkMEpRvlQRPni1dSSmmkHExDAw';
const planilla = 'https://blogger.googleusercontent.com/img/a/AVvXsEhLkyZz4USK51jnhl-OJh8kFRyuREkXRDYAmE2d1IUhG5jgV8pDIec9wlqf5Eg9XQGT8FrIjgi900u6q4plgoAFXbEpjZI-joDLvEn4icIgrUivf0k8bPrHai8gFQex_D1Mk68bvtDGJZbqdc4MMSM7qAvowfKEEaSFKoCeUv4uFq05IqNUhFs-JQPY0xo';
const comprobantecem = 'https://blogger.googleusercontent.com/img/a/AVvXsEi-WhmV7uPYPSbKwcHFCulOWgoz3fMs6o0fU6WYfdcaCnGtAgPSfknV6JRgHyNnNJ2KX3fwRtEmRqzbVAFlFkkF5CUHydRW30_R55iTuXYU1GgTrH90RnZjOm3297kbfx_N54ORN0Hrjhp2sOf9mFkpjlKIV7fDMIZ3woYYTBMPEri8GS4XKwOH4n0xw4M';
const comprobanteconoma = 'https://blogger.googleusercontent.com/img/a/AVvXsEj4HPyNe4KEQqR_wOf3vqwTEzFc8ItZNf3qLQuSPYW2UM3Q6BRHi3MkERAxmpUBot9OgSh4hD_2A-DnBvoC9EMqN_R40vLL9FJymFAlonKVqy0-kloBJZ-Pgw7ToI2MCTlV2blFSt3EVV3AqdS52ZRm74KETdGuWDu2DFywygVM-EJoJCs3WqmgrzvGKms';
const combustible = 'https://blogger.googleusercontent.com/img/a/AVvXsEjX74QkbzdJlRt4XCAoSz-EymsbFqgeD9wP5V-culv3cAHZLmd04-6QcYtOJYQEMZVHJ_2_IEK67ivC9juFCQs9QUZJiAMt9dYZ2fL7e04LUeaDumnxCIq6f433kX7pwsQPY-ypfPy0FsMzAN6OoCdlfrnNFeTvv4lwqBZhd1HcvKh-RNKqTJUX90yGdxU';
const acta = 'https://blogger.googleusercontent.com/img/a/AVvXsEgiXt9Deta2YxKQeWn1mHOkp4kRXnLJXC8iI65iR_qI2dF2VSU73qtXE3tvDKysDaYsB630wfb_jqu-C1GXxur_PPkoFGmxMGkTyKc2VJtmTfsMsojh2-oy81iLVZJ1puZ6-l-FbrARmoIT4wgPMYcNV6IJ7XY8yMCGFJ22vpfHvZ6NtzjyBp2WSvq_OZc';

const ReportePae = () => {
    return (
        <>
            <div className="divider">
                <h1 className=" text-center">or</h1> 
            </div>
            <div className="hero bg-base-200 ">
                <div className="hero-content text-center"> 
                    
                    <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold p-8">7</h2>
                        <p className="mt-2 text-gray-500">
                            Formatos de entrega.
                        </p>
                    </div>  
                        <div className="stat">
                            {/* __________________________________________________________________________________________________________ */}
                            <div className="stat-value text-xl">
                            📃Remisión y entrega de Viveres
                            </div>
                            <label htmlFor="my_modal_7" className="btn">ver</label>

                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal" role="dialog" >
                                <div 
                                    className="modal-box w-full h-full bg-cover bg-center" 
                                    style={{ backgroundImage: `url(${remision})` }} 
                                >                                   
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_7">Cerrar</label>
                            </div>
                        </div>
                        {/* __________________________________________________________________________________________________________ */}
                        <div className="stat">
                            <div className="stat-value text-xl">📊Planilla de control diario</div>
                            <label htmlFor="my_modal_1" className="btn">ver</label>

                            <input type="checkbox" id="my_modal_1" className="modal-toggle" />
                            <div className="modal" role="dialog" >
                                <div 
                                    className="modal-box w-full h-full  bg-cover bg-center" 
                                    style={{ backgroundImage: `url(${planilla})`}} 
                                >                                   
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_1">Cerrar</label>
                            </div>
                        </div>
                        {/* __________________________________________________________________________________________________________ */}
                        <div className="stat">
                            <div className="stat-value text-xl">🏵️Comprobante de egreso C.E.M</div>
                            <label htmlFor="my_modal_6" className="btn">ver</label>

                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                            <div className="modal" role="dialog" >
                                <div 
                                    className="modal-box w-full h-full  bg-cover bg-center" 
                                    style={{ backgroundImage: `url(${comprobantecem})` }} 
                                >                                   
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_6">Cerrar</label>
                            </div>
                        </div>
                        {/* __________________________________________________________________________________________________________ */}
                        <div className="stat">
                            <div className="stat-value text-xl">🏵️Comprobante de egreso Economas</div>
                            <label htmlFor="my_modal_3" className="btn">ver</label>

                            <input type="checkbox" id="my_modal_3" className="modal-toggle" />
                            <div className="modal" role="dialog" >
                                <div 
                                    className="modal-box w-full h-full  bg-cover bg-center" 
                                    style={{ backgroundImage: `url(${comprobanteconoma})` }} 
                                >                                   
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_3">Cerrar</label>
                            </div>
                        </div>
                        {/* __________________________________________________________________________________________________________ */}
                        <div className="stat">
                            <div className="stat-value text-xl">🏫Combustible en sede</div>
                            <label htmlFor="my_modal_4" className="btn">ver</label>

                            <input type="checkbox" id="my_modal_4" className="modal-toggle" />
                            <div className="modal" role="dialog" >
                                <div 
                                    className="modal-box w-full h-full  bg-cover bg-center" 
                                    style={{ backgroundImage: `url(${combustible})` }} 
                                >                                   
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_4">Cerrar</label>
                            </div>
                        </div>
                        {/* __________________________________________________________________________________________________________ */}
                        <div className="stat">
                            <div className="stat-value text-xl">📑Acta Priorizados</div>
                            <label htmlFor="my_modal_5" className="btn">ver</label>

                            <input type="checkbox" id="my_modal_5" className="modal-toggle" />
                            <div className="modal" role="dialog" >
                                <div 
                                    className="modal-box w-full h-full  bg-cover bg-center" 
                                    style={{ backgroundImage: `url(${acta})` }} 
                                >                                   
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_5">Cerrar</label>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>             
            
        </>

    );
};

export default ReportePae;
