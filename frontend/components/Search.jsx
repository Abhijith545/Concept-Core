import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function Search() {
    const [search, setSearch] = useState("")
    return <div className="search">
            <input name="search-box" type="text" placeholder="Enter topic to search" value={search} 
                onChange={(e) => setSearch(e.target.value)}
            />
            <button name="search-btn" onClick={() => {
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
            }}>Search</button>
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
    </div>
}
