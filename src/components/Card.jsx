import React from 'react'

const Card = () => {
    return (
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
        <img className="w-full" src="https://picsum.photos/800/600" alt="Sunset in the mountains "/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Despliegue en Amplify</div>
          <p className="text-gray-700 text-base">
            Presentacion de una Card con imagen aleatoria,Utilizando Amplify para despliegue,react para compoentes y Tailwindcss para dar estilos
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#amplify</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
        </div>
      </div>
    
    )
}

export default Card
