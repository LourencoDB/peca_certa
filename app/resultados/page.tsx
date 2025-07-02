"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Star, ShoppingCart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function ResultadosPage() {
  const [sortBy, setSortBy] = useState("price")

  const products = [
    {
      id: 1,
      name: "Pastilha de Freio Dianteira",
      brand: "Bosch",
      price: 89.9,
      originalPrice: 109.9,
      store: "Auto Peças Sandra",
      storeRating: 4.8,
      distance: "1.2 km",
      stock: 3,
      image: "/placeholder.svg?height=200&width=200",
      compatibility: "Fiat Palio 2012-2016",
      delivery: false,
    },
    {
      id: 2,
      name: "Pastilha de Freio Dianteira",
      brand: "TRW",
      price: 95.5,
      originalPrice: null,
      store: "Peças & Cia",
      storeRating: 4.6,
      distance: "2.1 km",
      stock: 5,
      image: "/placeholder.svg?height=200&width=200",
      compatibility: "Fiat Palio 2012-2016",
      delivery: true,
    },
    {
      id: 3,
      name: "Pastilha de Freio Dianteira",
      brand: "Ferodo",
      price: 78.9,
      originalPrice: 89.9,
      store: "Auto Center Beltrão",
      storeRating: 4.9,
      distance: "3.5 km",
      stock: 2,
      image: "/placeholder.svg?height=200&width=200",
      compatibility: "Fiat Palio 2012-2016",
      delivery: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" className="mr-4" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-xl font-semibold text-gray-900">Resultados para "pastilha de freio Fiat Palio 2012"</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Filters and Sort */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">{products.length} produtos encontrados</div>
          <div className="flex items-center space-x-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price">Menor preço</SelectItem>
                <SelectItem value="distance">Mais próximo</SelectItem>
                <SelectItem value="rating">Melhor avaliação</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">Marca: {product.brand}</p>
                    <p className="text-xs text-green-600 font-medium">{product.compatibility}</p>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{product.store}</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{product.storeRating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{product.distance} de distância</p>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-green-600">R$ {product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            R$ {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">{product.stock} em estoque</p>
                        {product.delivery && (
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            Entrega
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => (window.location.href = "/produto/1")}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Reservar
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
