import React from 'react'
import "../CSS/Footer.css"

const links =[
    {
        id:0,
        title:"Support",
        link:"/support"
    },
    {
        id:1,
        title:"Help Center",
        link:"/help-center"
    },
    {
        id:2,
        title:"Privacy",
        link:"/privacy"
    },
    {
        id:3,
        title:"Terms of Service",
        link:"/terms-of-service"
    },
]

const Footer = () => {
  return (
    <div id="Footer">
        {
            links.map((e)=>{
                return <a href={e.link} key={e.id}>{e.title}</a>
            })
        }
    </div>
  )
}

export default Footer
