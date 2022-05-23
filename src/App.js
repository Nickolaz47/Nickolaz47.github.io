import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavMenu from './components/NavMenu'
import {FaLinkedin, FaGithub, FaWhatsapp} from 'react-icons/fa'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Certificates from './pages/Certificates'
import certificates from './data/certificates.json'

function App() {

    const professions = ['Biomédico', 'Bioinformata', 'Desenvolvedor Python', 
        'Desenvolvedor JavaScript', 'Desenvolvedor Web Full Stack'
    ]

    const socialMediaLinks = [
        {icon: <FaWhatsapp size={28}/>, 
        link: 'https://api.whatsapp.com/send?phone=5521981231412'}, 
        {icon: <FaLinkedin size={28}/>, 
        link: 'https://www.linkedin.com/in/nicolas-da-matta-4b948b141/'}, 
        {icon: <FaGithub size={28}/>, 
        link: 'https://github.com/Nickolaz47'}
    ]

    const navLinks = [
        {name: 'Home', link: '/'}, 
        {name: 'Habilidades', link: '/skills'}, 
        {name: 'Certificados', link: '/certificates'},
    ]

    const softSkills = [
        'Resolução de problemas', 'Proatividade', 'Controle emocional',
        'Adaptabilidade', 'Capacidade de trabalhar sobre pressão', 
        'Organização', 'Trabalho em equipe',
    ]

    const hardSkills = [
        {name: 'Python', level: 80},
        {name: 'HTML', level: 60},
        {name: 'CSS', level: 60},
        {name: 'JavaScript', level: 60},
        {name: 'BootStrap', level: 60},
        {name: 'React', level: 60},
        {name: 'Word', level: 60},
        {name: 'Excel', level: 60},
        {name: 'PowerPoint', level: 60},
        {name: 'PostgreSQL', level: 40},
        {name: 'Machine Learning', level: 40},
    ]

    return (
        <div className="App">
            <BrowserRouter>
                <NavMenu navLinks={navLinks} 
                professions={professions} 
                socialMediaLinks={socialMediaLinks}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/skills" element={
                    <Skills 
                    softSkills={softSkills}
                    hardSkills={hardSkills}/>
                    }/>
                    <Route path="/certificates" element={
                        <Certificates certificates={certificates}/>
                    }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
