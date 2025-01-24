'use client'
import { User } from '@supabase/supabase-js'
import { theme } from '@/styles/theme'
import UserMenu from '@/components/ui/UserMenu'
import Link from 'next/link'

interface HeaderProps {
  user: User | null
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200" style={{ borderColor: theme.colors.primary.light }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold" style={{ color: theme.colors.primary.main }}>
                Mi App
              </span>
            </Link>
          </div>

          <nav className="flex items-center space-x-4">
            {user ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="btn-primary"
                  // className="text-gray-600 hover:text-gray-900"
                >
                  Dashboard
                </Link>
                <UserMenu user={user} />
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="btn-secondary"
                >
                  Iniciar Sesión
                </Link>
                <Link 
                  href="/register" 
                  className="btn-primary"
                >
                  Registrarse
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}