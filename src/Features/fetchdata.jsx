import React, { useEffect, useState } from 'react';
import DropdownList from './dropdownlist';

function FetchApi({UrlAPI}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(UrlAPI)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [UrlAPI]);

  return (
    <div>
        <DropdownList data={data} />
    </div>
    );
}

export default FetchApi;