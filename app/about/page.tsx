"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { PRODUCTS } from "@/lib/products"


export default function AboutPage() {
  const { t } = useLanguage()

  const stats = [
    { icon: Heart, value: "5,000+", label: t("happyPets") },
    { icon: Award, value: "100%", label: t("petSafe") },
    { icon: Users, value: "3,000+", label: t("happyFamilies") },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {t("aboutTitle")}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">{t("aboutText")}</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-2xl bg-secondary/20 blur-3xl" />
              <Image
                src="/baker-decorating-pet-cake-in-kitchen.jpg"
                alt="Baker decorating pet cake"
                width={500}
                height={500}
                className="relative rounded-2xl object-cover shadow-xl"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t("ourStory")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("aboutDescription").split(/(?<=\.)\s+/)
                  .filter(sentence => sentence.trim() !== "")
                  .map((sentence, i) => (
                    <p key={i}>{sentence.trim()}</p>
                  ))}</p>
              </div>
              <Button asChild className="w-fit bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/shop">{t("orderNow")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-4 text-center text-primary-foreground">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <stat.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-lg text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">{t("ourValues")}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-card-foreground">{t("qualityFirst")}</h3>
              <p className="text-muted-foreground">{t("qualityFirstDesc")}</p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-card-foreground">{t("madeWithLove")}</h3>
              <p className="text-muted-foreground">{t("madeWithLoveDesc")}</p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-card-foreground">{t("petHappiness")}</h3>
              <p className="text-muted-foreground">{t("petHappinessDesc")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
