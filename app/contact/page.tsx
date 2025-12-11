"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    { icon: MapPin, label: t("address"), value: "123 Pet Street, Bakery Town, BK 12345" },
    { icon: Phone, label: t("phone"), value: "+374 (33) 775750" },
    { icon: Mail, label: t("email"), value: "mychupaboo@gmail.com" },
    { icon: Clock, label: t("hours"), value: "Mon-Sat: 9am - 6pm" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {t("contactTitle")}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">{t("contactText")}</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-xl bg-card p-6 shadow-sm md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{t("messageSent")}</h3>
                  <p className="text-muted-foreground">{t("messageSentDesc")}</p>
                  <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                    {t("sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">{t("name")}</Label>
                    <Input id="name" name="name" placeholder={t("name")} required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">{t("email")}</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">{t("message")}</Label>
                    <Textarea id="message" name="message" placeholder={t("message")} rows={5} required />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    {isSubmitting ? t("sending") : t("sendMessage")}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">{t("getInTouch")}</h2>
                <div className="flex flex-col gap-6">
                  {contactInfo.map((info, index) => {
                    const isPhone = info.label === t("phone")
                    const isEmail = info.label === t("email")

                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                          <info.icon className="h-5 w-5 text-primary-foreground" />
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground">{info.label}</h3>

                          {isPhone ? (
                            <a
                              href={`tel:${info.value.replace(/[^+0-9]/g, "")}`}
                              className="text-primary hover:underline"
                            >
                              {info.value}
                            </a>
                          ) : isEmail ? (
                            <a
                              href={`mailto:${info.value}`}
                              className="text-primary hover:underline"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}

                </div>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-xl bg-muted">
                <div className="flex h-64 items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="mx-auto mb-2 h-8 w-8" />
                    <p>{t("mapComingSoon")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">{t("faq")}</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-card-foreground">{t("faqCustomDesign")}</h3>
              <p className="text-muted-foreground">{t("faqCustomDesignAnswer")}</p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-card-foreground">{t("faqOrderAdvance")}</h3>
              <p className="text-muted-foreground">{t("faqOrderAdvanceAnswer")}</p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-card-foreground">{t("faqSafe")}</h3>
              <p className="text-muted-foreground">{t("faqSafeAnswer")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
