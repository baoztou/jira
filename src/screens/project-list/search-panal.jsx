import React from "react"
export const SearchPanal = ({ users, param, setParam }) => {
  return (
    <form>
      {/* setParam(Object.assign({},param,{name:evt.target.value})) */}
      <div>
        <input
          type="text"
          value={param.name}
          onChange={evt =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.value}
          onChange={evt =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}
