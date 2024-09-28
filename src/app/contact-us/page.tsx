import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Link from "next/link";

export default function Contact() {
    return(
        <div>
            <div>
                <Header/>
                <Footer/>
                <div className="Text">
                        <ul>
                            <li>Gmail : Muskanmadni153@gmail.com</li>
                            <li>Contact : 03408051451</li>
                            <li><a href="https://github.com/Muskanmadni">GitHub : https://github.com/Muskanmadni</a></li>
                            <li><a href="https://www.linkedin.com/in/umm-e-habiba-733838277/">linkdin : https://www.linkedin.com/in/umm-e-habiba-733838277/</a></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}