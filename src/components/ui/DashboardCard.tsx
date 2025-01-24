'use client'
import Link from 'next/link'
import { theme } from '@/styles/theme'
import { DashboardItem, hoverColors } from '@/types/constants'

export default function DashboardCard({
  title,
  description,
  icon,
  route,
  color = theme.colors.primary.main,
}: DashboardItem) {
  const hoverCol = hoverColors[color]? hoverColors[color] : hoverColors['blue']
  return (
    <Link href={route}>
      <div 
        className={`card hover:shadow-lg transition-all hover:opacity-90 ${hoverCol} cursor-pointer `} 
        style={{ borderLeft: `4px solid ${color}` }}
      >
        <div className="text-3xl mb-4">{icon}</div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
          {title}
        </h2>
        <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
          {description}
        </p>
      </div>
    </Link>
  )
}