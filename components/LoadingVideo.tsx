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
  style={{ backgroundColor: "#7c4ba9" }}
>
  {/* Wrapper, որը պահպանում է նույն ֆոնը */}
  <div className="relative w-full h-[50%] flex items-center justify-center">
    <div
      className="absolute inset-0"
      style={{ backgroundColor: "#7c4ba9" }}
    ></div>

    
    <video
      src="/loading.mp4"
      autoPlay
      muted
      playsInline
      className="relative w-auto h-full"
    />
  </div>
</div>

  )
}
