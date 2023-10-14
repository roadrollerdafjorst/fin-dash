import DashboardBox from '@/components/DashboardBox'
import React from 'react'

type Props = {}

const Row2 = (props: Props) => {
  return (
    <>
        <DashboardBox gridArea="d" />
        <DashboardBox gridArea="e" />
        <DashboardBox gridArea="f" />
    </>
  )
}

export default Row2