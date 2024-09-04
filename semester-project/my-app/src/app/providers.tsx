'use client'

import { ThemeProvider } from 'next-themes'
import ThemeSwitch from './components/ThemeSwitch'
import { useState, useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
    
    return (
        <ThemeProvider attribute="color-scheme" defaultTheme='light' enableSystem>
            {children}
        </ThemeProvider>
    )
}