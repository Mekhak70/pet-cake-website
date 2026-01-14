"use client"

import Image from "next/image"
import { Heart, Shield, Sparkles, Dog, } from "lucide-react"
import { Leaf, Apple } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { PRODUCTS } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import MainImgAm from '@/public/home-arm.png'
import MainImgRu from '@/public/home-rus.png'
import MainImgEn from '@/public/home-eng.png'

import PetSlider from "@/components/PetSlider"

type Filter = "all" | "meat" | "vegetable" | 'fruit'


export default function HomePage() {
  const { t, language } = useLanguage()
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
    { value: "meat", label: t("meatBased"), icon: Dog },
    { value: "vegetable", label: t("vegetableBased"), icon: Leaf },
    { value: "fruit", label: t("fruitBased"), icon: Apple },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#69429a", height: 'max-content' }}
      >
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2 max-md:gap-22 justify-center pl-[100px] max-lg:pl-0">
            <Image
              key={t("lang")}
              src={
                language === "ru" ? MainImgRu :
                  language === "en" ? MainImgEn :
                    MainImgAm
              } alt="Happy dog with pet cake"
              width={1100}
              height={830}
              className="
                  relative
                  rounded-2xl
                  object-cover
                  mx-auto
                  scale-130
                  max-md:scale-110   
                  max-sm:scale-100   
                "
              priority
            />

            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-full " />
              <PetSlider />

            </div>
          </div>
        </div>

        {/* WAVE */}

      </section>
      <div
        className="relative left-0 w-full overflow-hidden leading-none
            bottom-0

            max-md:bottom-auto
            max-md:top-[1100px]

            max-[500px]:bottom-auto
            max-[500px]:!top-[0]"
        style={{ backgroundColor: '#fff', height: '120px', }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-[calc(100%+55px)] h-[120px]"
        >
          <path
            d="
        M0 120 
        C 300 40, 400 20, 600 40 
        S 1000 120, 1200 0 
        V 0 
        H 0 
        Z
      "
            fill="#69429a"
          />
        </svg>
      </div>


      <section className="py-16" >
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {/* {filters.map((f) => (
              <Button
                key={f.value}
                variant={filter === f.value ? "default" : "outline"}
                onClick={() => setFilter(f.value)}
                className={`
      ${filter === f.value ? "bg-primary text-primary-foreground !hover:bg-primary hover:bg-primary" : ""}
    `}
                style={{
                  backgroundColor: filter === f.value ? '#69429a' : '',
                  color: filter === f.value ? '#fff' : '',
                }}
              >
                <f.icon className="mr-2 h-4 w-4" />
                {f.label}
              </Button>
            ))} */}

          </div>
          <div className="max-w-4xl mx-auto px-4 text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#69429a' }}>
              Ընտրիր տորթը՝ ըստ տեսքի և բաղադրության
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Այստեղ ներկայացված են մեր տորթերի  տեսքերը: Դուք կարող եք ընտրել ցանկացած տեսք, որը ձեզ դուր է գալիս, և առաջարկել ձեր նախընտրած բաղադրությունը՝ ստանալով յուրահատուկ, անձնական տորթ ձեր սիրելի կենդանու համար:
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <div className="container mx-auto  md:py-10 text-center">
        <a
          href="https://wa.me/37433775750?text=Բարև,%20ուզում%20եմ%20պատվիրել"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3  text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          style={{ backgroundColor: '#69429a' }}
        >
          Պատվիրել հիմա
        </a>
      </div>

      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3" style={{ cursor: 'pointer' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 rounded-xl bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full " style={{ backgroundColor: '#69429a' }}>
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
      {/* <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t("readyToTreat")}</h2>
          <p className="mb-8 text-lg text-muted-foreground">{t("readyToTreatDesc")}</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/shop">{t("shop")}</Link>
          </Button>
        </div>
      </section> */}


    </div>
  )
}

<style>

</style>
