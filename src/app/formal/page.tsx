"use client"

import Link from 'next/link'
import { ArrowLeft, Star, Heart } from 'lucide-react'

export default function FormalPage() {
  const formalSuits = [
    {
      id: 1,
      name: "Smoking Clássico Preto",
      price: "R$ 2.899,00",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&h=600&fit=crop",
      rating: 5.0
    },
    {
      id: 2,
      name: "Terno Formal Azul Midnight",
      price: "R$ 2.599,00",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      rating: 4.9
    },
    {
      id: 3,
      name: "Smoking Branco Gala",
      price: "R$ 3.199,00",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop",
      rating: 4.8
    },
    {
      id: 4,
      name: "Terno Formal Cinza Chumbo",
      price: "R$ 2.799,00",
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=600&fit=crop",
      rating: 4.9
    },
    {
      id: 5,
      name: "Smoking Veludo Azul",
      price: "R$ 3.499,00",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=600&fit=crop",
      rating: 4.7
    },
    {
      id: 6,
      name: "Terno Formal Preto Risca de Giz",
      price: "R$ 2.999,00",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop",
      rating: 4.8
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </Link>
            <h1 className="text-2xl font-bold text-black">Elegance Suits</h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Ternos Formais</h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Sofisticação máxima para seus momentos mais especiais. Elegância que impressiona.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {formalSuits.map((suit) => (
            <div key={suit.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative">
                <img 
                  src={suit.image} 
                  alt={suit.name}
                  className="w-full h-80 object-cover"
                />
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{suit.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(suit.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({suit.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{suit.price}</span>
                  <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que Escolher Nossos Ternos Formais?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tecidos Premium</h3>
              <p className="text-gray-600">Importados da Itália e Inglaterra, com qualidade excepcional</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sob Medida</h3>
              <p className="text-gray-600">Cada peça é única, feita especialmente para você</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Acabamento Perfeito</h3>
              <p className="text-gray-600">Detalhes impecáveis que fazem toda a diferença</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto para Impressionar?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Agende uma consulta exclusiva e descubra a diferença de um terno verdadeiramente especial
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Agendar Consulta VIP
            </button>
            <Link 
              href="/" 
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Ver Outras Categorias
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}