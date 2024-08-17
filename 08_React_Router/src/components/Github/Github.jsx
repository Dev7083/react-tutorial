import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

const Github = () => {
  const data = useLoaderData()
  // const [data, SetData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/dev7083').then(response => response.json())
  //     .then(data => SetData(data))
  // }, [])

  return (
    <>
      <div className="flex flex-col bg-gray-600 p-8 gap-4 items-center justify-center">
        <div className="">
          <img src={data.avatar_url} alt="Git picture" width={300} className="rounded-full" />
        </div>
        <div className='text-center text-white p-4 text-4xl'>Github followers: {data.followers}
        </div>
      </div>
    </>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const reponse = await fetch('https://api.github.com/users/dev7083')
  return reponse.json()
}