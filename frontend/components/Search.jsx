import { useState } from "react";
export function Search() {
    const [search, setSearch] = useState("")
    return <div>
        <input 
            style={{
                padding: 10,
                margin: 10,
                marginRight: 3,
                marginLeft: 10
            }}
            type="text" 
            placeholder="Enter topic to search" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button style={{
            padding: 10,
            margin: 10
        }} 
        onClick={() => {
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    search: search
                }), 
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async function(res) {
                const json = await res.json();
                alert("Todo added");
            })
        }}
        >Search</button>
    </div>
}