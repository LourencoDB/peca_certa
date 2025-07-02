"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, MapPin, Clock, User, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function ReservaPage() {
  const [paymentMethod, setPaymentMethod] = useState("pickup")
  const [customerData, setCustomerData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const product = {
    id: 1,
    name: "Pastilha de Freio Dianteira",
    brand: "Bosch",
    price: 89.9,
    store: "Auto Peças Sandra",
    storeAddress: "Rua das Flores, 123 - Centro",
    storePhone: "(46) 3555-1234",
    image: "/placeholder.svg?height=100&width=100",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process reservation
    window.location.href = "/confirmacao"
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
            <h1 className="text-xl font-semibold text-gray-900">Finalizar Reserva</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={60}
                    height={60}
                    className="rounded-lg border"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.brand}</p>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">R$ {product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-green-600">R$ {product.price.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="font-medium text-gray-900">{product.store}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{product.storeAddress}</p>
                  <p className="text-sm text-gray-600">{product.storePhone}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Seus Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={customerData.name}
                      onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={customerData.phone}
                      onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                      placeholder="(46) 99999-9999"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerData.email}
                      onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                      placeholder="seu@email.com"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Forma de Pagamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex-1">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <div>
                            <p className="font-medium">Pagar na retirada</p>
                            <p className="text-sm text-gray-600">Dinheiro, cartão ou PIX na loja</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Terms */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      Concordo com os termos de uso e política de privacidade. Entendo que a reserva será mantida por 24
                      horas.
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Confirmar Reserva
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
