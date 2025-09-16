import footerFacts from "../../api/footerApi.json";
import {MdPlace} from "react-icons/md" ;
import {IoCallSharp} from "react-icons/io5" ;
import {TbMailPlus} from "react-icons/tb" ;

export const Footer = () => {
    const footericon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    }

    return <footer>
        <div className="footer-container">
            <div className="footer-card-container">
                {footerFacts.map((footerData, idx) => {
                    const { icon, title, details } = footerData;
                    return (
                        <div className="footer-card" key={idx}>
                            <div className="footer-icon">{footericon[icon]}</div>
                            <div className="footer-contact">
                                <p className="footer-title">{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </footer>
}