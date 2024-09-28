import {Header} from "@/components/header";
import Image from "next/image";
import picture2 from "@/components/images/picture2.jpeg";
import { Footer } from "@/components/footer";

export default function About(){
    return(
        <div>
            <div>
                <Header/>
                <Footer/>
                <div className="Image">
                <Image src={picture2} width={300} height={400} alt="aboutpicture"></Image>
                </div>
                <div className="Text">
                    <h1>My name is Umm-E-habiba Madni . I am Frontend and Backend developer and Graphic Designer also
                            <ul>
                                <h1 className="Skills">My skills</h1>
                                <li>HTML</li>
                                <li>Css</li>
                                <li>Javascript</li>
                                <li>Graphic Designer</li>
                                <h1 className="Education">My Education</h1>
                                <li>Matriculation : Computer Science</li>
                                <li>Intermidiate : Arts</li>
                                <li>Diploma (3years) : Software Engnineering</li>
                            </ul>
                    </h1>
                </div>
            </div>
        </div>
    )
}

