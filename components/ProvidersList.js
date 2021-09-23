import providerPay from "../pages/providerPay/[key]"
import Provider from "./Provider"
import styles from './ProvidersList.module.css'

const ProvidersList = (props) => {
    return (
        <ul className={styles.providers_list}>
            {props.providers.map((provider) => {
                return <Provider 
                    key={provider.id}
                    id = {provider.id}
                    title={provider.title}
                    url={provider.url}
                />
            })}
        </ul>
    )
}

export default ProvidersList
