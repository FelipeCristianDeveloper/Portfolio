import './style.css';
import '../CardPj';
import CardPj from "../CardPj";


export default function CardProjects () {


    return (
        <section className="section-projects">
            <div className="section-projects-title">
                <h1>Projetos</h1>
            </div>

            <div className="section-projects-box-cards">
                <CardPj />
            </div>


        </section>
    )
};