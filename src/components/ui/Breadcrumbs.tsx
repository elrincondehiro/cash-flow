// src/components/ui/Breadcrumbs.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { theme } from '@/styles/theme'
import { routeTitles } from '@/types/constants'

// Mapeo personalizado para títulos de rutas


export default function Breadcrumbs() {
  const pathname = usePathname()
  
  // Divide la ruta y elimina strings vacíos
  const paths = pathname.split('/').filter(Boolean)

  // Genera breadcrumbs con rutas acumulativas
  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`
    const title = routeTitles[path] || path.charAt(0).toUpperCase() + path.slice(1)
    const isLast = index === paths.length - 1

    return { href, title, isLast }
  })

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            href="/" 
            className="text-gray-500 hover:text-gray-700"
            style={{ color: theme.colors.text.secondary }}
          >
            Inicio
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            {breadcrumb.isLast ? (
              <span 
                className="text-gray-900 font-semibold"
                style={{ color: theme.colors.text.primary }}
              >
                {breadcrumb.title}
              </span>
            ) : (
              <Link 
                href={breadcrumb.href}
                className="text-gray-500 hover:text-gray-700"
                style={{ color: theme.colors.text.secondary }}
              >
                {breadcrumb.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}