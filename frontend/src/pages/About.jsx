import React from 'react'
import Title from '../componenets/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../componenets/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint omnis, aliquam quis deserunt minima laudantium blanditiis magnam hic in corrupti obcaecati doloremque eius aut optio aliquid repudiandae nesciunt non molestiae!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam eum, quidem veritatis minus eius sunt, accusamus quibusdam beatae blanditiis placeat perferendis repellendus? Quaerat dolorem laboriosam debitis ullam quibusdam? Eos, fugiat.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus id nobis sint assumenda labore temporibus perferendis qui obcaecati reprehenderit, quo fuga! Libero totam soluta voluptatem eos expedita omnis vitae voluptatum!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, possimus?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, possimus?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'>
          <b>Expectional Customer Service: </b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, possimus?</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About