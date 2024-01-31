import styles from '../style'
import { discount,hero } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            src={discount}
            alt='discount'
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>  وين قارد لحماية سيارات</span>
       
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full text-right'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] '>
          افضل شركة<br className='sm:block hidden'/> {" "}
            <span className='text-gradient'> تركيب حماية</span> {" "}
          </h1>
         
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full text-right'>
        وعازل للسيارات
        </h1>
        <p className={`${styles.paragraph} max-w-full mt-5 text-right`} dir="rtl">
        شركة وين قارد لحماية لوقاية السيارات

اقوى انواع الحمايات كفالة 10 سنوات

ضد الاصفرار والخدوش وبهتان الون 

  نانو السيراميك   و 9 H

<br />
  <p >
بتقنية نانو سيراميك بنسبة ‎%‎96 </p>
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={hero}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
