import React from "react"
import { useState, useEffect } from "react"
import { List } from "./list"
import { SearchPanal } from "./search-panal"
import qs from "qs"
import { cleanObject } from "./../../util"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  useEffect(() => {
    console.log(qs.stringify(cleanObject(param)))
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])
  return (
    <div>
      <SearchPanal param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}
