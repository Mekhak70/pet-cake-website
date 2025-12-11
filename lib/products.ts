export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  image: any
  category: "dog" | "cat" | "all"
}
import img1 from '@/public/01.png'
import img2 from '@/public/02.png'
import img3 from '@/public/03.png'
import img4 from '@/public/04.png'
import img5 from '@/public/05.png'
import img6 from '@/public/06.png'

export const PRODUCTS: Product[] = [
  {
    id: "peanut-butter-pup",
    name: "Peanut Butter Pup Cake",
    description: "A delicious peanut butter cake with yogurt frosting. Perfect for dogs who love peanut butter!",
    priceInCents: 2499,
    image: img5,
    category: "dog",
  },
  {
    id: "birthday-bone",
    name: "Birthday Bone Cake",
    description: "Bone-shaped cake made with wholesome ingredients. Ideal for celebrating your dog's special day.",
    priceInCents: 2999,
    image: img2,
    category: "dog",
  },
  {
    id: "salmon-dream",
    name: "Salmon Dream Cake",
    description:
      "Savory salmon-flavored cake that cats absolutely love. Made with real salmon and cat-safe ingredients.",
    priceInCents: 2799,
    image: img3,
    category: "cat",
  },
  {
    id: "chicken-delight",
    name: "Chicken Delight Cake",
    description: "Tender chicken cake with a creamy topping. A favorite for both dogs and cats!",
    priceInCents: 2699,
    image: img4,
    category: "all",
  },
  {
    id: "carrot-crunch",
    name: "Carrot Crunch Cake",
    description: "Healthy carrot cake with apple and honey. A nutritious treat for your furry friend.",
    priceInCents: 2299,
    image: img1,
    category: "dog",
  },
  {
    id: "tuna-treat",
    name: "Tuna Treat Cake",
    description: "Irresistible tuna-flavored mini cake perfect for cats. Made with premium tuna.",
    priceInCents: 2599,
    image: img6,
    category: "cat",
  },
]

export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}
