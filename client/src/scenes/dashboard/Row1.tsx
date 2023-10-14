import DashboardBox from '@/components/DashboardBox'
import React from 'react'

type Props = {}

const Row1 = (props: Props) => {
  return (
    <>
        <DashboardBox gridArea="a" />
        <DashboardBox gridArea="b" />
        <DashboardBox gridArea="c" />
    </>
  )
}

export default Row1