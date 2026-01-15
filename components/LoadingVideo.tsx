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
  style={{ backgroundColor: "#69429A" }}
>
  {/* Wrapper, որը պահպանում է նույն ֆոնը */}
  <div className=" w-full h-[50%] flex items-center justify-center">
   

    
    <video
      src="/loading.MP4"
      autoPlay
      muted
      playsInline
      className=" w-auto h-full"
    />
  </div>
</div>

  )
}
