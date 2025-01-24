import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <Breadcrumbs />
      {children}
    </div>
  )
}