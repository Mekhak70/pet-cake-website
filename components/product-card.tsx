"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useLanguage } from "@/components/language-provider"
import { type Product, formatPrice } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const { t } = useLanguage()
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />

        <div className="absolute right-2 top-2 rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
          {formatPrice(product.priceInCents)}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg font-bold text-card-foreground">{product.name}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{product.description}</p>
        <Button
          onClick={() => addItem(product)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {t("addToCart")}
        </Button>
      </div>
    </div>
  )
}
