import React from 'react'
import config from '@/sanity.config';
import {NextStudio} from 'next-sanity/studio'

const admin = () => {
  return (
   <NextStudio config = {config} />
  )
}
export default admin 