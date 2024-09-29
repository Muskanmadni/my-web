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
                <h1>has become increasingly important in today's world, offering numerous benefits across various industries.
                     AI's ability to analyze vast amounts of data, learn from patterns, and make intelligent decisions has revolutionized
                      fields like healthcare, finance, manufacturing, and customer service. For instance, AI-powered diagnostic tools can 
                      assist doctors in detecting diseases earlier, while AI-driven chatbots can provide efficient customer support. Furthermore,
                       AI is driving innovation in areas such as self-driving cars, personalized medicine, and climate change modeling, demonstrating 
                       its potential to address complex global challenges
                </h1>
            </div>
        </div>
    )
}
