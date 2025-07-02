"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Star, ShoppingCart, Clock, Shield, Truck, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ProdutoPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const product = {
    id: 1,
    name: "Pastilha de Freio Dianteira",
    brand: "Bosch",
    price: 89.9,
    originalPrice: 109.9,
    store: "Auto Peças Sandra",
    storeRating: 4.8,
    storeReviews: 127,
    distance: "1.2 km",
    stock: 3,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    compatibility: ["Fiat Palio 2012", "Fiat Palio 2013", "Fiat Palio 2014", "Fiat Palio 2015", "Fiat Palio 2016"],
    description:
      "Pastilha de freio dianteira original Bosch, desenvolvida especificamente para o Fiat Palio. Oferece excelente performance de frenagem e durabilidade.",
    specifications: {
      "Código Original": "BF1234",
      Material: "Semi-metálico",
      Garantia: "12 meses",
      Origem: "Nacional",
    },
    delivery: false,
    storeAddress: "Rua das Flores, 123 - Centro",
    storePhone: "(46) 3555-1234",
  }

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
            <h1 className="text-xl font-semibold text-gray-900">Detalhes do Produto</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-96 object-cover rounded-lg border"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">Marca: {product.brand}</p>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{product.store}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.storeRating} ({product.storeReviews} avaliações)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl font-bold text-green-600">R$ {product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">R$ {product.originalPrice.toFixed(2)}</span>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-red-500">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">{product.stock} unidades em estoque</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Compatibilidade:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.compatibility.map((model, index) => (
                    <Badge key={index} variant="outline" className="text-green-600 border-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {model}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 mb-6">
                <Button
                  size="lg"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => (window.location.href = "/reserva/1")}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Reservar para Buscar
                </Button>
                {product.delivery && (
                  <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                    <Truck className="h-5 w-5 mr-2" />
                    Comprar com Entrega
                  </Button>
                )}
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Garantia de 12 meses
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Pronto para retirada
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="specifications">Especificações</TabsTrigger>
              <TabsTrigger value="store">Informações da Loja</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700">{product.description}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="border-b pb-2">
                        <dt className="font-medium text-gray-900">{key}</dt>
                        <dd className="text-gray-600">{value}</dd>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="store" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{product.store}</h4>
                      <p className="text-gray-600">{product.storeAddress}</p>
                      <p className="text-gray-600">{product.storePhone}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-2 text-gray-900">
                        {product.storeRating} ({product.storeReviews} avaliações)
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">A {product.distance} de distância</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
