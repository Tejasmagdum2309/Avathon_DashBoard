import { useDispatch } from "react-redux";
import { setCurrentSelectedFilter } from "../redux/slices/tableSlice";

export const SearchDropdownComponent = ({ setSelectedKeys, selectedKeys, confirm , clearFilters , columnKey }) => { 
  
  const dispatch = useDispatch();
  // console.log("selectedKeys", selectedKeys);
  return (
     <div style={{ padding: 8 }}>
    <input
      value={selectedKeys[0]}
      onChange={e => setSelectedKeys([e.target.value])}
      placeholder="Search"
      style={{ width: 180, marginBottom: 8, display: 'block' }}
    />
    <button className='border border-blue-600 bg-blue-600 text-white rounded px-2 py-[1px] cursor-pointer' onClick={() => { dispatch(setCurrentSelectedFilter(columnKey)); confirm();}} style={{ marginRight: 8  }}>Search</button>
    <button className='text-red-800 cursor-pointer' onClick={() => {dispatch(setCurrentSelectedFilter(columnKey)); setSelectedKeys(['']); confirm();}}>Reset</button>
  </div>
  );
};