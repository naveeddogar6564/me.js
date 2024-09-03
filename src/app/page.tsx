import React from "react"
import image from "next/image"
const page = () => {
  return (
    <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto"  src="/0 (32).jpg" alt="" width="384" height="512"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        My name is Naveed sarwar dogar.i am working in govt sector.i am very intrested in artifical inteligenc.
        Thats why i joind Generative Ai course under the supervision of Sir, sabzal shaheen and our amazing teacher Mr, mian Asif langrah. both persons are so helpful and kind persons.
        We learn lot of things from both of them.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Naveed Sarwar Dogar
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          student of generative Ai course
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page