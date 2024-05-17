import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export function Card({ Img, Name, skill = [], description = [], url }) {
    return (
        <div className="flex w-full flex-col py-5 px-5 h-auto items-center shadow-xl shadow-black rounded-2xl  border border-slate-700 md:flex-row my-5 mx-5 bg-fuchsia-950/30">
            <div className="h-[250px] w-[400px]">
                <Link to={url} target="_blank">
                    <img
                        src={Img}
                        alt={Name}
                        className="h-full w-full object-cover cursor-pointer border-black shadow-xl rounded-lg"
                    />
                </Link>
            </div>
            <div>
                <div className="p-4">
                    <Link to={url} target="_blank">
                        <h1 className="inline-flex items-center text-xl text-fuchsia-600 font-bold hover:text-fuchsia-400">
                            {Name} <ArrowUpRight className="ml-2 h-4 w-4" />
                        </h1>
                    </Link>

                    {description &&
                        description.map((e) => (
                            <p className="mt-3 text-sm text-white text-justify">
                                {e} <br />
                            </p>
                        ))}

                    <div className="mt-4">
                        {skill &&
                            skill.map((e) => (
                                <span className="mb-2 mr-2 inline-block rounded-full shadow-xl hover:bg-fuchsia-500 hover:text-white cursor-pointer transition-all ease-in-out bg-fuchsia-300 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                    #{e}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
