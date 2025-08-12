import { Group, Languages } from 'lucide-react';
import './Navbar.css';
import {Switch} from "../ui/switch";
import {Select,SelectTrigger,SelectValue,SelectContent,SelectItem} from '../ui/select'

const Navbar = () => {
  const fonts:string[] = ['Noto Sans','Roboto','Nunito', 'Open Sans'];

  return (
    <div className="navbar">
        <div className="navbar-logo"> 
        <Languages size={27}/>
        <p>
          Dictoglish
        </p>
        </div>
        <div className="navbar-buttons">
            <div className="navbar-buttons-fonts">
            <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={fonts[0]} />
                </SelectTrigger>
                <SelectContent>
                  {fonts.map(item=>{
                    return <SelectItem value={item}>{item}</SelectItem>
                  })}
                </SelectContent>
            </Select>
            </div>
            <div className="navbar-buttons-darkmodeSwitch w-[2rem] h-[2rem] flex items-center">
              <Switch  />
            </div>
        </div>
    </div>
  )
}

export default Navbar