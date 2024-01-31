import React from 'react'
import { imageTwo } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> حان الوقت 
 <br className='sm:block hidden'/> لإعادة التفكير   في اختياراتك</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    نعمل في وين قادر بخبرتنا  في مجال وقاية وتلميع السيارات على توفير افضل واقوى المواد لتعطي افضل نتيجة على مركبتك ، كما نقوم بالحرص على اختيار طاقم العمل الذي يقوم بأداء العمل بطريقة احترافية.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={imageTwo}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
