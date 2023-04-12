import { HStack, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const Wallet_Multi_Button_Dynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
//   server-side rendering (SSR) should be disabled for this component.
);
// FC is a type defined in React that stands for FunctionComponent, which is a functional component that accepts props.
const NavBar: FC = () => {
  return (
    // HStack is used to horizontally stack its children components.
    <HStack width="full" padding={4}>
        {/* Spacer is an empty component that takes up available space between its siblings. */}
      <Spacer />
      <Wallet_Multi_Button_Dynamic
        className={styles["wallet-adapter-button-trigger"]}
      />
    </HStack>
  );
};
export default NavBar;
