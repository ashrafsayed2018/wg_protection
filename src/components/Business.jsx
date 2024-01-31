import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row pt-6 pb-6 pl-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col mr-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={`${layout.section} `} >
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-right`}>نقدم لكم مجموعة واسعة من الخدمات المتخصصة</h2>
        <p className={`${styles.paragraph} max-w-full mt-5 text-right`}>
        نقدم لكم مجموعة واسعة من الخدمات المتخصصة في تركيب حماية طلاء السيارات والعازل الحراري وتلميع السيارات. نحن نضمن لكم جودة عالية وخدمة ممتازة بفضل فنيينا ذوي الخبرة الذين يعملون في هذا المجال لأكثر من 10 سنوات.

        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col text-right`} dir="rtl">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
