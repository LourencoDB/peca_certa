"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Package, Upload, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminPage() {
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    price: "",
    originalPrice: "",
    stock: "",
    description: "",
    category: "",
    compatibility: [] as string[],
    images: [] as string[],
  })

  const [newCompatibility, setNewCompatibility] = useState("")
  const [activeTab, setActiveTab] = useState("add-product")

  const categories = ["Freios", "Filtros", "Ignição", "Suspensão", "Motor", "Transmissão", "Elétrica", "Carroceria"]

  const addCompatibility = () => {
    if (newCompatibility.trim() && !productData.compatibility.includes(newCompatibility.trim())) {
      setProductData({
        ...productData,
        compatibility: [...productData.compatibility, newCompatibility.trim()],
      })
      setNewCompatibility("")
    }
  }

  const removeCompatibility = (item: string) => {
    setProductData({
      ...productData,
      compatibility: productData.compatibility.filter((c) => c !== item),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process product creation
    alert("Produto cadastrado com sucesso!")
    // Reset form
    setProductData({
      name: "",
      brand: "",
      price: "",
      originalPrice: "",
      stock: "",
      description: "",
      category: "",
      compatibility: [],
      images: [],
    })
  }

  const recentProducts = [
    { id: 1, name: "Pastilha de Freio Dianteira", brand: "Bosch", price: 89.9, stock: 3, status: "Ativo" },
    { id: 2, name: "Filtro de Óleo", brand: "Mann", price: 25.5, stock: 8, status: "Ativo" },
    { id: 3, name: "Vela de Ignição", brand: "NGK", price: 15.9, stock: 12, status: "Ativo" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Painel da Loja</h1>
            </div>
            <div className="text-sm text-gray-600">Auto Peças Sandra</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="add-product">Cadastrar Produto</TabsTrigger>
            <TabsTrigger value="manage-products">Gerenciar Produtos</TabsTrigger>
          </TabsList>

          <TabsContent value="add-product" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Cadastrar Novo Produto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nome do Produto *</Label>
                        <Input
                          id="name"
                          required
                          value={productData.name}
                          onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                          placeholder="Ex: Pastilha de Freio Dianteira"
                        />
                      </div>

                      <div>
                        <Label htmlFor="brand">Marca *</Label>
                        <Input
                          id="brand"
                          required
                          value={productData.brand}
                          onChange={(e) => setProductData({ ...productData, brand: e.target.value })}
                          placeholder="Ex: Bosch, TRW, Ferodo"
                        />
                      </div>

                      <div>
                        <Label htmlFor="category">Categoria *</Label>
                        <Select
                          value={productData.category}
                          onValueChange={(value) => setProductData({ ...productData, category: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a categoria" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category.toLowerCase()}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="price">Preço de Venda *</Label>
                          <Input
                            id="price"
                            type="number"
                            step="0.01"
                            required
                            value={productData.price}
                            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                            placeholder="0,00"
                          />
                        </div>
                        <div>
                          <Label htmlFor="originalPrice">Preço Original</Label>
                          <Input
                            id="originalPrice"
                            type="number"
                            step="0.01"
                            value={productData.originalPrice}
                            onChange={(e) => setProductData({ ...productData, originalPrice: e.target.value })}
                            placeholder="0,00"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="stock">Quantidade em Estoque *</Label>
                        <Input
                          id="stock"
                          type="number"
                          required
                          value={productData.stock}
                          onChange={(e) => setProductData({ ...productData, stock: e.target.value })}
                          placeholder="0"
                        />
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea
                          id="description"
                          rows={4}
                          value={productData.description}
                          onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                          placeholder="Descreva as características do produto..."
                        />
                      </div>

                      <div>
                        <Label>Compatibilidade com Veículos</Label>
                        <div className="flex space-x-2 mb-2">
                          <Input
                            value={newCompatibility}
                            onChange={(e) => setNewCompatibility(e.target.value)}
                            placeholder="Ex: Fiat Palio 2012"
                            onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addCompatibility())}
                          />
                          <Button type="button" onClick={addCompatibility}>
                            Adicionar
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {productData.compatibility.map((item, index) => (
                            <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                              <span>{item}</span>
                              <button
                                type="button"
                                onClick={() => removeCompatibility(item)}
                                className="ml-1 hover:text-red-600"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label>Fotos do Produto</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">
                            Clique para fazer upload ou arraste as imagens aqui
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG até 5MB cada (máximo 5 fotos)</p>
                          <Button type="button" variant="outline" className="mt-2 bg-transparent">
                            Selecionar Fotos
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Cadastrar Produto
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage-products" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Produtos Cadastrados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Produto</th>
                        <th className="text-left py-2">Marca</th>
                        <th className="text-left py-2">Preço</th>
                        <th className="text-left py-2">Estoque</th>
                        <th className="text-left py-2">Status</th>
                        <th className="text-left py-2">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentProducts.map((product) => (
                        <tr key={product.id} className="border-b">
                          <td className="py-3">{product.name}</td>
                          <td className="py-3">{product.brand}</td>
                          <td className="py-3">R$ {product.price.toFixed(2)}</td>
                          <td className="py-3">{product.stock} un.</td>
                          <td className="py-3">
                            <Badge className="bg-green-100 text-green-800">{product.status}</Badge>
                          </td>
                          <td className="py-3">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                Editar
                              </Button>
                              <Button size="sm" variant="outline">
                                Desativar
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
