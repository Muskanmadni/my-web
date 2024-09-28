import { Footer } from "@/components/footer";
import {Header} from "@/components/header";
import { Home } from "@/components/header";
import { Text } from "@/components/header";


export default function home(){
  return(
    <div>
      <Header/>
      <Home/>
      <Text/>
      <Footer/>
    </div>
  )
}