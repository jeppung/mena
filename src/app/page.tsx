"use client"

import { Dispatch, SetStateAction, useRef, useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import confetti from "canvas-confetti";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [steps, setSteps] = useState(1)
  const [parts, setParts] = useState(1)

  const openHandler = () => {
    audioRef.current!.volume = 0.1
    audioRef.current!.play();
    handleClick()
    setIsOpen(true)
  }

  const handleClick = () => {
    const duration = 2 * 2000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
 
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
 
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
 
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
 
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };
 

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-[url(/mena/white.jpg)]">
      <audio ref={audioRef} loop>
        <source src="/mena/bad.mp3"/>
      </audio>
      {
        isOpen ? <div className="max-w-[30%]">
          <Chapter1 parts={parts} setParts={setParts} setSteps={setSteps} steps={steps}/>
        </div> : <div className="text-center flex flex-col items-center">
          <p className="text-3xl">To mena, from jeppung</p>
         
          <button onClick={openHandler} className="cursor-pointer hover:animate-bounce  text-white bg-black rounded-full w-16 h-16 mt-5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </button>
        </div>
      }
    </div>
  );
}

const Chapter1 = (props: {steps: number, parts: number, setParts: Dispatch<SetStateAction<number>>, setSteps: Dispatch<SetStateAction<number>>}) => {
  const {steps, parts, setParts, setSteps} = props
  
  return <>
  <div>
    <div>
        <Image src={'/mena/w2e.webp'} width={300} height={300} alt="w2e" className={`absolute transition-all duration-700 ${parts === 2 ? 'bottom-50 left-50 rotate-20 opacity-100' : '-bottom-50 -left-50 rotate-0 opacity-0'}`}/>
        <Image src={'/mena/w2elogo.png'} width={300} height={300} alt="w2e" className={`absolute transition-all duration-700 ${parts === 2 ? 'bottom-50 right-50 -rotate-20 opacity-100' : '-bottom-50 -right-50 rotate-0 opacity-0'}`}/>
        <Image src={'/mena/w2emember.png'} width={400} height={400} alt="w2e" className={`absolute transition-all duration-700 ${parts === 2 ? 'top-20 right-50 rotate-20 opacity-100' : '-top-50 -right-50 rotate-0 opacity-0'}`}/>        
    </div>
    <div>
        <Image src={'/mena/dimsum1.png'} width={300} height={300} alt="dimsum" className={`absolute transition-all duration-700 ${parts === 3 ? 'bottom-50 left-50 rotate-20 opacity-100' : '-bottom-50 -left-50 rotate-0 opacity-0'}`}/>
        <Image src={'/mena/dimsum2.png'} width={300} height={300} alt="dimsum" className={`absolute transition-all duration-700 ${parts === 3 ? 'bottom-50 right-50 -rotate-20 opacity-100' : '-bottom-50 -right-50 rotate-0 opacity-0'}`}/>
        <Image src={'/mena/dimsum3.png'} width={400} height={400} alt="dimsum" className={`absolute transition-all duration-700 ${parts === 3 ? 'top-0 right-50 rotate-20 opacity-100' : '-top-50 -right-50 rotate-0 opacity-0'}`}/>        
    </div>
    <div>
        <Image src={'/mena/roblox1.png'} width={300} height={300} alt="roblox" className={`absolute transition-all duration-700 ${parts === 4 ? 'bottom-50 left-50 rotate-20 opacity-100' : '-bottom-50 -left-50 rotate-0 opacity-0'}`}/>
        <Image src={'/mena/valo1.png'} width={300} height={300} alt="valo" className={`absolute transition-all duration-700 ${parts === 4 ? 'bottom-50 right-50 -rotate-20 opacity-100' : '-bottom-50 -right-50 rotate-0 opacity-0'}`}/>
        <Image src={'/mena/valo2.webp'} width={400} height={400} alt="valo" className={`absolute transition-all duration-700 ${parts === 4 ? 'top-0 right-50 rotate-20 opacity-100' : '-top-50 -right-50 rotate-0 opacity-0'}`}/>        
        <Image src={'/mena/roblox2.png'} width={400} height={400} alt="roblox" className={`absolute transition-all duration-700 ${parts === 4 ? 'top-10 left-20 -rotate-20 opacity-100' : '-top-50 -left-50 rotate-0 opacity-0'}`}/>
    </div>
    <div>
        <Image src={'/mena/bunga1.png'} width={500} height={500} alt="bunga" className={`absolute transition-all duration-700 ${parts === 5 ? 'bottom-0 left-0 opacity-100' : '-bottom-50 -left-50 rotate-0 opacity-0'}`}/>
        <Image src={'/mena/bunga1.png'} width={500} height={500} alt="bunga" className={`absolute transition-all duration-700 ${parts === 5 ? 'bottom-0 right-0 opacity-100' : '-bottom-50 -right-50 rotate-0 opacity-0'}`}/>
    </div>
    <div className={`absolute transition-all duration-700 top-0 left-0 w-full ${parts >= 6 ? 'opacity-30' : 'opacity-0'}`}>
        <Marquee className=""> 
           <PhotoCard type="image" src='/mena/photos/photo1.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo2.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo3.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo11.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo7.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo5.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo10.jpeg'/>
           <PhotoCard type="video" src="/mena/photos/tt2.mov" className="object-top"/>
        </Marquee>  
         <Marquee className="" delay={0.5} direction="right"> 
           <PhotoCard type="image" src='/mena/photos/photo8.jpeg'/>
           <PhotoCard type="video" src="/mena/photos/tt.mov" className="object-top"/>
           <PhotoCard type="image" src='/mena/photos/photo6.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo4.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo9.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo14.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo2.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo12.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/bakekok.jpeg'/> 
        </Marquee>  
        <Marquee className="" delay={0.5} direction="left"> 
           <PhotoCard type="image" src='/mena/photos/photo8.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo6.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo4.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo9.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo2.jpeg'/>
           <PhotoCard type="image" src='/mena/photos/photo12.jpeg'/>    

           <PhotoCard type="image" src='/mena/photos/photo13.jpeg'/>    
        </Marquee>  
    </div>
  </div>
  <div>
    {
      parts === 1 && <div className={`flex flex-col gap-2 transition-all ${parts === 1 ? 'opacity-100' : 'opacity-0'}`}>
      <TextGenerateEffect isStart={steps === 1} onFinish={() => setSteps(2)} words={words[0]}/>
      <TextGenerateEffect  isStart={steps === 2} onFinish={() => {
        setSteps(3)
        setParts(2)
      }} words={words[1]}/>
      </div>
    }
    {
      parts === 2 && <div className={`transition-all ${parts === 2 ? 'opacity-100' : 'opacity-0'}`}>
      <TextGenerateEffect isStart={steps === 3} onFinish={() => {
        setSteps(4)
        setParts(3)
      }} words={words[2]}/>
    </div>
    }
    {
      parts === 3 && <div className={`transition-all ${parts === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 4} onFinish={() => {
        setSteps(5)
        setParts(4)
      }} words={words[3]}/>
      </div>
    }
    {
      parts === 4 && <div className={`transition-all ${parts === 4 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 5} onFinish={() => {
        setSteps(6)
        setParts(5)
      }} words={words[4]} />
      </div>
    }
    {
      parts === 5 && <div className={`transition-all ${parts === 5 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 6} onFinish={() => {
        setSteps(7)
        setParts(6)
      }} words={words[5]}/>
      </div>
    }
    {
      parts === 6 && <div className={`transition-all ${parts === 6 ? 'opacity-100' : 'opacity-0'}`}>
      <TextGenerateEffect isStart={steps === 7} onFinish={() => setSteps(8)} words={words[6]}/>
      <TextGenerateEffect isStart={steps === 8} onFinish={() => {
        setSteps(9)
        setParts(7)
      }} words={words[7]}/>
      </div>
    }
    {
      parts === 7 && <div className={`transition-all ${parts === 7 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 9} onFinish={() => {
          setSteps(10)
          setParts(8)
        }} words={words[8]}/>
      </div>
    }
    {
      parts === 8 && <div className={`transition-all ${parts === 8 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 10} onFinish={() => {
          setSteps(11)
          setParts(9)
        }} words={words[9]}/>
      </div>
    }
    {
      parts === 9 && <div className={`transition-all ${parts === 9 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 11} onFinish={() => {
          setSteps(12)
          setParts(10)
        }} words={words[10]}/>
      </div>
    }
    {
      parts === 10 && <div className={`transition-all ${parts === 10 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 12} onFinish={() => {
          setSteps(13)
          setParts(11)
        }} words={words[11]}/>
      </div>
    }
    {
      parts === 11 && <div className={`transition-all ${parts === 11 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 13} onFinish={() => {
          setSteps(14)
          setParts(12)
        }} words={words[12]}/>
      </div>
    }
    {
      parts === 12 && <div className={`transition-all ${parts === 12 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 14} onFinish={() => {
          setSteps(15)
          setParts(13)
        }} words={words[13]}/>
      </div>
    }
    {
      parts === 13 && <div className={`transition-all ${parts === 13 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 15} onFinish={() => {
          setSteps(16)
          setParts(14)
        }} words={words[14]}/>
      </div>
    }
    {
      parts === 14 && <div className={`transition-all ${parts === 14 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 16} onFinish={() => {
          setSteps(17)
          setParts(15)
        }} words={words[15]}/>
      </div>
    }
    {
      parts === 15 && <div className={`transition-all ${parts === 15 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 17} onFinish={() => {
          setSteps(18)
          setParts(16)
        }} words={words[16]}/>
      </div>
    }
    {
      parts === 16 && <div className={`transition-all ${parts === 16 ? 'opacity-100' : 'opacity-0'}`}>
        <TextGenerateEffect isStart={steps === 18} onFinish={() => {}} words={words[17]}/>
      </div>
    }
    </div>
  </>
}

const words = [
  "Hi mena,",
  'Makasih udah menerima ini, ini aku sebutnya paket all in one of mena little happiness karena disini ada hal hal yang menurut aku bagian kecil dari hidup kamu yang precious dan kamu suka',
  "Wave to Earth -- pasti masuk salah satu artist yang kamu suka aku percaya sih, lagunya enak enak, kali ini aku bawain baju wave to earth aku pilih size m semoga pas sama kamu kalo kegedean atau kekecilan maaf yaa",
  "Dimsum -- ga cuma sekali dua kali kalo bilang lagi ngidam ini, jadi pasti kamu suka banget apalagi dimsum mentai",
  "Roblox dan Valorant --  apa yang perlu dipertanyakan lagi kalo ini ? Hehehe, udah bagian core hidup kamu kan, aku cuma bisa isengin kamu aja kalau lagi brainrot mulu hehee, jadi sekarang aku bantu support kebahagianmu aja dengan robux sama vp, semoga kamu seneng",
  "Bunga Matahari -- kali ini bunganya bunga fresh bukan bunga artificial, karena menurutku kureng kalo artificial, akan kerasa feelnya kalo bunga benaran, penasaran ga kenapa aku pilih bunga ini ? Aku berharap kamu bisa jadi kek bunga ini, karena kalo aku liat bunga ini rasanya heartwarming banget, semoga kamu bisa jadi orang yang heartwarming buat orang lain :)",
  "maaf kalau masih banyak kekurangan dari apa yang aku kasih, mungkin ini gabisa ngegantiin effort kamu bikin present DIY ke aku yang bagus banget dan creative, tapi semoga kamu suka",
  "ini rasa terima kasih dan gratitude dan ya sekaligus traktiran aku buat kamu buat apa yang kamu udah kasih selama ini.",
  "Maafin aku untuk semua sakit hati trauma dan komunikasi yang aku udah buat sampai selama ini, aku engga ada maksud sedikitpun untuk nyakitin kamu, aku juga engga ada sedikitpun mikirin buat mainin perasaan kamu, maafin aku kalau fokusku dikerjaanku dan me time ku mungkin udah buat kamu merasa engga direspect buat kehadirannya, tapi percayalah men aku engga ada niat sama sekali gituin kamu",
  "untuk semua kesalahan ku apapun itu baik aku sengaja atau gadisengaja aku minta maaf sedalam dalamnya",
  "Aku sebenarnya menunggu kamu gedean buat aku bisa seriusin dan tekanan-tekanan aku bisa pudar",
  "Entah gimana perasaan kamu sekarang, Kalo kamu tanya perasaan aku sekarang, aku engga menutup sedikitpun jalan buat kedepannya kita bisa bareng lagi, kalau dari kamu udah menutup rapat rapat perasaanmu buat aku juga gapapa karena perasaan kamu engga bisa dipaksa, aku cuma berharap kalau seandainya aku masih dikasih kesempatan sekali ini, aku mau benerin semua dari tindakanku, komunikasiku, menghargai kamu dan akan coba untuk mengerti kamu lebih lagi",
  "Aku cuma bisa berharap aja, toh kalo emang benaran jodoh pasti bakal diketemuin Tuhan juga ujung ujungnya, disisi lain jodoh gabisa ditungguin ajakan ya, jadi aku berusaha untuk mengembalikan dan menjaga hubungan ini bisa berjalan dengan baik dan benar lagi",
  "Semoga hari harimu bisa berjalan dengan baik, happy terus selalu, have fun while u are young, Semangat kedepannya apapun yang terjadi selalu percaya sama diri kamu sendiri",
  "semoga kuliahnya nanti bisa berjalan dengan baik dan lancar, jaga diri baik baik juga jangan sampai kebawa pergaulan yang engga engga nanti pas kuliah, semoga bisa mengontrol dirinya dengan baik",
  "buat masa depanmu yang kamu impiin bisa terwujud, dan kalaupun engga terwujud jangan putus asa, semangat terus karena jalan kehidupanmu udah ada Tuhan yang atur :)",
  "jangan lupa buat selalu berharap dan ngandalin Tuhan dalam segala hal, kalau kamu udah merasa terpuruk atau keadaan yang bikin kamu udah hopeless jangan pernah merasa sendiri kamu punya Tuhan yang nemenin kamu",
  "Selamat menikmati gift kecil dari aku, semoga setidaknya udah bisa bikin kamu senyum :)"
]

const PhotoCard = (props: {src: string; type: "video" | "image"; className?: string}) => {
  const {src, type, className} = props
  return <div className={`w-[350px] h-[350px] bg-red-500 ${className}`}>
       {type === 'image' ? <Image src={src} width={350} height={350} className="w-full h-full object-cover "  draggable={false} alt="sd"/>  : <video autoPlay muted className="w-full h-full object-cover" loop  src={src}/>}
  </div>
}