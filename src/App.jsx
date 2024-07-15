import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Song from "./components/Song";

function App() {
  let data = [
    {
      image: "https://c.saavncdn.com/126/Photo-Punjabi-2016-500x500.jpg",
      songName: "Tadap",
      AuthName: "kumar sanu",
      desc: " Lorem ipsum dolor sit ",
      added: false,
    },
    {
      image:
        "https://m.timesofindia.com/photo/98517132/size-133761/98517132.jpg",
      songName: "Ishq wisk",
      AuthName: "asha bhosle",
      desc: " Lorem ipsum dolor sit ",
      added: false,
    },
    {
      image: "https://i1.sndcdn.com/artworks-000045996285-1ihpgx-t500x500.jpg",
      songName: "Tum he ho",
      AuthName: "Udit narayan",
      desc: " Lorem ipsum dolor sit ",
      added: true,
    },
    {
      image: "https://i.ytimg.com/vi/Q1sjcAgIlQA/maxresdefault.jpg",
      songName: "Naaja ree",
      AuthName: "Himesh ",
      desc: " Lorem ipsum dolor sit ",
      added: false,
    },
    {
      image:
        "https://m.timesofindia.com/photo/98517132/size-133761/98517132.jpg",
      songName: "Ishq wisk",
      AuthName: "asha bhosle",
      desc: " Lorem ipsum dolor sit ",
      added: false,
    },
    {
      image:
        "https://english.mathrubhumi.com/image/contentid/policy:1.9515893:1714203072/93843a08dc0e7bb67b213af6cbcfb184.jpg?$p=cac5197&f=16x10&w=852&q=0.8",
      songName: "Tum he ho",
      AuthName: "Udit narayan",
      desc: " Lorem ipsum dolor sit ",
      added: true,
    },
    {
      image:
        "https://m.timesofindia.com/photo/102824207/size-161063/102824207.jpg",
      songName: "Naaja ree",
      AuthName: "Himesh ",
      desc: " Lorem ipsum dolor sit ",
      added: false,
    },
    {
      image: "https://i.ytimg.com/vi/y5MPVd_urSs/maxresdefault.jpg",
      songName: "Tadap",
      AuthName: "kumar sanu",
      desc: " Lorem ipsum dolor sit ",
      added: false,
    },
    {
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/179/340/desktop-wallpaper-check-out-new-hindi-hit-song-music-video-teaser-thumbnail.jpg",
      songName: "Ishq wisk",
      AuthName: "asha bhosle",
      desc: " Lorem ipsum dolor sit ",
      added: false,
    },
    {
      image:
        "https://w0.peakpx.com/wallpaper/385/105/HD-wallpaper-arijit-singh-new-song-2016-khuda-latest-hindi-songs-2016-bollywood-movies-songs-thumbnail.jpg",
      songName: "Tum he ho",
      AuthName: "Udit narayan",
      desc: " Lorem ipsum dolor sit ",
      added: true,
    },
    {
      image:
        "https://www.creativehatti.com/wp-content/uploads/edd/2021/06/Sidhu-Moose-Wala-Vector-Illustration-Thumbnail-Large.jpg",
      songName: "Naaja ree",
      AuthName: "Himesh ",
      desc: " Lorem ipsum dolor sit ",
      added: false,
    },
    {
      image:
        "https://m.timesofindia.com/photo/88313790/size-157307/88313790.jpg",
      songName: "Ishq wisk",
      AuthName: "asha bhosle",
      desc: " Lorem ipsum dolor sit ",
      added: false,
    },
    {
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/217/746/desktop-wallpaper-watch-new-hindi-song-music-video-thumbnail.jpg",
      songName: "Tum he ho",
      AuthName: "Udit narayan",
      desc: " Lorem ipsum dolor sit ",
      added: true,
    },
    {
      image:
        "https://m.timesofindia.com/photo/102824207/size-161063/102824207.jpg",
      songName: "Naaja ree",
      AuthName: "Himesh ",
      desc: " Lorem ipsum dolor sit ",
      added: false,
    },
  ];

  const [songs, setSong] = useState(data);
  const updateFavorites = (objIndex) => {
    setSong((prev) => {
      return prev.map((val, index) => {
        if (index === objIndex) {
          return {
            ...val,
            added: !val.added,
          };
        }
        return val;
      });
    });
  };

  return (
    <div>
      <Navbar data={songs} />
      <div className="flex flex-wrap ">
        {songs.map((data, index) => (
          <Song
            key={index}
            index={index}
            sendData={data}
            handleSongsUpdate={updateFavorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
