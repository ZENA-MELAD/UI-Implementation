import React, { useState } from "react";
import Results from "../../assets/Data/Results";
const Search = () => {
  const [query, setQuery] = useState("");
  const results = Results.filter(
    (res) => res.name.toLowerCase() === query.toLowerCase(),
  );
  const[showAll,setShowAll]=useState(false)
  const limit=12
  const visibleResults=showAll?results:results.slice(0,limit)

  return (
    <div className="w-full p-4 flex flex-col flex-1 gap-y-6">
      <h2 className="text-4xl capitalize">search</h2>
      <div className=" w-full max-w-xl">
        <input
          type="search"
          className=" w-full border-2 p-2 rounded-md transition-all ease-in-out duration-300  focus:outline-none focus:border-[#EC4899] focus:shadow-sm"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search by name"
        />
      </div>
      {query && <h3 className=" uppercase font-black text-custom tracking-wider ">all results</h3>}
      <div className="w-full grid  grid-cols-3 md:grid-cols-4 gap-3">
        {visibleResults.map((item) => (
          <div key={item.id}>
            <img src={item.image} />
          </div>
        ))}
        </div>
        {results.length>limit&&
        <div className="w-full flex justify-center items-center">
            <button className=" w-full max-w-xl uppercase text-custom font-black border-2 rounded-md p-3 transition-colors ease-in-out duration-300 hover:bg-gray-300 hover:border-transparent hover:text-slate-700 tracking-wider" 
            onClick={()=>setShowAll(prev=>!prev)}>{showAll?"show less":"show more"}</button>
        </div>
        
        }
    </div>
  );
};

export default Search;
