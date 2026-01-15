"use client"

import Image from "next/image"
import { Heart, Shield, Sparkles, Dog, Leaf, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { PRODUCTS } from "@/lib/products"
import MainImgAm from "@/public/home-arm.png"
import MainImgRu from "@/public/home-rus.png"
import MainImgEn from "@/public/home-eng.png"
import PetSlider from "@/components/PetSlider"

type Filter = "all" | "meat" | "vegetable" | "fruit"

export default function HomePage() {
  const { t, language } = useLanguage()
  const [filter, setFilter] = useState<Filter>("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const features = [
    { icon: Heart, title: t("handmade"), description: t("handmadeDesc") },
    { icon: Shield, title: t("petSafe"), description: t("petSafeDesc") },
    { icon: Sparkles, title: t("freshDaily"), description: t("freshDailyDesc") },
  ]

  const filteredProducts =
    filter === "all"
      ? PRODUCTS
      : PRODUCTS.filter(
          (p) => p.category === filter || p.category === "all"
        )

  const handleSelectImage = (image: any) => {
    setSelectedImage(image.src)
  }
  const SITE_URL = "https://pet-cake-website.vercel.app"

  const whatsappMessage = selectedImage
    ? `Բարև, ուզում եմ պատվիրել այս տորթը։ Նկարը՝ ${SITE_URL}${selectedImage}`
    : "Բարև, ուզում եմ պատվիրել տորթ"

  const whatsappLink = `https://wa.me/37433775750?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#69429a" }}
      >
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2 pl-[100px] max-lg:pl-0">
            <Image
              src={
                language === "ru"
                  ? MainImgRu
                  : language === "en"
                  ? MainImgEn
                  : MainImgAm
              }
              alt="Pet cake hero"
              width={1100}
              height={830}
              className="rounded-2xl object-cover mx-auto scale-130 max-md:scale-110 max-sm:scale-100"
              priority
            />

            <div className="relative mx-auto aspect-square w-full max-w-md">
              <PetSlider />
            </div>
          </div>
        </div>
      </section>

      {/* WAVE */}
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#fff", height: "120px" }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-[120px]"
        >
          <path
            d="M0 120 C 300 40, 400 20, 600 40 S 1000 120, 1200 0 V 0 H 0 Z"
            fill="#69429a"
          />
        </svg>
      </div>

      {/* PRODUCTS */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#69429a]">
              Ընտրիր տորթը՝ ըստ տեսքի և բաղադրության
            </h2>
            <p className="text-lg text-gray-700">
              Ընտրիր ցանկացած տեսք և մենք այն կպատրաստենք քո կենդանու համար։
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-xl overflow-hidden shadow-sm"
              >
                <div
                  className="relative aspect-square cursor-pointer"
                  onClick={() => handleSelectImage(product.image)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                  {selectedImage === product.image.src && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white font-semibold">
                      Ընտրված է
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER BUTTON */}
      <div className="container mx-auto py-10 text-center bg-white">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition"
          style={{ backgroundColor: "#69429a" }}
        >
          {t("orderNow")}
        </a>
      </div>

      {/* FEATURES */}
      <section className="bg-white py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 rounded-xl bg-card p-6 text-center shadow-sm hover:shadow-md"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#69429a" }}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
