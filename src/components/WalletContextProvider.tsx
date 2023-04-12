import {FC,ReactNode} from "react"
import {ConnectionProvider,WalletProvider} from "@solana/wallet-adapter-react"
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl, export_default } from "@solana/web3.js"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import {useMemo} from "react"
// useMemo hook from the react package, which will be used to memoize the value of the url constant.
// ReactNode is a type for a React node that can be rendered, such as an element or a fragment.
require("@solana/wallet-adapter-react-ui/styles.css")
const WalletContextProvider:FC<{children:ReactNode}> = ({children})=>{
    const url = useMemo(()=>clusterApiUrl("devnet"),[])
    // The empty dependency array [] means that the useMemo hook will only run once and return the memoized value
    const phantom = new PhantomWalletAdapter()
    return(
        <ConnectionProvider endpoint={url}>
            <WalletProvider wallets = {[phantom]}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}
// WalletContextProvider using a functional component syntax.
// The FC type is used to specify that this component accepts props of type {children: ReactNode}, which means that it expects a single child element or a fragment.
export default WalletContextProvider;