import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import search from "../images/search-solid.svg";


export default function Gallery() {
  const data = useStaticQuery(graphql`
  query PhotoPage{
    gcms{
        photo{
            id
            name
            description
            image{
                url
            }
        }
    }
}
  `);
  const photos = data.gcms.photo;  
  return (
    <div className="min-h-screen w-full flex justify-center items-center my-20 mx-0">
      <div className="text-xl bg-white w-5/6 my-0 mx-auto max-w-4xl shadow-lg py-11 px-5 rounded-2xl lg:max-w-6xl lg:p-24">
        <header className="flex items-center justify-center flex-col lg:flex-row lg:justify-between">
          <h1 className="text-4xl font-black tracking-tighter">PhotoGallery</h1>
          <form className="mt-2 w-4/5 max-w-xs relative">
            <input 
              type="text"
              placeholder="search images"
              className="border-b-2 mb-2 text-xl outline-none text-gray-400 bg-transparent w-full"
            />
            <img 
              src={search}
              alt="search btn"
              height="20px"
              width="20px"
              className="absolute right-0 top-0 opacity-50 text-gray-400"
            />
          </form>
        </header>
          <div className="md:grid grid-cols-3 mt-12 gap-5">
        {photos.map(photo => (
          <div key={photo.id} className="w-full h-80 relative overflow-hidden rounded-lg transition-shadow duration-35 ease hover:shadow-lg">
            <img 
              src={photo.image.url}
              alt={photo.name}
              className="h-full w-full object-cover"
            />
            <div className="w-full p-7 absolute bg-white bottom-0 text-xs">
              <h3 className="font-bold">{photo.name}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
