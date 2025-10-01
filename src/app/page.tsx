"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Clock, Phone, MapPin, Star } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-yellow-400">Elegance Suits</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-yellow-400 transition-colors">Início</a>
                <a href="#categories" className="hover:text-yellow-400 transition-colors">Categorias</a>
                <a href="#about" className="hover:text-yellow-400 transition-colors">Sobre</a>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">Contato</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
                <a href="#home" className="block px-3 py-2 hover:text-yellow-400 transition-colors">Início</a>
                <a href="#categories" className="block px-3 py-2 hover:text-yellow-400 transition-colors">Categorias</a>
                <a href="#about" className="block px-3 py-2 hover:text-yellow-400 transition-colors">Sobre</a>
                <a href="#contact" className="block px-3 py-2 hover:text-yellow-400 transition-colors">Contato</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Elegância em Cada Detalhe
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Descubra nossa coleção exclusiva de ternos sob medida para homens que valorizam o estilo e a sofisticação
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="#categories" 
              className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Ver Coleção
            </a>
            <a 
              href="#contact" 
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossas Categorias
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore nossa seleção cuidadosamente curada de ternos para cada ocasião
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Casual */}
            <Link href="/casual" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop" 
                  alt="Ternos Casuais"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Casual</h3>
                  <p className="text-gray-200">Para o dia a dia com estilo</p>
                </div>
              </div>
            </Link>

            {/* Formal */}
            <Link href="/formal" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&h=600&fit=crop" 
                  alt="Ternos Formais"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Formal</h3>
                  <p className="text-gray-200">Elegância para eventos especiais</p>
                </div>
              </div>
            </Link>

            {/* Social */}
            <Link href="/social" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=600&fit=crop" 
                  alt="Ternos Sociais"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Social</h3>
                  <p className="text-gray-200">Perfeito para negócios</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Tradição e Qualidade há 30 Anos
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Na Elegance Suits, combinamos técnicas tradicionais de alfaiataria com design contemporâneo 
                para criar ternos que refletem sua personalidade única.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-gray-700">Sob medida personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-gray-700">Tecidos importados premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-gray-700">Atendimento personalizado</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=800&fit=crop" 
                alt="Alfaiate trabalhando"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Horário de Funcionamento
            </h2>
            <p className="text-xl text-gray-300">
              Estamos aqui para atendê-lo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Segunda a Sexta</h3>
              <p className="text-gray-300">9:00 - 19:00</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Sábado</h3>
              <p className="text-gray-300">9:00 - 17:00</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Domingo</h3>
              <p className="text-gray-300">10:00 - 16:00</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Agendamento</h3>
              <p className="text-gray-300">(11) 9999-9999</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Agende sua consulta e descubra o terno perfeito para você
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <MapPin className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p className="text-gray-600">
                Rua Augusta, 1234<br />
                Consolação, São Paulo - SP<br />
                CEP: 01305-000
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Phone className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-gray-600">
                (11) 9999-9999<br />
                (11) 3333-3333<br />
                WhatsApp disponível
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Clock className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Atendimento</h3>
              <p className="text-gray-600">
                Segunda a Sexta: 9h às 19h<br />
                Sábado: 9h às 17h<br />
                Domingo: 10h às 16h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-xl text-gray-600">
              Visite nossa loja no coração de São Paulo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-yellow-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Endereço Completo</h3>
                    <p className="text-gray-600">
                      Rua Augusta, 1234 - Consolação<br />
                      São Paulo - SP, CEP: 01305-000<br />
                      Próximo ao metrô Consolação
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <Clock className="text-yellow-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Como Chegar</h3>
                    <p className="text-gray-600">
                      • Metrô: Estação Consolação (Linha Verde)<br />
                      • Ônibus: Diversas linhas na Rua Augusta<br />
                      • Carro: Estacionamento conveniado disponível
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <Phone className="text-yellow-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Contato Direto</h3>
                    <p className="text-gray-600">
                      Telefone: (11) 9999-9999<br />
                      WhatsApp: (11) 9999-9999<br />
                      Email: contato@elegancesuits.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-2 rounded-2xl shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6520442!3d-23.5558441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sRua%20Augusta%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1635959999999!5m2!1spt!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-4 rounded-xl shadow-lg">
                <p className="font-semibold text-sm">📍 Estamos aqui!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Elegance Suits</h3>
              <p className="text-gray-300 mb-4">
                Há mais de 30 anos criando ternos sob medida que combinam tradição, 
                qualidade e elegância para homens que valorizam o bom gosto.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">LinkedIn</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Início</a></li>
                <li><a href="#categories" className="text-gray-300 hover:text-yellow-400 transition-colors">Categorias</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">Sobre</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2">
                <li><Link href="/casual" className="text-gray-300 hover:text-yellow-400 transition-colors">Casual</Link></li>
                <li><Link href="/formal" className="text-gray-300 hover:text-yellow-400 transition-colors">Formal</Link></li>
                <li><Link href="/social" className="text-gray-300 hover:text-yellow-400 transition-colors">Social</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Elegance Suits. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}