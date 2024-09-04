'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <></>
  )

  if (resolvedTheme === 'dark') {
    return <FiSun className="text-gray-300 hover:bg-gray-700 hover:text-white h-10 w-10 rounded-md px-2 mt-3" onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <FiMoon className="bg-gray-800  hover:bg-gray-600 text-white h-10 w-10 rounded-md px-2 mt-3" onClick={() => setTheme('dark')} />

  }
}