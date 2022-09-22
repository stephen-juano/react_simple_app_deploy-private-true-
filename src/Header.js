import React from 'react'

export default function Header({title}) {
  Header.defaultProps = {
    title: "Deafult Title"
  }

   return (<header>
        <h1>{title}</h1>
    </header>
  )
}


