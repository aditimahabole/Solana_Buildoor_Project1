import {FC,MouseEventHandler,useCallback} from "react";
import {Button,Container,Heading,HStack,Text,VStack,} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import css from "../styles/rough.module.css";
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"

const Disconnected : FC = () =>{
    const modal_state = useWalletModal()
    const {wallet,connect} = useWallet()
    const handle_click:MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) =>{
            if(event.defaultPrevented){ return}
            if(!wallet){
                modal_state.setVisible(true)
            }
            else{
                connect().catch(()=>{})
            }
        }
        ,
        [wallet,connect,modal_state]
    )
    return(
        <Container className={css.disconnect_container}>
            <VStack spacing={20}>
                <Heading color="white" as="h1" size="2xl" noOfLines={2} textAlign ="center" >
                    Mint your Buildoor. Earn $BLD. Level up.
                </Heading>
                <Button bgColor="accent" color="white" maxW="380px"onClick={handle_click}>
                    <HStack>
                        <Text>become a Build-door!</Text>
                        <ArrowForwardIcon/>
                    </HStack>
                </Button>
            </VStack>
        </Container>
    )
}
export default Disconnected;