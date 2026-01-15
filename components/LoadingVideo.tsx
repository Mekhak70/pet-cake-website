"use client"

import { useEffect } from "react"

export default function LoadingVideo({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div
  className="fixed inset-0 z-50 flex items-center justify-center"
  style={{ backgroundColor: "#69429a" }}
>
  {/* Wrapper, որը պահպանում է նույն ֆոնը */}
  <div className="relative w-full h-[50%] flex items-center justify-center">
    <div
      className="absolute inset-0"
      style={{ backgroundColor: "#69429a" }}
    ></div>

    
    <video
      src="/loading.mov"
      autoPlay
      muted
      playsInline
      className="relative w-auto h-full"
      style={{ backgroundColor: "transparent" }}
    />
  </div>
</div>

  )
}
