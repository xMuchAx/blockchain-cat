import styles from "../../app/dashboard/Dashboard.module.css";
// import { TrendUp, TrendDown } from "phosphor-react"; // Import des icônes (commenté pour l'instant)

interface HistoryItemProps {
    direction: "up" | "down";
    id: string;
    recipient: string;
    amount: number;
    date: string;
}

export default function HistoryItem({
    direction,
    id,
    recipient,
    amount,
    date,
}: HistoryItemProps) {
    return (
        <li className={direction === "up" ? styles.up : styles.down}>
            <div>
                {/* Affichage de l'icône en fonction de la direction (commenté) */}
                {/* {direction === "up" ? (
          <TrendUp size={21} color="#00a478" />
        ) : (
          <TrendDown size={21} color="#F64C02" />
        )} */}
                <strong>Transaction #{id}</strong>
                <p>Reçu par {recipient}</p>
            </div>
            <div>
                <strong>
                    {amount < 0 ? "-" : "+"} {Math.abs(amount)}{" "}
                    <span>CAT²</span>
                </strong>
                <p>{date}</p>
            </div>
        </li>
    );
}
