import React from 'react'
import styles from '../style'
import Phone from './Phone'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <a  href="tel:94476010" className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>اتصل</span>
          </p>
         
         <Phone/>
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>بنا الان</span>
        </p>
      </a>
    </div>
  )
}

export default GetStarted
