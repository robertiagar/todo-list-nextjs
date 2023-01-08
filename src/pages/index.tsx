import { type NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

export interface ToDo {
  text: string;
  done: boolean;
  dateAdded: Date;
}

const Home: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<ToDo[]>([]);

  function handleTextChanged(e: React.ChangeEvent) {
    if (e.target.value != null) setText(e.target.value as string);
  }

  function handleKeyUp(e: React.KeyboardEvent) {
    if (e.code === "Enter") {
      setItems([...items, { text: text, done: false, dateAdded: new Date() }]);
      setText("");
    }
  }

  const toggleDone = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = Number(e.currentTarget.id);
    const item = items[id];
    if (item != null) {
      item.done = !item.done;
      items[id] = item;
      setItems([...items]);
    }
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full bg-gradient-to-b from-[#2e026d] to-[#15162c] pt-16">
        <div className="flex w-1/2 flex-col p-10">
          <input
            className="border-b-2 border-white bg-transparent px-4 text-3xl text-white focus:outline-0"
            type="text"
            value={text}
            onChange={handleTextChanged}
            onKeyUp={handleKeyUp}
          ></input>
          <ul className="text-xl text-white">
            {items.map((item, index) => {
              return (
                <li
                  className={
                    "flex flex-row justify-between border-b-2 border-white px-4 text-xl " +
                    (item.done ? "line-through" : "")
                  }
                  key={index}
                  id={index.toString()}
                  onClick={toggleDone}
                >
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
