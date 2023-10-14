import DashboardBox from '@/components/DashboardBox'
import React from 'react'

type Props = {}

const Row3 = (props: Props) => {
  return (
    <>
        <DashboardBox gridArea="g" />
        <DashboardBox gridArea="h" />
        <DashboardBox gridArea="i" />
        <DashboardBox gridArea="j" />
    </>
  )
}

export default Row3