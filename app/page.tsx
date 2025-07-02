"use client"

import { useState } from "react"
import { Search, Car, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedYear, setSelectedYear] = useState("")

  const handleSearch = () => {
    // Redirect to results page
    window.location.href = "/resultados"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Peça Certa</h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>Francisco Beltrão - PR</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Encontre a peça certa para seu carro</h2>
          <p className="text-xl text-gray-600 mb-8">
            Compare preços entre as lojas de Francisco Beltrão e reserve para buscar
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Marca do Veículo</label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a marca" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fiat">Fiat</SelectItem>
                    <SelectItem value="volkswagen">Volkswagen</SelectItem>
                    <SelectItem value="chevrolet">Chevrolet</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                    <SelectItem value="toyota">Toyota</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Modelo</label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o modelo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="palio">Palio</SelectItem>
                    <SelectItem value="uno">Uno</SelectItem>
                    <SelectItem value="siena">Siena</SelectItem>
                    <SelectItem value="strada">Strada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ano</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2012">2012</SelectItem>
                    <SelectItem value="2013">2013</SelectItem>
                    <SelectItem value="2014">2014</SelectItem>
                    <SelectItem value="2015">2015</SelectItem>
                    <SelectItem value="2016">2016</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                <Button onClick={handleSearch} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar Peças
                </Button>
              </div>
            </div>

            <div className="border-t pt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Ou busque diretamente pela peça</label>
              <div className="flex gap-2">
                <Input
                  placeholder="Ex: pastilha de freio, filtro de óleo, vela de ignição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Popular Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">🔧</div>
              <h3 className="font-medium text-gray-900">Freios</h3>
              <p className="text-sm text-gray-600">Pastilhas, discos</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">🛢️</div>
              <h3 className="font-medium text-gray-900">Filtros</h3>
              <p className="text-sm text-gray-600">Óleo, ar, combustível</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                ⚡
              </div>
              <h3 className="font-medium text-gray-900">Ignição</h3>
              <p className="text-sm text-gray-600">Velas, bobinas</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">🔩</div>
              <h3 className="font-medium text-gray-900">Suspensão</h3>
              <p className="text-sm text-gray-600">Amortecedores</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
