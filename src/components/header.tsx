import Image from "next/image"
import picture from "@/components/images/picture.jpeg"
import Link from "next/link"

export function Header(){
   return(
    <div className="header">
        <ul className="header-buttons">
            <Link href={"/"}>
            <li>Home</li>
            </Link>
            <Link href={"/about-us"}>
            <li>About</li>
            </Link>
            <Link href={"/contact-us"}>
            <li>Contact</li>
            </Link>
        </ul>
    </div>     
   )
}
export function Home(){
    return(
        <div className="Image">
            <Image src={picture} alt="picture" width={300} height={400} ></Image>
        </div>
    )
}
export function Text(){
    return(
        <div>
            <div className="Text">
                <p>Artificial Intelligence (AI) is the simulation of human intelligence in machines, especially computer systems.
                    <br/> 
                    These machines are programmed to think like humans and mimic their actions.
                </p>
            
            
            </div>
        </div>
    )
}
