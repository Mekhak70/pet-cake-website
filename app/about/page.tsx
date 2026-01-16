"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import Shun from "@/public/shun.png"
import Cake from "@/public/cake.png"
import Paw from '@/public/paw.png'

export default function AboutPage() {
  const { t } = useLanguage()

  const stats = [
    { icon: Heart, value: "5,000+", label: t("happyPets") },
    { icon: Award, value: "100%", label: t("petSafe") },
    { icon: Users, value: "3,000+", label: t("happyFamilies") },
  ]

  return (
    <div className="flex flex-col w-full" style={{ backgroundColor: '#f9f5ff' }}>
      <div className=" flex items-center justify-center w-full" style={{ backgroundColor: 'rgb(105, 66, 154)' }}>
      <video
  src="/about.mov"
  autoPlay
  muted
  loop
  playsInline
  className="w-full object-cover h-[50vh] "
/>

      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5" >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className=" text-4xl font-extrabold tracking-tight text-foreground md:text-5xl" style={{ color: '#69429a', padding: '50px 0' }}>
              {t("aboutTitle")}
            </h1>

          </div>
        </div>
      </section>
      <section className="chupaboo-section">
  <div className="chupaboo-container">
    <div className="text-block">
      <span>Chupaboo–ն ստեղծվել է մի պարզ, բայց շատ կարևոր գաղափարի </span>
      <span>շրջան՝ սեր և հոգատարություն կենդանիների հանդեպ։</span>
    </div>

    <div className="text-block bold">
      <span>Սա այն գաղափարն է, որը մեզ դրդեց ստեղծել մի բան,</span>
      <span>որը միայն ուրախության մասին է:</span>
    </div>

    <Image src={Shun} alt="Shun" width={100} height={25} className="shun-image" />

    <div className="text-block">
      <span>Թե՛ տանը, թե՛ դրսում, մեր փոքրիկ ընկերները ունեն նույն սիրո և ուշադրության </span>
      <span>կարիքը, որը նրանք մեզ տալիս են ամեն օր։ Հենց այդ պատճառով էլ ծնվեց</span>
      <span>Chupaboo–ն՝ լրացնելու այդ բացը։</span>
    </div>

    <div className="text-block">
      <span>Մեր հոգատար թիմը պատրաստում է կենդանիների համար նախատեսված</span>
      <span>տորթեր և համովիկներ՝ ամբողջությամբ բնական բաղադրիչներից, առանց</span>
      <span>շաքարի և առանց հավելումների։</span>
    </div>

    <div className="text-block bold">
      <span>Մենք հավատում ենք, որ յուրաքանչյուր կենդանի արժանի է սիրո,</span>
      <span> ուշադրության և ընտանիքի ջերմությանը։</span>
    </div>
  </div>
</section>

<section className="happy-section">
  <div className="happy-container">
    <Image src={Cake} alt="Cake" width={70} height={56} />
    <div className="happy-text">
      <span>CHUPABOO-Ի ԵՐՋԱՆԻԿ</span>
      <span>ՀԱՃԱԽՈՐԴՆԵՐԸ</span>
    </div>
    <Image src={Paw} alt="Paw" width={70} height={56} />
  </div>
</section>

<style jsx>{`
  .chupaboo-section {
    padding: 0 200px;
  }

  .chupaboo-container {
    width: 100%;
    background-color: rgba(0,0,0,0.03);
    border-radius: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 56px 75px;
    gap: 20px;
    text-align: center;
    font-size: 20px;
    color: #69429a;
  }

  .text-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .bold {
    font-weight: bold;
  }

  /* Happy Section */
  .happy-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 49px 0 35px 0;
  }

  .happy-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 17.5px;
    font-size: 21px;
    font-weight: bold;
    color: #69429a;
    flex-direction: row;
  }

.happy-container img {
  width: 40px;
  height: 32px;
}


  .happy-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.14em;
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .chupaboo-section {
      padding: 0 100px;
    }
    .chupaboo-container {
      padding: 40px 50px;
      font-size: 18px;
    }
    .happy-container {
      gap: 12px;
      font-size: 18px;
    }
    .happy-text {
      font-size: 1.5rem;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    .chupaboo-section {
      padding: 0 20px;
    }
    .chupaboo-container {
      padding: 30px 20px;
      font-size: 16px;
    }
  .happy-container {
    gap: 10px;
    font-size: 8px;
  }
 .happy-container img {
    width: 40px;
    height: 32px;
  }

    .happy-text {
      font-size: 1.2rem;
     
    }
  }
`}</style>



      {/* Story Section */}
      {/* <section className="py-16">
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
              <h2 className="text-3xl font-bold text-foreground md:text-4xl" style={{ color: '#69429a' }}>{t("ourStory")}</h2>
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
      </section> */}

      {/* Stats Section */}
      {/* <section className="border-y border-border bg-primary py-16">
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
      </section> */}

      {/* Values Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl" style={{ color: '#69429a' }}>{t("ourValues")}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-card-foreground" style={{ color: '#69429a' }}>{t("qualityFirst")}</h3>
              <p className="text-muted-foreground">{t("qualityFirstDesc")}</p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-card-foreground" style={{ color: '#69429a' }}>{t("madeWithLove")}</h3>
              <p className="text-muted-foreground">{t("madeWithLoveDesc")}</p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-card-foreground" style={{ color: '#69429a' }}>{t("petHappiness")}</h3>
              <p className="text-muted-foreground">{t("petHappinessDesc")}</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
