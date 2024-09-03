import React from "react"

const page = () => {
    return (
        <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="/house.jpeg" alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              House number 2457 street number 17.jinnah park tehsil & district rahim yar khan. <div className=""></div>
              <div className=""></div>
            </p>
            </blockquote>  
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Naveed Sarwar dogar
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Student Generative Ai course
            </div>
          </figcaption>
        </div>
      </figure> </div>
  
    )
}

export default page