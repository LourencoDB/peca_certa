"use client"

import { CheckCircle, MapPin, Clock, Phone, Copy, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ConfirmacaoPage() {
  const reservation = {
    id: "RES-2024-001",
    product: {
      name: "Pastilha de Freio Dianteira",
      brand: "Bosch",
      price: 89.9,
      image: "/placeholder.svg?height=80&width=80",
    },
    store: {
      name: "Auto Peças Sandra",
      address: "Rua das Flores, 123 - Centro",
      phone: "(46) 3555-1234",
      distance: "1.2 km",
    },
    customer: {
      name: "Marcos Silva",
      phone: "(46) 99999-9999",
    },
    expiresAt: "15/01/2024 às 14:30",
    createdAt: "14/01/2024 às 14:30",
  }

  const copyReservationCode = () => {
    navigator.clipboard.writeText(reservation.id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold text-gray-900">Reserva Confirmada</h1>
            <Button variant="outline" onClick={() => (window.location.href = "/")}>
              <Home className="h-4 w-4 mr-2" />
              Início
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Reserva Confirmada com Sucesso!</h2>
          <p className="text-gray-600">Sua peça foi reservada e estará esperando por você na loja.</p>
        </div>

        {/* Reservation Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Detalhes da Reserva</span>
              <Badge className="bg-green-100 text-green-800">Confirmada</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Reservation Code */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-900">Código da Reserva</p>
                  <p className="text-2xl font-bold text-blue-600">{reservation.id}</p>
                </div>
                <Button variant="outline" size="sm" onClick={copyReservationCode}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copiar
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Image
                src={reservation.product.image || "/placeholder.svg"}
                alt={reservation.product.name}
                width={60}
                height={60}
                className="rounded-lg border"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{reservation.product.name}</h3>
                <p className="text-sm text-gray-600">{reservation.product.brand}</p>
                <p className="text-lg font-bold text-green-600">R$ {reservation.product.price.toFixed(2)}</p>
              </div>
            </div>

            {/* Store Info */}
            <div className="border-t pt-4">
              <h4 className="font-medium text-gray-900 mb-3">Local de Retirada</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium">{reservation.store.name}</p>
                    <p className="text-sm text-gray-600">{reservation.store.address}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-600">{reservation.store.phone}</p>
                </div>
              </div>
            </div>

            {/* Time Info */}
            <div className="border-t pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <p className="font-medium text-gray-900">Prazo para Retirada</p>
              </div>
              <p className="text-sm text-gray-600 mb-1">Até {reservation.expiresAt}</p>
              <p className="text-xs text-orange-600">⚠️ Após este prazo, a reserva será cancelada automaticamente</p>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Como Retirar sua Peça</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>Dirija-se até a loja no endereço indicado</li>
              <li>
                Informe o código da reserva: <strong>{reservation.id}</strong>
              </li>
              <li>Apresente um documento com foto</li>
              <li>Realize o pagamento e retire sua peça</li>
            </ol>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle>Precisa de Ajuda?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Entre em contato diretamente com a loja ou conosco:</p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Phone className="h-4 w-4 mr-2" />
                Ligar para {reservation.store.name}: {reservation.store.phone}
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp Peça Certa: (46) 99999-0000
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
