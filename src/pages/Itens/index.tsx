import menu from "./Itens.json";
import Item from "./Item"
import styles from "./Itens.module.scss"
import { useEffect, useState } from "react";

interface Props {
    search: string,
    filter: number | null,
    ordenador: string
}

export default function Itens(props: Props) {

    const [list, setList] = useState(menu)

    const { search, filter, ordenador } = props

    function busca(title: string) {
        const regex = new RegExp(search, 'i')

        return regex.test(title)
    }

    function testFilter(id: number) {
        if (filter !== null) return filter === id;
        return true;
    }

    function ordenar(newList: typeof menu) {
        switch(ordenador) {
            case 'porcao' :
                return newList.sort((a, b) => a.size > b.size ?  1 :  -1)
            case 'qtd_pessoas' :
                return newList.sort((a,b) => a.serving > b.serving ? 1 : -1  )    
            case 'preco' :
                return newList.sort((a,b) => a.price > b.price ? 1 : -1  )
            default:
                return newList    
        }
    }

    useEffect(() => {
        console.log("Search:", search, "Filter:", filter);

        const newList = menu.filter(item => busca(item.title) && testFilter(item.category.id))

        setList(ordenar(newList))
    }, [search, filter, ordenador])

    return (
        <div className={styles.itens}>
            {
                list.map(item => (
                    <Item key={item.id} {...item} />

                ))
            }
            
        </div>
    )
}