import styles from "./Item.module.scss";
import logo from "../../../assets/logo.svg";
import Image from "next/image";
import Itens from "../Itens.json";
import classNames from "classnames";

type IProps = typeof Itens[0]

export default function Item(props: IProps) {

    const {title, description, category, size, serving, price, photo} = props

    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <Image src={photo} width={200} height={200} alt={title} />
            </div>

            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__tipo]: true,
                        [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
                    })}>
                        {category.label}
                    </div>
                    <div className={styles.item__porcao}>
                        {size}g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        Serve {serving} {serving === 1 ? "pessoa" : "pessoas"}
                    </div>
                    <div className={styles.item__valor}>
                        R$ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}