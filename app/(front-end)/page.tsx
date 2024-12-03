import Image from "next/image"
import { Button } from "@/components/ui/button"
import CategorySection from "@/components/CategorySection"
import ProductContainer from "@/components/ProductConatiner"
import CategoryBanner from "@/components/CategoryBanner"
import FeaturedPrdts from "@/components/featuredPrdts"
import { getAllCategories } from "@/actions/categories"
import { Category, Product } from "@prisma/client"
import { getAllProducts } from "@/actions/products"

export default async function  HeroSection() {
  const categories: Category[] = (await getAllCategories()) || [];
  const products: Product[] = (await getAllProducts()) || [];
  return (
  <div>
     <div style={{
   clipPath: "ellipse(150% 100% at 50% 0%)",
}} className="relative bg-[#064c4f] overflow-hidden mt-2 lg:mt-4 lg:rounded-lg">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-white z-10 relative">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-loose text-[#fbf8e5] mb-3
                            relative">
                {/* Decorative elements */}
                <span className="absolute -left-10 top-0 text-[#bbea70] opacity-50 text-2xl leading-10">
                  ❖
                </span>
                We bring the store
                <br />
                to your door
              </h1>
              <p className="text-base md:text-lg text-gray-200 max-w-md mb-3">
                Get organic produce and sustainably sourced groceries delivered 
                at up to 4% off grocery prices. Fresh, convenient, and eco-friendly.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-[#bbea70] text-black hover:bg-[#8a9d3d] hover:text-white 
                           transition-all duration-300 ease-in-out transform hover:scale-105"
                size="lg"
              >
                Shop now
              </Button>
             <a href="/dashboard">
             <Button
                className="bg-black text-white hover:bg-[#8a9d3d] hover:text-white 
                           transition-all duration-300 ease-in-out transform hover:scale-105"
                size="lg"
              >
                View Dashboard
              </Button>
             </a>
              
            </div>
          </div>

          {/* Image Container */}
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-square relative">
              {/* Circular background effect */}
              <div className="absolute -inset-10 bg-[#bbea70]/20 rounded-full blur-2xl"></div>
              
              <Image
                src="/hero-image.png"
                alt="Grocery bag with fresh produce"
                fill
                className="object-contain z-10 relative animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 bottom-0 
                        bg-gradient-to-br from-[#024b4b]/60 to-[#064c4f]/30 
                        opacity-100"></div>
      </div>
    </div>
    <CategorySection categories={categories}/>
    <ProductContainer products={products}/>
    <CategoryBanner/>
    <FeaturedPrdts/>
  </div>
  )
}


