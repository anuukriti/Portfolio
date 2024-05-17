import React from "react";
import { Card } from "./Card";
import serviceNow from "../assets/serviceNow.png";

function Achievement() {
    const achievement = [
        {
            id: 1,
            img: "/src/assets/serviceNow.png",
            name: "ServiceNow Women Code to Win 2024 - India",
            url: "https://unstop.com/competitions/servicenow-women-code-to-win-2024-india-servicenow-838054/coding-challenge/123929",
            description: [
                " Selected among 1500+ applicants for the prestigious top 90 spots in ServiceNow’s Code to Win 2024 program.",
            ],
        },
        {
            id: 2,
            img: "/src/assets/designHead.png",
            name: "Design Head : Sochem(Society of Chemical Engineers), IIT (BHU) Varanasi",
            url: "https://www.instagram.com/p/CwVGby3su3K/?igsh=MWJlOTF6dXhndDV0cQ%3D%3D&img_index=4",
            description: [
                " Mentored Sochem’s design team members in principles and creation of Wireframes and social media content.",
            ],
        },
        {
            id: 3,
            img: "/src/assets/aagman.png",
            name: "Aagman 2022 : 1st Position",
            url: "https://www.instagram.com/p/CaPVF-bsQT9/",
            description: [
                " Secured 1st Position in Fine Arts competition organized by Aagman 2022, IIT BHU.",
            ],
        },
    ];

    return (
        <div className="h-screen text-white w-full bg-[url('https://i.pinimg.com/564x/c5/a9/9f/c5a99f8c1bdb92e3cd54464d3b1b3bf6.jpg')] bg-repeat-round">
            <div className="h-full w-full px-10 py-10 bg-black/50">
                <div className="h-auto w-full mb-5 flex item-center justify-center text-center text-2xl font-Font1 font-semibold">
                    <h1>Achievements</h1>
                </div>
                <div className="h-full w-full overflow-y-scroll overflow-x-hidden px-10">
                    {achievement.map((a) => (
                        <Card
                            key={a.id}
                            Img={a.img}
                            Name={a.name}
                            description={a.description}
                            url={a.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Achievement;
