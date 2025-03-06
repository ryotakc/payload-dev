'use client'

import type React from 'react'
import { Check, Info, AlertTriangle, AlertCircle, CircleCheckBig } from 'lucide-react'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  const getIcon = () => {
    switch (style) {
      case 'info':
        return <Info className="h-6 w-6 text-blue-500 dark:text-blue-400 flex-shrink-0" />
      case 'warning':
        return (
          <AlertTriangle className="h-6 w-6 text-amber-500 dark:text-amber-400 flex-shrink-0" />
        )
      case 'error':
        return <AlertCircle className="h-6 w-6 text-red-500 dark:text-red-400 flex-shrink-0" />
      case 'success':
        return (
          <CircleCheckBig className="h-6 w-6 text-green-500 dark:text-green-400 flex-shrink-0" />
        )
      default:
        return <Info className="h-6 w-6 text-blue-500 dark:text-blue-400 flex-shrink-0" />
    }
  }

  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn('relative rounded-lg overflow-hidden', {
          'bg-blue-50 text-gray-800 dark:bg-[#1a2e44] dark:text-white': style === 'info',
          'bg-amber-50 text-gray-800 dark:bg-[#3c2a1b] dark:text-white': style === 'warning',
          'bg-red-50 text-gray-800 dark:bg-[#3a1c1c] dark:text-white': style === 'error',
          'bg-green-50 text-gray-800 dark:bg-[#1a2e1e] dark:text-white': style === 'success',
        })}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1.5">
          <div
            className={cn('h-full w-full', {
              'bg-blue-500': style === 'info',
              'bg-amber-500': style === 'warning',
              'bg-red-500': style === 'error',
              'bg-green-500': style === 'success',
            })}
          />
        </div>
        <div className="flex p-4 pl-6">
          <div className="mr-3 pt-1">{getIcon()}</div>
          <div className="flex-1">
            <RichText data={content} enableGutter={false} enableProse={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerBlock
