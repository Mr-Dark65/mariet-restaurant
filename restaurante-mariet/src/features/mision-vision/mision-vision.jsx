import React from "react";
import bgImage from "../../assets/imagen-mision.jpg";
import AnimatedCard from "../../shared/MessageFormat/asignarmensaje";

const MisionAndVision = () => {
  return (
    <>
      <header
        className="relative bg-cover bg-center text-white min-h-[80vh] flex flex-col items-center justify-center font-semibold pb-[6rem] lg:pb-[8rem]"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <AnimatedCard
          title={
            <>
              NOS INSPIRA CADA DÍA<br/>MISIÓN Y VISIÓN
            </>
          }
          paragraphs={[
            {text: 'Misión:', isBold: true},
            {text: 'Nuestra misión es brindar experiencias culinarias honestas,frescas y llenas de amor, a través de una cocina saludable, casera. Queremos alimentar tanto el cuerpo como el alma,utilizando ingredientes reales y procesos conscientes, en un entorno cálido, juvenil y cercano que haga sentir a cada persona como en casa.'},
            {text: 'Visión:', isBold: true}, 
            {text: 'Nuestra visión es ser reconocidos como el restaurante de cocina saludable más querido de la región, por transformar lo cotidiano en memorable, creando un impacto positivo en la vida de nuestros clientes, en la comunidad y en el planeta. Queremos inspirar una forma de comer más consciente, más alegre y más humana.'}
          ]}
        />
      </header>
      <div className="w-full flex justify-center bg-orange-50 py-12">
        <div className="bg-orange-50 rounded-lg  max-w-3xl w-full px-8 py-10 mx-4">
          <div className="text-center mb-8 text-transparent">
            <span className="block text-lg font-semibold mb-2">NUESTRA</span>
            <span className="block text-3xl md:text-4xl font-bold italic">
              <span className="font-bold not-italic italic">
                PROMESA DE MARCA
              </span>
            </span>
          </div>
          <div className="text-justify text-base md:text-lg text-amber-900 space-y-6 hidden">
            <p>
              Mariet promete ofrecer siempre comida fresca, saludable y con
              sabor a hogar. Un lugar donde la nutrición se fusiona con el
              diseño emocional para generar experiencias memorables.
            </p>
          </div>
          <div className="h-24 bg-orange-50"></div>
        </div>
      </div>
    </>
  );
};

export default MisionAndVision;
