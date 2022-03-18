/*icons de navegação*/ 
import {BiHome, BiUser} from 'react-icons/bi'
import {ImFilesEmpty} from 'react-icons/im'
import {MdOutlineContacts} from 'react-icons/md'
import {RiUserSettingsLine} from 'react-icons/ri'

/*icons das redes sociais*/
import {FaLinkedinIn, FaInstagram, FaGithub, FaFacebookF, FaWhatsapp} from 'react-icons/fa'

/*----------Dados de navegação-------------*/ 
export const BtnNavBar = [
    {   nome: "Home",
        icon: <BiHome/>,
        id:"#home",
    },
    {   nome: "Sobre",
        icon: <BiUser/>,
        id:"#sobre",
    },
    {   nome: "Skills",
        icon: <RiUserSettingsLine/>,
        id:"#skills",
    },
    {   nome: "Projetos",
        icon: <ImFilesEmpty/>,
        id:"#projetos",
    }, 
    {  
     nome: "Contato",
    icon: <MdOutlineContacts/>,
    id:"#contato",
    },
]


/*----------Dados das redes sociais-------------*/ 

export const SocialLiks = [
    {
        socialIcons:<FaLinkedinIn/>,
        redirect:"https://www.linkedin.com/in/ramiro-brito-49609121b/",
    },
    {
        socialIcons:<FaGithub/>,
        redirect:"https://github.com/48jorgebrito",
    },
    {
        socialIcons:<FaWhatsapp/>,
        redirect:"https://api.whatsapp.com/send/?phone=5598987853167&text&app_absent=0",
    },
    {
        socialIcons:<FaInstagram/>,
        redirect:"https://www.instagram.com/ramirobritto",
    },
    {
        socialIcons:<FaFacebookF/>,
        redirect:"https://www.facebook.com/ramiro.brito.92/",
    },
]