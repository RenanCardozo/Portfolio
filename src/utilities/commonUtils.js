import Home from '../views/Home/Home';
import AboutMe from '../views/AboutMe/AboutMe';
import ContactMe from '../views/ContactMe/ContactMe';
import Project from '../views/Project/Project';


export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "About Me",
        component: AboutMe,
    },
    {
        screen_name: "Projects",
        component: Project,
    },
    {
        screen_name: "Contact Me",
        component: ContactMe,
    }
]

export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1;
    for(let i = 0; i < TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
};