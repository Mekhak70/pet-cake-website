"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, Shield, Sparkles, Dog, Cat, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { PRODUCTS } from "@/lib/products"
import { ProductCard } from "@/components/product-card"


type Filter = "all" | "dog" | "cat"


export default function HomePage() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>("all")

  const features = [
    {
      icon: Heart,
      title: t("handmade"),
      description: t("handmadeDesc"),
    },
    {
      icon: Shield,
      title: t("petSafe"),
      description: t("petSafeDesc"),
    },
    {
      icon: Sparkles,
      title: t("freshDaily"),
      description: t("freshDailyDesc"),
    },
  ]

  const filteredProducts =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter || p.category === "all")
  const filters: { value: Filter; label: string; icon: typeof Dog }[] = [
    { value: "all", label: t("allPets"), icon: Sparkles },
    { value: "dog", label: t("forDogs"), icon: Dog },
    { value: "cat", label: t("forCats"), icon: Cat },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col gap-6 text-center md:text-left">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                {t("heroTitle")}
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl text-pretty">{t("heroSubtext")}</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/shop">{t("orderNow")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">{t("about")}</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl" />
              <Image
                src="/adorable-dog-with-a-decorated-birthday-cake--pet-b.jpg"
                alt="Happy dog with pet cake"
                width={500}
                height={500}
                className="relative rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <Button
                key={f.value}
                variant={filter === f.value ? "default" : "outline"}
                onClick={() => setFilter(f.value)}
                className={filter === f.value ? "bg-primary text-primary-foreground" : ""}
              >
                <f.icon className="mr-2 h-4 w-4" />
                {f.label}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 rounded-xl bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t("readyToTreat")}</h2>
          <p className="mb-8 text-lg text-muted-foreground">{t("readyToTreatDesc")}</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/shop">{t("shop")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
