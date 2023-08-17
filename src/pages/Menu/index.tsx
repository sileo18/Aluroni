'use client'
import styles from "./Menu.module.scss";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Searcher from "./Searcher";
import { useState } from "react";
import Filters from "./Filters";
import Order from "./Cart/Order";
import Itens from "../Itens";

export default function Menu() {

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState("")

    return (
        <main>
            <nav className={styles.menu}>
                <Image src={Logo} alt="Logo Aluroni" width={152} height={64} />
            </nav>

            <header className={styles.header}>
                <div className={styles.header__text}>
                    A Casa do Código e da Massa
                </div>
            </header>

            <section className={styles.menu1}>
                <h3 className={styles.menu1__title}>Menu</h3>


                <Searcher search={search} setSearch={setSearch} />

                <div className={styles.menu1__filters}>
                    <Filters filter={filter} setFilter={setFilter} />                    

                    <Order setOrdenador={setOrdenador} ordenador={ordenador} />
                </div>

                <Itens search={search} filter={filter} ordenador={ordenador} />
            </section>

        </main>
    )
}