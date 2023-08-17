import styles from "./Seacher.module.scss"
import { CgSearch } from "react-icons/cg"

interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Searcher({search, setSearch}: Props) {
    return (
        <div className={styles.searcher}>
            <input type="text" placeholder="Search" value={search} onChange={ e => setSearch(e.target.value)} />
            <CgSearch size={20} color="#4C415F" />
        </div>
    ) 
}