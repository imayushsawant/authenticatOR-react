import { useEffect, useState } from "react";

function Profile() {
  const [state, setState] = useState();

  async function getmeAPI() {
    const url = "https://api.freeapi.app/api/v1/users/current-user";
    const options = { method: "GET", headers: { accept: "application/json" } };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("first one")
      console.log(data);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
  const reponsedata = getmeAPI()
  console.log(reponsedata)
  return <div>
    <p>Name:{}</p>
  </div>;
}

export default Profile;
