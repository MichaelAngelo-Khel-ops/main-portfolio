import BoxIcon from "../components/svgIcon/BoxIcon.jsx";
import PaintIcon from "../components/svgIcon/PaintIcon.jsx";
import GearIcon from "../components/svgIcon/GearIcon.jsx";
import CopyIcon from "../components/svgIcon/CopyIcon.jsx";



export const toolBlocks = [
    {
        id: 1,
        name: "Library",
        subName: "Front End",
        icon: BoxIcon,
        tools: [
            'Shopify',
            'React',
            'Java Script',
            'HTML5/CSS'
        ]
    },
    {
        id: 2,
        name: "Plugins",
        subName: "Back End / Logic",
        icon: GearIcon,
        tools: [
            'Liquid',
            'Rest APIs',
            'Node',
            'Java Script',
            'GraphQL',
        ]
    },
    {
        id: 3,
        name: "Canvas",
        subName: "Styling & Animation",
        icon: PaintIcon,
        tools: [
            'GSAP',
            'Responsive Design',
            'Bootstrap',
            'TailwindCSS',
        ]
    },
    {
        id: 4,
        name: "Accessories",
        subName: "Tools",
        icon: CopyIcon,
        tools: [
            'Git/GitHub',
            'Figma',
            'Canva',
            'VS Code',
            'Vercel',
        ]
    }
]