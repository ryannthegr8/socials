import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

function App() {
  const data = {
    name: "Ryan Mmbale",
    image: "/src/assets/ryan.jpg",
    bio: " Software developer",
    links: [
      {
        name: "Portfolio",
        url: "",
        icon: " ",
      },
      {
        name: "Twitter",
        url: "",
        icon: "twitter",
      },
      {
        name: "GitHub",
        url: "",
        icon: "github",
      },
      {
        name: "Instagram",
        url: "",
        icon: "instagram",
      },
      {
        name: "LinkedIn",
        url: "",
        icon: "linkedin",
      },
    ],
  };
  return (
    <div className="p-m-4">
      <div className="p-d-flex p-jc-center p-ai-center">
        <Avatar image={data.image} size="xlarge" shape="circle"></Avatar>
        <h1 className="p-m-2">{data.name}</h1>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <p>{data.bio}</p>
      </div>
      <div class="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column">
          {data.links.map((link) => (
            <Button className="p-m-2 p-button-outline">{link.name}</Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
