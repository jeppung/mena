"use client"

import { Dispatch, SetStateAction, useRef, useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [steps, setSteps] = useState(1)
  const [parts, setParts] = useState(1)

  const openHandler = () => {
    audioRef.current!.volume = 0.1
    audioRef.current!.play();
    setIsOpen(true)
  }

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-[url(/white.jpg)]">
      <audio ref={audioRef} loop>
        <source src="/bad.mp3"/>
        <source src="/love.mp3"/>
      </audio>
      {
        isOpen ? <div className="max-w-[30%]">
          <Chapter1 parts={parts} setParts={setParts} setSteps={setSteps} steps={steps}/>
        </div> : <button onClick={openHandler} className="cursor-pointer px-6 py-2 text-white bg-black rounded">Open </button>
      }
    </div>
  );
}

const Chapter1 = (props: {steps: number, parts: number, setParts: Dispatch<SetStateAction<number>>, setSteps: Dispatch<SetStateAction<number>>}) => {
  const {steps, parts, setParts, setSteps} = props
  
  return <>
  <div>
    <div>
        <Image src={'/w2e.webp'} width={300} height={300} alt="w2e" className={`absolute transition-all duration-700 ${parts === 2 ? 'bottom-50 left-50 rotate-20 opacity-100' : '-bottom-50 -left-50 rotate-0 opacity-0'}`}/>
        <Image src={'/w2elogo.png'} width={300} height={300} alt="w2e" className={`absolute transition-all duration-700 ${parts === 2 ? 'bottom-50 right-50 -rotate-20 opacity-100' : '-bottom-50 -right-50 rotate-0 opacity-0'}`}/>
        <Image src={'/w2emember.png'} width={400} height={400} alt="w2e" className={`absolute transition-all duration-700 ${parts === 2 ? 'top-20 right-50 rotate-20 opacity-100' : '-top-50 -right-50 rotate-0 opacity-0'}`}/>        
    </div>
    <div>
        <Image src={'/dimsum1.png'} width={300} height={300} alt="dimsum" className={`absolute transition-all duration-700 ${parts === 3 ? 'bottom-50 left-50 rotate-20 opacity-100' : '-bottom-50 -left-50 rotate-0 opacity-0'}`}/>
        <Image src={'/dimsum2.png'} width={300} height={300} alt="dimsum" className={`absolute transition-all duration-700 ${parts === 3 ? 'bottom-50 right-50 -rotate-20 opacity-100' : '-bottom-50 -right-50 rotate-0 opacity-0'}`}/>
        <Image src={'/dimsum3.png'} width={400} height={400} alt="dimsum" className={`absolute transition-all duration-700 ${parts === 3 ? 'top-0 right-50 rotate-20 opacity-100' : '-top-50 -right-50 rotate-0 opacity-0'}`}/>        
    </div>
    <div>
        <Image src={'/roblox1.png'} width={300} height={300} alt="roblox" className={`absolute transition-all duration-700 ${parts === 4 ? 'bottom-50 left-50 rotate-20 opacity-100' : '-bottom-50 -left-50 rotate-0 opacity-0'}`}/>
        <Image src={'/valo1.png'} width={300} height={300} alt="valo" className={`absolute transition-all duration-700 ${parts === 4 ? 'bottom-50 right-50 -rotate-20 opacity-100' : '-bottom-50 -right-50 rotate-0 opacity-0'}`}/>
        <Image src={'/valo2.webp'} width={400} height={400} alt="valo" className={`absolute transition-all duration-700 ${parts === 4 ? 'top-0 right-50 rotate-20 opacity-100' : '-top-50 -right-50 rotate-0 opacity-0'}`}/>        
        <Image src={'/roblox2.png'} width={400} height={400} alt="roblox" className={`absolute transition-all duration-700 ${parts === 4 ? 'top-10 left-20 -rotate-20 opacity-100' : '-top-50 -left-50 rotate-0 opacity-0'}`}/>
    </div>
    <div>
        <Image src={'/bunga1.png'} width={500} height={500} alt="bunga" className={`absolute transition-all duration-700 ${parts === 5 ? 'bottom-0 left-0 opacity-100' : '-bottom-50 -left-50 rotate-0 opacity-0'}`}/>
        <Image src={'/bunga1.png'} width={500} height={500} alt="bunga" className={`absolute transition-all duration-700 ${parts === 5 ? 'bottom-0 right-0 opacity-100' : '-bottom-50 -right-50 rotate-0 opacity-0'}`}/>
    </div>
  </div>
    <div>
      {
      parts === 1 && <div className="flex flex-col gap-2">
      <TextGenerateEffect isStart={steps === 1} onFinish={() => setSteps(2)} words="Hi mena,"/>
      <TextGenerateEffect  isStart={steps === 2} onFinish={() => {
        setSteps(3)
        setParts(2)
      }} words="Makasih udah menerima ini, ini aku sebutnya paket all in one of mena little happiness karena disini ada hal hal yang menurut aku bagian kecil dari hidup kamu yang precious dan kamu suka"/>
    </div>
    }
    {
      parts === 2 && <div>
      <TextGenerateEffect isStart={steps === 3} onFinish={() => {
        setSteps(4)
        setParts(3)
      }} words="Wave to Earth -- pasti masuk salah satu artist yang kamu suka aku percaya sih, lagunya enak enak, kali ini aku bawain baju wave to earth aku pilih size m semoga pas sama kamu kalo kegedean atau kekecilan maaf yaa"/>
    </div>
    }
    {
      parts === 3 && <div>
        <TextGenerateEffect isStart={steps === 4} onFinish={() => {
        setSteps(5)
        setParts(4)
      }} words="Dimsum -- ga cuma sekali dua kali kalo bilang lagi ngidam ini, jadi pasti kamu suka banget apalagi dimsum mentai"/>
      </div>
    }
    {
      parts === 4 && <div>
        <TextGenerateEffect isStart={steps === 5} onFinish={() => {
        setSteps(6)
        setParts(5)
      }} words="Roblox dan Valorant --  apa yang perlu dipertanyakan lagi kalo ini ? Hehehe, udah bagian core hidup kamu kan, aku cuma bisa isengin kamu aja kalau lagi brainrot mulu hehee, jadi sekarang aku bantu support kebahagianmu aja dengan robux sama vp, semoga kamu seneng" />
      </div>
    }
    {
      parts === 5 && <div>
        <TextGenerateEffect isStart={steps === 6} onFinish={() => {
        setSteps(7)
        setParts(6)
      }} words="Bunga Matahari -- kali ini bunganya bunga fresh bukan bunga artificial, karena menurutku kureng kalo artificial, akan kerasa feelnya kalo bunga benaran, penasaran ga kenapa aku pilih bunga ini ? Aku berharap kamu bisa jadi kek bunga ini, karena kalo aku liat bunga ini rasanya heartwarming banget, aku berharap kamu juga bisa jadi orang yang hearthwarming bagi orang lain :)"/>
      </div>
    }
    {
      parts === 6 && <div>
      <TextGenerateEffect isStart={steps === 7} onFinish={() => setSteps(8)} words="maaf kalau masih banyak kekurangan dari apa yang aku kasih, mungkin ini gabisa ngegantiin effort kamu bikin present DIY ke aku yang bagus banget dan creative, tapi semoga kamu suka"/>
      <TextGenerateEffect isStart={steps === 8} onFinish={() => {
        setSteps(9)
        setParts(7)
      }} words="ini rasa terima kasih dan gratitude dan ya sekaligus traktiran aku buat kamu buat apa yang kamu udah kasih selama ini."/>
      </div>
    }
    {
      parts === 7 && <div>
        <TextGenerateEffect isStart={steps === 9} onFinish={() => {
          setSteps(10)
          setParts(8)
        }} words="Maafin aku untuk semua sakit hati trauma dan komunikasi yang aku udah buat sampai selama ini, aku engga ada maksud sedikitpun untuk nyakitin kamu, aku juga engga ada sedikitpun mikirin buat mainin perasaan kamu, maafin aku kalau fokusku dikerjaanku dan me time ku mungkin udah buat kamu merasa engga direspect buat kehadirannya, tapi percayalah men aku engga ada niat sama sekali gituin kamu, untuk semua kesalahan ku apapun itu baik aku sengaja atau gadisengaja aku minta maaf sedalam dalamnya"/>
      </div>
    }
    {
      parts === 8 && <div>
        <TextGenerateEffect isStart={steps === 10} onFinish={() => {
          setSteps(11)
          setParts(9)
        }} words="Maaf harus bilang ini tapi aku ga bisa nahan rasa suka dan sayangku ke kamu, walaupun aku banyak tekanan-tekanan tapi tetep ternyata aku gabisa nahannya. Entah gimana perasaan kamu sekarang, Kalo kamu tanya perasaan aku sekarang, aku engga menutup sedikitpun jalan buat kedepannya kita bisa bareng lagi, kalau dari kamu udah menutup rapat rapat perasaanmu buat aku juga gapapa karena perasaan kamu engga bisa dipaksa, aku cuma berharap kalau seandainya aku masih dikasih kesempatan sekali ini, aku mau benerin semua dari tindakanku, komunikasiku, dan lain lain sebagainya ke kamu dan akan coba untuk mengerti kamu lebih lagi"/>
      </div>
    }
    {
      parts === 9 && <div>
        <TextGenerateEffect isStart={steps === 11} onFinish={() => {
          setSteps(12)
          setParts(10)
        }} words="Aku juga engga ada niat sengaja untuk menggantung perasaan kamu aku nunggu waktu yang tepat sebetulnya, karena aku nunggu buat tekanan tekananku udah pudar, sejujurnya aku nunggu sebenernya buat kamu udah agak gedean baru aku bakal ga ngegantung kamu lagi, aku mikirnya nanti kamu kuliah mungkin semester 2 atau 3 an, jadi makanya masih aku jalani dan bertahan."/>
      </div>
    }
    {
      parts === 10 && <div>
        <TextGenerateEffect isStart={steps === 12} onFinish={() => {
          setSteps(13)
          setParts(11)
        }} words="Aku cuma bisa berharap aja, toh kalo emang benaran jodoh pasti bakal diketemuin Tuhan juga ujung ujungnya, disisi lain jodoh gabisa ditungguin ajakan ya, jadi aku berusaha untuk mengembalikan dan menjaga hubungan ini bisa berjalan dengan baik dan benar lagi"/>
      </div>
    }
    {
      parts === 11 && <div>
        <TextGenerateEffect isStart={steps === 13} onFinish={() => {
          setSteps(14)
          setParts(12)
        }} words="Semoga hari harimu bisa berjalan dengan baik, happy terus selalu, have fun while u are young, Semangat kedepannya apapun yang terjadi selalu percaya sama diri kamu sendiri"/>
      </div>
    }
    {
      parts === 12 && <div>
        <TextGenerateEffect isStart={steps === 14} onFinish={() => {
          setSteps(15)
          setParts(13)
        }} words="semoga kuliahnya nanti bisa berjalan dengan baik dan lancar, jaga diri baik baik juga jangan sampai kebawa pergaulan yang engga engga nanti pas kuliah, semoga bisa mengontrol dirinya dengan baik"/>
      </div>
    }
    {
      parts === 13 && <div>
        <TextGenerateEffect isStart={steps === 15} onFinish={() => {
          setSteps(16)
          setParts(14)
        }} words="buat masa depanmu yang kamu impiin bisa terwujud, dan kalaupun engga terwujud jangan putus asa, semangat terus karena jalan kehidupanmu udah ada Tuhan yang atur :)"/>
      </div>
    }
    {
      parts === 14 && <div>
        <TextGenerateEffect isStart={steps === 16} onFinish={() => {
          setSteps(17)
          setParts(15)
        }} words="jangan lupa buat selalu berharap dan ngandalin Tuhan dalam segala hal, kalau kamu udah merasa terpuruk atau keadaan yang bikin kamu udah hopeless jangan pernah merasa sendiri kamu punya Tuhan yang nemenin kamu"/>
      </div>
    }
     {
      parts === 15 && <div>
        <TextGenerateEffect isStart={steps === 17} onFinish={() => {}} words="Selamat menikmati gift kecil dari aku, semoga setidaknya udah bisa bikin kamu senyum :)"/>
      </div>
    }
    
    </div>
  </>
}

const Chapter2 = () => {
  
}